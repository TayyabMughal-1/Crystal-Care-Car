import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | Crystal Car Care</title>
      </Head>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The page you opened does not exist. Go back to the homepage or view all services."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80"
      >
        <div className="actions">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Services
          </Link>
        </div>
      </PageHero>
    </Layout>
  );
}
