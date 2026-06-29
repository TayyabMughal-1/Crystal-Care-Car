import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const POSTER_IMAGE =
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=80";

function FadeIn({ delay = 0, duration = 800, className = "", children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({ text, charDelay = 30, startDelay = 200 }) {
  const [started, setStarted] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const id = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay]);

  let globalIndex = 0;

  return (
    <h1 className="motion-heading">
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        return (
          <span className="motion-heading-line" key={lineIndex}>
            {words.map((word, wordIndex) => {
              const wordSpan = (
                <span className="motion-heading-word" key={wordIndex}>
                  {word.split("").map((char, charIndex) => {
                    const delay = globalIndex * charDelay;
                    globalIndex += 1;
                    return (
                      <span
                        key={charIndex}
                        className={`motion-heading-char ${started ? "is-visible" : ""}`}
                        style={{ transitionDelay: `${delay}ms` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
              const isLastWord = wordIndex === words.length - 1;
              if (isLastWord) return wordSpan;
              globalIndex += 1;
              return <span key={`${wordIndex}-pair`}>{wordSpan} </span>;
            })}
          </span>
        );
      })}
    </h1>
  );
}

export default function Hero() {
  const videoRef = useRef(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setAllowVideo(!reduceMotion);
  }, []);

  useEffect(() => {
    if (!allowVideo || !videoRef.current) return;
    const video = videoRef.current;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster image
        // remains visible as a safe fallback in that case.
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [allowVideo]);

  return (
    <section className="hero motion-hero">
      <div className="motion-hero-backdrops">
        <img
          src={POSTER_IMAGE}
          alt=""
          className="motion-hero-poster"
          aria-hidden="true"
        />
        {allowVideo && (
          <video
            ref={videoRef}
            className={`motion-hero-video ${videoReady ? "is-ready" : ""}`}
            src="/videos/hero.mp4"
            poster={POSTER_IMAGE}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="container motion-hero-inner">
        <div className="motion-hero-grid">
          <div className="motion-hero-main">
            <AnimatedHeading
              text={"Real shine for cars\nthat deserve better care."}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="motion-hero-sub">
                Crystal Car Wash provides car washing, detailing, paint
                protection, doorstep service, monthly packages, and corporate
                fleet cleaning across Islamabad and Rawalpindi.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="motion-hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Book a Wash
                </Link>
                <Link href="/services" className="motion-glass-btn">
                  Explore Services
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="motion-hero-tag-wrap">
            <FadeIn delay={1400} duration={1000}>
              <div className="motion-glass-tag">
                Wash. Detailing. Paint protection.
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
