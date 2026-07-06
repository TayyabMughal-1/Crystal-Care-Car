import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllowVideo(!reduceMotion);
  }, []);

  return (
    <section className="hero motion-hero">
      <div className="motion-hero-backdrops">
        {allowVideo && (
          <video
            className="motion-hero-video"
            src="https://res.cloudinary.com/dtwihjzyn/video/upload/v1782731105/hero_jozywg.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="container motion-hero-inner">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Real shine for cars<br />that deserve better care.
        </motion.h1>

        <motion.p
          className="motion-hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          Crystal Car Care provides car washing, detailing, paint
          protection, doorstep service, monthly packages, and corporate
          fleet cleaning across Islamabad and Rawalpindi.
        </motion.p>

        <motion.div
          className="motion-hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
        >
          <Link href="/contact" className="btn btn-primary">Book a Wash</Link>
          <Link href="/services" className="motion-glass-btn">Explore Services</Link>
        </motion.div>
      </div>
    </section>
  );
}
