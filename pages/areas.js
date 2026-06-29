import Head from "next/head";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { areas } from "../data/services";

export default function Areas() {
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
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Coverage</span>
              <h2>Areas we can target on the website.</h2>
            </div>
            <p>
              These location names are easy to change inside data/services.js.
            </p>
          </div>
          <div className="area-pill-row">
            {areas.map((area) => (
              <span className="area-pill" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
