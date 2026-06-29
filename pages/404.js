import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | Crystal Car Care</title>
      </Head>
      <section
        className="page-hero"
        style={{
          "--page-image":
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="container">
          <div className="breadcrumbs">404</div>
          <h1>Page not found</h1>
          <p>
            The page you opened does not exist. Go back to the homepage or view
            all services.
          </p>
          <div className="actions">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
