import { useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AreaMap from "../components/AreaMap";

export default function Areas() {
  const router = useRouter();

  const handleBook = useCallback((area) => {
    if (area) sessionStorage.setItem("prefill_location", `${area.name}, ${area.city}`);
    router.push("/contact");
  }, [router]);

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
                <Link href="/contact" className="btn btn-primary">
                  📍 Book at My Location
                </Link>
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
                    { label: "Cities Covered",  value: "2 Cities" },
                    { label: "Areas Served",    value: "8+ Zones" },
                    { label: "Service Type",    value: "Doorstep & Mobile" },
                    { label: "Booking",         value: "Same Day Available" },
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

      {/* Interactive Leaflet Map */}
      <section className="lf-section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div>
              <span className="eyebrow">Interactive Map</span>
              <h2 className="area-map-heading">Select Your Area</h2>
            </div>
            <p>
              Click any marker on the map to see details and book service for
              that area.
            </p>
          </div>
        </div>

        <AreaMap onBook={handleBook} />
      </section>

      {/* CTA */}
      <section className="section-tight final-booking-section">
        <div className="container">
          <div className="cta-strip">
            <h2>Not sure if we cover your area?</h2>
            <p>
              Send us a message with your location and we will confirm
              availability and pricing within the hour.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/packages" className="btn btn-secondary">View Packages</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
