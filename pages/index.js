import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { services } from "../data/services";

const featuredServices = services.slice(0, 6);

const trustItems = [
  { stat: "500+", label: "Cars Washed Monthly" },
  { stat: "5★", label: "Rated Service" },
  { stat: "2 Cities", label: "Islamabad & Rawalpindi" },
  { stat: "100%", label: "Satisfaction Guarantee" },
];

export default function Home() {
  const heroRef = useRef(null);
  const [pastHero, setPastHero] = useState(false);

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

      {/* Sentinel at the bottom of the hero to detect when it leaves view */}
      <div ref={heroRef}>
        <Hero />
      </div>

      {/* Mobile sticky CTA — fixed at bottom only after hero scrolls away */}
      <div className={`mobile-sticky-cta${pastHero ? " is-visible" : ""}`}>
        <Link href="/contact" className="mobile-sticky-btn mobile-sticky-btn--primary">
          Book Now
        </Link>
        <Link href="/services" className="mobile-sticky-btn mobile-sticky-btn--secondary">
          Our Services
        </Link>
      </div>

      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.label}>
                <strong>{item.stat}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our Services</span>
              <h2>What we offer</h2>
            </div>
            <p>
              From a quick exterior wash to full detailing and paint protection —
              every service is delivered with care at your location or ours.
            </p>
          </div>
          <div className="grid-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <div>
              <span className="eyebrow">Real Results</span>
              <h2>See the difference we make</h2>
            </div>
            <p>
              Every car that leaves our hands looks — and feels — completely
              different. Move your cursor across the photo to reveal the
              transformation from dirty to showroom clean.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="process-showcase">
            <span className="eyebrow">How It Works</span>
            <h2 style={{ marginTop: 12 }}>Simple booking, expert results</h2>
            <div className="process-cards">
              {[
                { n: "1", title: "Book Online", desc: "Fill out the contact form with your car type, service, and preferred time." },
                { n: "2", title: "We Come to You", desc: "Our team arrives at your home or office at the confirmed slot." },
                { n: "3", title: "Drive Away Clean", desc: "Your car is returned spotless with a final quality check." },
              ].map((step) => (
                <div className="mini-process-card" key={step.n}>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight final-booking-section">
        <div className="container">
          <div className="cta-strip animated-cta">
            <h2>Ready to book your wash?</h2>
            <p>
              Contact us today for a free quote. We serve Islamabad and
              Rawalpindi with doorstep and mobile car wash services.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">
                Book Now
              </Link>
              <Link href="/packages" className="btn btn-secondary">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
