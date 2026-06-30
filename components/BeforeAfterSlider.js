import { useEffect, useRef, useState } from "react";

const BEFORE =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90";
const AFTER =
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=90";

const RADIUS = 100;
const LIFETIME = 2800;
const MAX_PTS = 44;
const MIN_DIST = 10;
const MIN_MS = 14;
const MASK = "radial-gradient(circle, black 0%, black 50%, transparent 100%)";

export default function BeforeAfterSlider() {
  const frameRef = useRef(null);
  const ptsRef = useRef([]);
  const rafRef = useRef(null);

  const [patches, setPatches] = useState([]);
  const [interactive, setInteractive] = useState(false);
  const [hasWiped, setHasWiped] = useState(false);
  const [size, setSize] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setInteractive(!reduced);

    const measure = () => {
      if (frameRef.current) {
        const r = frameRef.current.getBoundingClientRect();
        setSize({ w: r.width, h: r.height });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    let alive = true;

    const tick = () => {
      if (!alive) return;
      const now = performance.now();
      ptsRef.current = ptsRef.current.filter((p) => now - p.t < LIFETIME);
      setPatches(
        ptsRef.current.map((p) => ({
          ...p,
          opacity: Math.max(0, 1 - (now - p.t) / LIFETIME),
        })),
      );
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [interactive]);

  const addPoint = (cx, cy) => {
    const rect = frameRef.current.getBoundingClientRect();
    const x = cx - rect.left;
    const y = cy - rect.top;
    const now = performance.now();

    frameRef.current.style.setProperty("--cx", `${x}px`);
    frameRef.current.style.setProperty("--cy", `${y}px`);

    const last = ptsRef.current[ptsRef.current.length - 1];
    if (last) {
      const dx = x - last.x,
        dy = y - last.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DIST && now - last.t < MIN_MS)
        return;
    }

    ptsRef.current.push({ x, y, t: now, id: `${now}-${x}` });
    if (ptsRef.current.length > MAX_PTS) ptsRef.current.shift();
    if (!hasWiped) setHasWiped(true);
  };

  const onMouseMove = (e) => {
    if (interactive) addPoint(e.clientX, e.clientY);
  };
  const onTouchMove = (e) => {
    if (interactive && e.touches[0])
      addPoint(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <div className="cc-transform-card">
      <div className="cc-transform-head">
        <div>
          <span className="cc-kicker">Detailing Result</span>
          <h3>From dusty to showroom shine.</h3>
          <p>
            A cleaner, glossier, and better protected finish for daily cars,
            family vehicles, and premium rides.
          </p>
        </div>
        <span className="cc-result-badge">
          {interactive ? "Swipe to reveal" : "Before / After"}
        </span>
      </div>

      <div
        ref={frameRef}
        className={`cc-wipe-frame${hasWiped ? " has-wiped" : ""}${interactive ? "" : " is-static"}`}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        aria-label="Move cursor or swipe to reveal the clean car"
      >
        {/* BEFORE — base layer */}
        <img
          className="cc-wipe-img cc-wipe-before"
          src={BEFORE}
          alt="Car before detailing"
        />
        <div className="cc-dirty-effect" />

        {/* AFTER — wipe patches follow cursor */}
        {interactive &&
          patches.map((p) => (
            <div
              key={p.id}
              className="cc-wipe-patch"
              style={{
                left: p.x,
                top: p.y,
                width: RADIUS * 2,
                height: RADIUS * 2,
                opacity: p.opacity,
                backgroundImage: `url('${AFTER}')`,
                backgroundSize: `${size.w}px ${size.h}px`,
                backgroundPosition: `${-(p.x - RADIUS)}px ${-(p.y - RADIUS)}px`,
                WebkitMaskImage: MASK,
                maskImage: MASK,
              }}
            />
          ))}

        {/* Static after for reduced-motion / no-JS */}
        {!interactive && (
          <div className="cc-wipe-static-after">
            <img
              src={AFTER}
              alt="Car after detailing"
              className="cc-wipe-img"
            />
          </div>
        )}

        {/* Hint label — fades once user starts wiping */}
        <span className="cc-wipe-label">
          {interactive ? "Move your cursor to reveal" : "Before → After"}
        </span>

        {/* Custom cursor ring */}
        {interactive && (
          <div
            className="cc-cursor-ring"
            style={{ left: "var(--cx, -999px)", top: "var(--cy, -999px)" }}
          />
        )}
      </div>

      <div className="cc-result-row">
        <div>
          <strong>Deep clean</strong>
          <small>Dust, stains, and surface dirt removed.</small>
        </div>
        <div>
          <strong>Gloss finish</strong>
          <small>Paint looks brighter, cleaner, and smoother.</small>
        </div>
        <div>
          <strong>Protection</strong>
          <small>Wax, polish, sealant, or ceramic spray available.</small>
        </div>
      </div>
    </div>
  );
}
