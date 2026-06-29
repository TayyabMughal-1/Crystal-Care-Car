import Head from "next/head";
import Link from "next/link";
import Layout from "./Layout";
import PageHero from "./PageHero";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function ServicePage({ service }) {
  const related = services
    .filter(
      (item) =>
        item.category === service.category && item.slug !== service.slug,
    )
    .slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>
          {service.title} in Islamabad &amp; Rawalpindi | Crystal Car Care
        </title>
        <meta name="description" content={service.short} />
      </Head>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.short}
        image={service.image}
      />

      <section>
        <div className="container service-detail">
          <div className="content-panel">
            <h2>Professional {service.title} in Islamabad & Rawalpindi</h2>
            <p>{service.intro}</p>

            <h3>What is included</h3>
            <ul className="feature-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h3 style={{ marginTop: 34 }}>Our service process</h3>
            <div className="process">
              {service.process.map((step, index) => (
                <div className="step" key={step}>
                  <span>{index + 1}</span>
                  <div>
                    <h4>{step}</h4>
                    <p>
                      We handle this step carefully so the final result looks
                      clean, professional, and ready for daily use.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="side-panel">
            <div className="price-box">
              <small>Starting Price</small>
              <strong>{service.price}</strong>
            </div>
            <h3>Ready to book?</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Send your car type, area, and preferred time. We will confirm the
              right service and quotation.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <Link href="/contact" className="btn btn-primary">
                Book This Service
              </Link>
              <Link href="/services" className="btn btn-secondary">
                All Services
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Related</span>
                <h2>More services you may need</h2>
              </div>
            </div>
            <div className="grid-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
