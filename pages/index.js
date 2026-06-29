import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import TrustBar from "../components/TrustBar";
import { services, areas } from "../data/services";

export default function Home() {
  const featured = services.filter((service) =>
    [
      "doorstep-car-wash",
      "complete-car-detailing",
      "interior-deep-cleaning",
      "wax-polish",
      "monthly-car-wash-package",
      "fleet-washing",
    ].includes(service.slug),
  );

  return (
    <Layout>
      <Head>
        <title>Crystal Car Wash | Car Wash &amp; Detailing in Islamabad &amp; Rawalpindi</title>
        <meta
          name="description"
          content="Doorstep car wash, detailing, paint protection, and corporate fleet services across Islamabad and Rawalpindi. Book a wash today."
        />
      </Head>

      <Hero />

      <TrustBar />

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Featured services</span>
              <h2>
                Built for daily drivers, premium cars, offices, and families.
              </h2>
            </div>
            <p>
              Choose mobile wash, interior deep cleaning, polish, paint
              protection, monthly packages, or corporate fleet cleaning from one
              place.
            </p>
          </div>

          <div className="grid-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split enhanced-split">
          <div>
            <span className="eyebrow">Professional finish</span>
            <h2 className="xl-title">
              A premium car care experience from booking to handover.
            </h2>
            <p className="lead-text">
              Real car photography, clean sections, smooth movement, strong
              mobile layout, and proper service pages make the website feel more
              professional.
            </p>

            <ul className="feature-list feature-grid-list">
              <li>Doorstep wash for homes and offices</li>
              <li>Interior deep cleaning and seat shampooing</li>
              <li>Wax polish, sealant, and ceramic spray protection</li>
              <li>Monthly packages and corporate fleet services</li>
            </ul>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="process-showcase">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="xl-title">
                Simple booking. Clean process. Premium handover.
              </h2>
            </div>

            <div className="process-cards">
              <div className="mini-process-card">
                <span>01</span>
                <h3>Choose service</h3>
                <p>
                  Select wash, detailing, polishing, package, or corporate
                  option.
                </p>
              </div>

              <div className="mini-process-card">
                <span>02</span>
                <h3>Share location</h3>
                <p>Send car model, area, preferred date, and service time.</p>
              </div>

              <div className="mini-process-card">
                <span>03</span>
                <h3>Get it cleaned</h3>
                <p>
                  The car is washed, detailed, checked, and handed over neatly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-strip animated-cta">
            <span className="eyebrow">Service areas</span>
            <h2>Available in Islamabad and Rawalpindi.</h2>
            <p>
              Book doorstep, mobile, monthly package, or corporate service
              depending on your location and car care needs.
            </p>

            <div className="area-pill-row">
              {areas.map((area) => (
                <span className="area-pill" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight final-booking-section">
        <div className="container grid-2 booking-grid">
          <div>
            <span className="eyebrow">Quick booking</span>
            <h2 className="xl-title">
              Send your car details and preferred time.
            </h2>
            <p className="lead-text">
              This form is front end only. Later you can connect it with
              WhatsApp, email, Firebase, or any backend.
            </p>

            <div className="contact-chips">
              <span>WhatsApp ready</span>
              <span>Mobile friendly</span>
              <span>Corporate friendly</span>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>
    </Layout>
  );
}
