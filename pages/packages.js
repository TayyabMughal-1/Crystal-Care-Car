import Head from "next/head";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Packages() {
  const packages = services.filter(
    (service) => service.category === "Subscription Packages",
  );

  return (
    <Layout>
      <Head>
        <title>Subscription Packages | Crystal Car Care</title>
        <meta
          name="description"
          content="Weekly, monthly, and family vehicle car wash packages in Islamabad and Rawalpindi. Regular car care without booking again and again."
        />
      </Head>
      <PageHero
        title="Subscription Packages"
        description="Weekly, monthly, and family vehicle plans for clients who want regular car care without booking again and again."
        image="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1800&q=80"
      />
      <section>
        <div className="container grid-3">
          {packages.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
