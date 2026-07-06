import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HERO_VIDEO =
  "https://res.cloudinary.com/dtwihjzyn/video/upload/q_auto,f_auto,w_1280/v1782731105/hero_jozywg.mp4";
const HERO_POSTER =
  "https://res.cloudinary.com/dtwihjzyn/video/upload/so_0,q_auto,f_jpg,w_1280/v1782731105/hero_jozywg.jpg";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="hero motion-hero">
      <div className="motion-hero-backdrops">
        <video
          ref={videoRef}
          className="motion-hero-video"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      <div className="container motion-hero-inner">
        <h1 className="hero-heading">
          Real shine for cars
          <br />
          that deserve better care.
        </h1>

        <motion.p
          className="motion-hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          Crystal Car Care provides car washing, detailing, paint protection,
          doorstep service, monthly packages, and corporate fleet cleaning
          across Islamabad and Rawalpindi.
        </motion.p>

        <motion.div
          className="motion-hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
        >
          <Link href="/contact" className="btn btn-primary">
            Book a Wash
          </Link>
          <Link href="/services" className="motion-glass-btn">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
