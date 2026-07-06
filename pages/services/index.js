import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import { serviceCategories, services } from '../../data/services'

const CATEGORY_META = {
  wash: {
    desc: 'Quick and thorough wash services for daily drivers',
    color: '#0a3d8f',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4"/>
        <path d="M12 16v2"/>
      </svg>
    ),
  },
  detail: {
    desc: 'Deep interior and exterior detailing for a refreshed cabin',
    color: '#2f5fb8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  paint: {
    desc: 'Ceramic, wax and sealant protection for lasting shine',
    color: '#c9a85c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  restore: {
    desc: 'Restore headlights and surfaces to like-new condition',
    color: '#b08d3f',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  packages: {
    desc: 'Weekly and monthly wash plans for regular clients',
    color: '#0a3d8f',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  corporate: {
    desc: 'Fleet cleaning and office car wash contracts',
    color: '#081d40',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  priority: {
    desc: 'Mobile and doorstep convenience services',
    color: '#2f5fb8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
}

export default function ServicesIndex() {
  return (
    <Layout>
      <Head>
        <title>Services | Crystal Car Care</title>
        <meta
          name="description"
          content="Browse all car wash, detailing, paint protection, and mobile services from Crystal Car Care in Islamabad and Rawalpindi."
        />
      </Head>

      <PageHero
        eyebrow="Crystal Car Care"
        title="Our Services"
        description="Choose a category below to explore the services we offer across Islamabad and Rawalpindi."
        image="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=80"
      />

      <section>
        <div className="container">
          <div className="cat-index-grid">
            {serviceCategories.map((cat) => {
              const meta = CATEGORY_META[cat.key] || { desc: '', color: 'var(--brand)', icon: null }
              const count = cat.services.length
              return (
                <Link
                  key={cat.key}
                  href={`/services/${cat.key}`}
                  className="cat-index-card"
                  style={{ '--cat-clr': meta.color }}
                >
                  <span className="cat-index-icon">{meta.icon}</span>
                  <div className="cat-index-body">
                    <h3>{cat.title}</h3>
                    <p>{meta.desc}</p>
                  </div>
                  <div className="cat-index-footer">
                    <span className="cat-index-count">{count} {count === 1 ? 'service' : 'services'}</span>
                    <span className="cat-index-arrow">View →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
