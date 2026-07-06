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
        image="https://images.unsplash.com/photo-1608020932658-d0e19a69580b?auto=format&fit=crop&w=1800&q=80"
        bgPosition="center 60%"
      />

      {/* Coverage intro — reference layout */}
      <section className="area-overview-section">
        <div className="container">
          <div className="area-overview-grid">

            {/* Left — photo */}
            <div className="area-overview-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?auto=format&fit=crop&w=800&q=90"
                alt="Crystal Car Care professional car wash service"
                className="area-overview-img"
              />
            </div>

            {/* Right — content */}
            <div className="area-overview-content">
              <span className="eyebrow">Location Overview</span>
              <h2 className="area-overview-heading">
                Crystal Car Care across Islamabad &amp; Rawalpindi
              </h2>
              <p className="area-overview-desc">
                From doorstep washing to corporate fleet cleaning, Crystal Car
                Care is always nearby — ready to bring professional care
                directly to your location.
              </p>

              {/* Stat boxes */}
              <div className="area-overview-boxes">
                <div className="area-box area-box--dark">
                  <span className="area-box-stat">8+</span>
                  <span className="area-box-label">Service Zones</span>
                </div>
                <div className="area-box area-box--light">
                  <span className="area-box-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Mobile Coverage</strong>
                    <p>We bring detailing to you, wherever you are.</p>
                  </div>
                </div>
                <div className="area-box area-box--light">
                  <span className="area-box-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Flexible Hours</strong>
                    <p>Flexible slots to match your busy schedule.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                Find My Area
              </Link>
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
