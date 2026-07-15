import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Testimonials from "../components/Testimonials";
import { services } from "../data/services";

const featuredServices = services.slice(0, 6);

const trustItems = [
  { stat: "500+", label: "Cars Washed Monthly" },
  { stat: "4.9★", label: "Rated Service" },
  { stat: "2 Cities", label: "Islamabad & Rawalpindi" },
  { stat: "100%", label: "Satisfaction Guarantee" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const heroRef = useRef(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    // Padding so sticky mobile CTA doesn't overlap last section
    document.body.classList.add("has-sticky-cta");
    return () => document.body.classList.remove("has-sticky-cta");
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Crystal Car Care | Car Wash & Detailing in Islamabad</title>
        <meta
          name="description"
          content="Premium car wash, detailing, paint protection, mobile service, and corporate fleet cleaning across Islamabad and Rawalpindi."
        />
      </Head>

      <div ref={heroRef}>
        <Hero />
      </div>

      {/* Mobile sticky CTA */}
      <div className={`mobile-sticky-cta${pastHero ? " is-visible" : ""}`}>
        <Link href="/contact" className="mobile-sticky-btn mobile-sticky-btn--primary">Book Now</Link>
        <Link href="/services" className="mobile-sticky-btn mobile-sticky-btn--secondary">Our Services</Link>
      </div>

      {/* Trust bar */}
      <motion.section
        className="trust-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="container">
          <div className="trust-grid">
            {trustItems.map((item) => (
              <motion.div className="trust-item" key={item.label} variants={fadeUp}>
                <strong>{item.stat}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <section>
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div>
              <h2>What we offer</h2>
            </div>
            <p>
              From a quick exterior wash to full detailing and paint protection —
              every service is delivered with care at your location or ours.
            </p>
          </motion.div>

          <motion.div
            className="grid-3"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </motion.div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section>
        <div className="container">
          <motion.div
            className="section-head"
            style={{ marginBottom: 48 }}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div>
              <h2>See the difference we make</h2>
            </div>
            <p>
              Every car that leaves our hands looks — and feels — completely
              different. Move your cursor across the photo to reveal the
              transformation.
            </p>
          </motion.div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* How It Works */}
      <section className="section-tight" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="process-showcase">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <span className="eyebrow">How It Works</span>
              <h2 style={{ marginTop: 12 }}>Simple booking, expert results</h2>
            </motion.div>

            <motion.div
              className="process-cards"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              {[
                { n: "1", title: "Book Online",       desc: "Fill out the contact form with your car type, service, and preferred time." },
                { n: "2", title: "We Come to You",    desc: "Our team arrives at your home or office at the confirmed slot." },
                { n: "3", title: "Drive Away Clean",  desc: "Your car is returned spotless with a final quality check." },
              ].map((step) => (
                <motion.div className="mini-process-card" key={step.n} variants={fadeUp}>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="section-tight final-booking-section">
        <div className="container">
          <motion.div
            className="cta-strip"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <h2>Ready to book your wash?</h2>
            <p>Contact us today for a free quote. We serve Islamabad and Rawalpindi with doorstep and mobile car wash services.</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">Book Now</Link>
              <Link href="/packages" className="btn btn-secondary">View Packages</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
