import { useEffect, useCallback, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { gallery } from "../data/gallery";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <Layout>
      <Head>
        <title>Gallery | Crystal Car Care</title>
        <meta
          name="description"
          content="Browse real wash, detailing, and paint protection work from Crystal Car Care on cars across Islamabad and Rawalpindi."
        />
      </Head>

      <PageHero
        title="Our Work Gallery"
        description="A look at real wash, detailing, and protection work on cars across Islamabad and Rawalpindi."
        image="https://images.unsplash.com/photo-1668684934750-a373dd6a8b65?auto=format&fit=crop&w=1800&q=80"
      />

      <section>
        <div className="container">
          <motion.div
            className="gallery-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={container}
          >
            {gallery.map((item, index) => (
              <motion.figure
                className="gallery-card"
                key={item.title}
                variants={card}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} full size`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <span className="gallery-overlay" />
                <span className="gallery-tag">{item.tag}</span>
                <span className="gallery-zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
                <figcaption className="gallery-body">
                  <h3>{item.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-lightbox-media">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="90vw"
                  priority
                />
              </div>
              <button className="gallery-lightbox-close" onClick={close} aria-label="Close">
                ×
              </button>
              <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={showPrev} aria-label="Previous image">
                ‹
              </button>
              <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={showNext} aria-label="Next image">
                ›
              </button>
              <div className="gallery-lightbox-caption">
                <span className="gallery-tag gallery-tag--static">{active.tag}</span>
                <h3>{active.title}</h3>
                <p>{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
