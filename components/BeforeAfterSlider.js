import { useEffect, useRef, useState } from "react";

const WIPE_LIFETIME_MS = 2600;
const WIPE_RADIUS = 85;
const MAX_POINTS = 40;
const MIN_POINT_DISTANCE = 14;
const MIN_POINT_INTERVAL_MS = 16;
const PATCH_MASK =
  "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)";

export default function BeforeAfterSlider() {
  const beforeImage =
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90";
  const afterImage =
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=90";

  const frameRef = useRef(null);
  const pointsRef = useRef([]);
  const [patches, setPatches] = useState([]);
  const [interactive, setInteractive] = useState(false);
  const [hasWiped, setHasWiped] = useState(false);
  const [frameSize, setFrameSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setInteractive(!reduceMotion);

    const measure = () => {
      if (frameRef.current) {
        const rect = frameRef.current.getBoundingClientRect();
        setFrameSize({ width: rect.width, height: rect.height });
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!interactive) return;

    let isActive = true;
    let frameId = null;

    const tick = () => {
      if (!isActive) return;

      const now = performance.now();
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.t < WIPE_LIFETIME_MS,
      );

      const next = pointsRef.current.map((p) => {
        const age = (now - p.t) / WIPE_LIFETIME_MS;
        const opacity = Math.max(0, 1 - age);
        return { x: p.x, y: p.y, opacity, id: p.id };
      });

      setPatches(next);

      if (isActive) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      isActive = false;
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [interactive]);

  const addPoint = (clientX, clientY) => {
    const rect = frameRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const now = performance.now();

    if (frameRef.current) {
      frameRef.current.style.setProperty("--cursor-x", `${x}px`);
      frameRef.current.style.setProperty("--cursor-y", `${y}px`);
    }

    const last = pointsRef.current[pointsRef.current.length - 1];
    if (last) {
      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const elapsed = now - last.t;
      if (dist < MIN_POINT_DISTANCE && elapsed < MIN_POINT_INTERVAL_MS) {
        return;
      }
    }

    pointsRef.current.push({ x, y, t: now, id: `${now}-${Math.random()}` });
    if (pointsRef.current.length > MAX_POINTS) {
      pointsRef.current.shift();
    }
    if (!hasWiped) setHasWiped(true);
  };

  const handleMouseMove = (e) => {
    if (!interactive) return;
    addPoint(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!interactive) return;
    const touch = e.touches[0];
    if (touch) addPoint(touch.clientX, touch.clientY);
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
          {interactive ? "Wipe to reveal" : "Before / After"}
        </span>
      </div>

      <div
        className={`cc-wipe-frame ${hasWiped ? "has-wiped" : ""} ${interactive ? "" : "is-static"}`}
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        tabIndex={0}
        aria-label="Car before and after detailing comparison. On a mouse or touch device, move across the photo to wipe away the dirt and reveal the clean result."
      >
        <img
          className="cc-wipe-img cc-wipe-before"
          src={beforeImage}
          alt="Car before detailing"
        />
        <div className="cc-dirty-effect"></div>

        {interactive &&
          patches.map((p) => (
            <div
              key={p.id}
              className="cc-wipe-patch"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${WIPE_RADIUS * 2}px`,
                height: `${WIPE_RADIUS * 2}px`,
                opacity: p.opacity,
                backgroundImage: `url('${afterImage}')`,
                backgroundSize: `${frameSize.width}px ${frameSize.height}px`,
                backgroundPosition: `${-(p.x - WIPE_RADIUS)}px ${-(p.y - WIPE_RADIUS)}px`,
                WebkitMaskImage: PATCH_MASK,
                maskImage: PATCH_MASK,
              }}
            />
          ))}

        {!interactive && (
          <div className="cc-wipe-static-after">
            <img
              src={afterImage}
              alt="Car after detailing"
              className="cc-wipe-img"
            />
          </div>
        )}

        <span className="cc-wipe-label">
          {interactive
            ? "Move your cursor to wipe clean"
            : "Before \u2192 After"}
        </span>
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
