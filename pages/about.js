import Head from 'next/head'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | Crystal Car Wash</title>
        <meta
          name="description"
          content="Crystal Car Wash is a professional car wash and detailing brand serving Islamabad and Rawalpindi with clean, convenient, premium service."
        />
      </Head>
      <PageHero
        title="About Crystal Car Wash"
        description="A professional car wash and detailing brand focused on clean service, easy booking, and premium presentation."
        image="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1800&q=80"
      />
      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2 style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1, letterSpacing: '-0.06em', margin: 0 }}>
              Clean cars, better convenience, and service that feels premium.
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Crystal Car Wash is designed for daily drivers, families, office staff, and corporate fleets. The website presents each service clearly so customers can understand what they need and book with confidence.
            </p>
            <ul className="feature-list">
              <li>Car wash and detailing services</li>
              <li>Doorstep and mobile service options</li>
              <li>Subscription packages for repeat customers</li>
              <li>Corporate and fleet cleaning contracts</li>
            </ul>
          </div>
          <div className="photo-stack">
            <img src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1200&q=80" alt="Car interior detailing" />
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80" alt="Clean luxury car" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
