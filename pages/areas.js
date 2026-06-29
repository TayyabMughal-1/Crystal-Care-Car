import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const areaDetails = [
  {
    name: "Islamabad",
    mapQuery: "Islamabad, Pakistan",
    desc: "Full coverage across all sectors and residential zones.",
    icon: "🏙️",
    city: "Islamabad",
  },
  {
    name: "Rawalpindi",
    mapQuery: "Rawalpindi, Pakistan",
    desc: "Commercial and residential areas including Saddar and Cantt.",
    icon: "🌆",
    city: "Rawalpindi",
  },
  {
    name: "DHA",
    mapQuery: "DHA Phase 2, Islamabad, Pakistan",
    desc: "Door-to-door service for all DHA phases in both cities.",
    icon: "🏘️",
    city: "Islamabad",
  },
  {
    name: "Bahria Town",
    mapQuery: "Bahria Town, Islamabad, Pakistan",
    desc: "Complete Bahria Town coverage including all phases.",
    icon: "🏡",
    city: "Islamabad",
  },
  {
    name: "Blue Area",
    mapQuery: "Blue Area, Islamabad, Pakistan",
    desc: "Corporate clients, offices, and business premises.",
    icon: "🏢",
    city: "Islamabad",
  },
  {
    name: "Gulberg Greens",
    mapQuery: "Gulberg Greens, Islamabad, Pakistan",
    desc: "Residential and commercial clients in Gulberg Greens.",
    icon: "🌿",
    city: "Islamabad",
  },
  {
    name: "Saddar",
    mapQuery: "Saddar, Rawalpindi, Pakistan",
    desc: "Central Rawalpindi and surrounding market areas.",
    icon: "📍",
    city: "Rawalpindi",
  },
  {
    name: "Satellite Town",
    mapQuery: "Satellite Town, Rawalpindi, Pakistan",
    desc: "Homes, offices, and shops in Satellite Town.",
    icon: "🏠",
    city: "Rawalpindi",
  },
];

export default function Areas() {
  const router = useRouter();
  const [selected, setSelected] = useState(areaDetails[0]);
  const [locStatus, setLocStatus] = useState("idle"); // idle | loading | error

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selected.mapQuery)}&z=14&output=embed&hl=en`;

  const bookWithLocation = () => {
    if (!navigator.geolocation) {
      router.push("/contact");
      return;
    }
    setLocStatus("loading");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=16`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const addr = data.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
          sessionStorage.setItem("prefill_location", addr);
        } catch {
          // geocoding failed — form will open empty
        }
        router.push("/contact");
      },
      () => {
        setLocStatus("error");
        setTimeout(() => setLocStatus("idle"), 3000);
      },
      { timeout: 10000 }
    );
  };

  const bookAtArea = (area) => {
    sessionStorage.setItem("prefill_location", `${area.name}, ${area.city}`);
    router.push("/contact");
  };

  return (
    <Layout>
      <Head>
        <title>Service Areas | Crystal Car Care</title>
        <meta
          name="description"
          content="Crystal Car Care serves car owners, homes, offices, and corporate clients across Islamabad and Rawalpindi, including DHA, Bahria Town, and Blue Area."
        />
      </Head>

      <PageHero
        title="Service Areas"
        description="Crystal Car Care serves car owners, homes, offices, and corporate clients in Islamabad and Rawalpindi."
        image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Coverage intro */}
      <section>
        <div className="container">
          <div className="split enhanced-split">
            <div>
              <span className="eyebrow">Where We Operate</span>
              <h2 className="xl-title">
                Covering every corner of Islamabad &amp; Rawalpindi
              </h2>
              <p className="lead-text">
                We bring professional car washing, detailing, and paint
                protection directly to your home, office, or preferred location
                — no travel required on your part.
              </p>
              <ul className="feature-list" style={{ marginTop: 28 }}>
                <li>Doorstep and mobile service across all listed areas</li>
                <li>Corporate fleet cleaning at your office premises</li>
                <li>Flexible scheduling — morning, afternoon, or evening</li>
                <li>New areas added on request — contact us to confirm</li>
              </ul>
              <div className="actions" style={{ marginTop: 32 }}>
                <button
                  className="btn btn-primary"
                  onClick={bookWithLocation}
                  disabled={locStatus === "loading"}
                >
                  {locStatus === "loading"
                    ? "Detecting location…"
                    : locStatus === "error"
                    ? "Location denied — try again"
                    : "📍 Book at My Location"}
                </button>
                <Link href="/services" className="btn btn-secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div>
              <div className="process-showcase">
                <span className="eyebrow">Quick Facts</span>
                <div style={{ marginTop: 20, display: "grid", gap: 14 }}>
                  {[
                    { label: "Cities Covered", value: "2 Cities" },
                    { label: "Areas Served", value: `${areaDetails.length}+ Zones` },
                    { label: "Service Type", value: "Doorstep & Mobile" },
                    { label: "Booking", value: "Same Day Available" },
                  ].map((f) => (
                    <div key={f.label} className="area-fact-row">
                      <span>{f.label}</span>
                      <strong>{f.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Area Selector */}
      <section className="section-tight" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div>
              <span className="eyebrow">Interactive Map</span>
              <h2>Select your area</h2>
            </div>
            <p>
              Click any area below to see it on the map and get directions to
              our service zone.
            </p>
          </div>

          <div className="area-map-layout">
            {/* Selector list */}
            <div className="area-selector-list">
              {areaDetails.map((area) => (
                <button
                  key={area.name}
                  className={`area-select-btn${selected.name === area.name ? " is-active" : ""}`}
                  onClick={() => setSelected(area)}
                >
                  <span className="area-select-icon">{area.icon}</span>
                  <div className="area-select-text">
                    <strong>{area.name}</strong>
                    <span>{area.city}</span>
                  </div>
                  {selected.name === area.name && (
                    <span className="area-select-arrow">→</span>
                  )}
                </button>
              ))}
            </div>

            {/* Map panel */}
            <div className="area-map-panel">
              {/* Selected area info bar */}
              <div className="area-map-bar">
                <span className="area-map-bar-icon">{selected.icon}</span>
                <div>
                  <strong>{selected.name}</strong>
                  <p>{selected.desc}</p>
                </div>
                <button
                  className="btn btn-primary area-map-bar-btn"
                  onClick={() => bookAtArea(selected)}
                >
                  Book Here
                </button>
              </div>

              {/* Google Maps iframe */}
              <div className="area-map-frame">
                <iframe
                  key={selected.mapQuery}
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selected.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="section-tight final-booking-section">
        <div className="container">
          <div className="cta-strip animated-cta">
            <h2>Not sure if we cover your area?</h2>
            <p>
              Send us a message with your location and we will confirm
              availability and pricing within the hour.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
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
