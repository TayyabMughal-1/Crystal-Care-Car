import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const PLANS = [
  {
    key: "weekly",
    name: "Weekly Car Wash",
    tagline: "4 washes every month, every week",
    price: 3999,
    period: "/ month",
    badge: null,
    color: "#2f5fb8",
    includes: [
      "4 Exterior Washes / Month",
      "Interior Vacuuming (every visit)",
      "Tire Rinse (every visit)",
      "Glass Cleaning",
      "Priority Booking",
      "Flexible Time Slots",
    ],
    excludes: [
      "Interior Deep Cleaning",
      "Tire & Rim Detailing",
      "Multiple Vehicles",
    ],
  },
  {
    key: "monthly",
    name: "Monthly Car Wash",
    tagline: "Regular care without weekly commitment",
    price: 2499,
    period: "/ month",
    badge: "Most Popular",
    color: "#1bb89e",
    includes: [
      "2 Full Car Washes / Month",
      "Interior Vacuuming (every visit)",
      "Tire & Rim Cleaning",
      "Glass & Dashboard Wipe",
      "Priority Booking",
      "Free Rescheduling",
    ],
    excludes: [
      "Interior Deep Cleaning",
      "Multiple Vehicles",
    ],
  },
  {
    key: "family",
    name: "Family / Multi-Vehicle",
    tagline: "Up to 2 vehicles under one plan",
    price: 6999,
    period: "/ month",
    badge: "Best Value",
    color: "#0a3d8f",
    includes: [
      "Up to 2 Vehicles",
      "4 Full Washes per Vehicle / Month",
      "Interior Vacuuming (all cars)",
      "Tire & Rim Cleaning",
      "Glass Cleaning",
      "Priority Scheduling",
      "Free Rescheduling",
      "Dedicated Service Team",
    ],
    excludes: [],
  },
];


const WHY = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Save Time Every Month",
    desc: "No repeat booking. We show up on your chosen schedule, so your car stays clean without effort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Better Value Than Pay-Per-Wash",
    desc: "Package clients pay up to 30% less per wash compared to individual bookings.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Same Team Every Time",
    desc: "Your dedicated team learns your car's needs and delivers consistent results visit after visit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Guaranteed Satisfaction",
    desc: "Not happy with a visit? We return within 24 hours at no extra charge — no questions asked.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(27,184,158,0.12)" />
      <path d="M6 10.5l3 3 5-6" stroke="#1bb89e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(90,100,114,0.08)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#9aa0ab" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}


export default function Packages() {
  return (
    <Layout>
      <Head>
        <title>Packages & Pricing | Crystal Car Care</title>
        <meta
          name="description"
          content="Crystal Car Care subscription packages for individuals, families, and corporate clients in Islamabad and Rawalpindi. Weekly and monthly plans with fixed pricing."
        />
      </Head>

      <PageHero
        title="Plans & Pricing"
        description="Simple subscription plans with no hidden fees. Pick the plan that fits your car, your family, or your fleet."
        image="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Why Subscribe */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div>
              <span className="eyebrow">Why Subscribe</span>
              <h2 style={{ marginTop: 10 }}>More than a one-off wash</h2>
            </div>
            <p>Packages are designed for clients who want regular professional car care without the hassle of booking every time.</p>
          </motion.div>

          <motion.div
            className="pkg-why-grid"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {WHY.map((w) => (
              <motion.div className="pkg-why-card" key={w.title} variants={fadeUp}>
                <span className="pkg-why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section>
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div>
              <span className="eyebrow">Subscription Plans</span>
              <h2 style={{ marginTop: 10 }}>Choose your plan</h2>
            </div>
            <p>All prices in PKR. Cancel or change plan anytime with 7-day notice.</p>
          </motion.div>

          <motion.div
            className="pkg-cards"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.key}
                className={`pkg-card${plan.badge === "Most Popular" ? " pkg-card--featured" : ""}`}
                variants={fadeUp}
              >
                {plan.badge && (
                  <span className="pkg-badge" style={{ background: plan.color }}>{plan.badge}</span>
                )}
                <div className="pkg-card-top" style={{ "--plan-clr": plan.color }}>
                  <div className="pkg-card-top-left">
                    <h3 className="pkg-name">{plan.name}</h3>
                    <p className="pkg-tagline">{plan.tagline}</p>
                  </div>
                  <div className="pkg-card-top-right">
                    <div className="pkg-price">
                      <span className="pkg-starting">Starting from</span>
                      <span className="pkg-amount">{plan.price.toLocaleString()}</span>
                      <span className="pkg-period">{plan.period}</span>
                    </div>
                  </div>
                </div>

                <div className="pkg-card-body">
                  <ul className="pkg-features">
                    {plan.includes.map((f) => (
                      <li key={f}><Check /><span>{f}</span></li>
                    ))}
                    {plan.excludes.map((f) => (
                      <li key={f} className="pkg-feature--off"><Cross /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="pkg-card-footer">
                  <Link
                    href={`/contact?plan=${plan.key}`}
                    className={`btn ${plan.key === "monthly" ? "btn-primary" : "btn-secondary"}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="pkg-note">
            All packages are billed monthly. Prices above are starting rates for a standard sedan.
            SUVs, vans, and larger vehicles may vary.{" "}
            <Link href="/contact">Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight final-booking-section">
        <div className="container">
          <motion.div
            className="cta-strip"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <h2>Not sure which plan fits?</h2>
            <p>Send us a message and we will recommend the right package based on your car, schedule, and location in Islamabad or Rawalpindi.</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">Talk to Us</Link>
              <Link href="/services" className="btn btn-secondary">View All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
