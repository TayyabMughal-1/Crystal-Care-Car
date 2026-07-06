import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import { serviceCategories } from '../../data/services'
import { motion } from 'framer-motion'

const CATEGORY_META = {
  wash: {
    desc: 'Exterior, interior and full wash packages for every car type.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 5 7 5 12a7 7 0 0 0 14 0c0-5-3.5-10-7-10z" />
        <path d="M9 16s1 1.5 3 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
  detail: {
    desc: 'Deep cabin clean and paintwork detailing for a spotless finish.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" />
      </svg>
    ),
  },
  paint: {
    desc: 'Ceramic coating, wax and paint sealant for lasting protection.',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 4v6c0 5.55-3.84 10.74-9 12C6.84 22.74 3 17.55 3 12V6l9-4z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  restore: {
    desc: 'Headlight restoration and surface renewal back to factory condition.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  packages: {
    desc: 'Weekly and monthly wash plans — save more with every booking.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  corporate: {
    desc: 'Fleet management and office car wash contracts at scale.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 22V12h6v10" />
        <circle cx="9" cy="7" r="0.8" fill="currentColor" />
        <circle cx="15" cy="7" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  priority: {
    desc: 'Mobile team dispatched to your home or office — zero hassle.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
        video="https://res.cloudinary.com/dtwihjzyn/video/upload/services_ixuxih"
      />

      <section className="svc-photo-section">
        <div className="container">
          <motion.div
            className="svc-photo-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {serviceCategories.filter(cat => cat.key !== 'packages').map((cat) => {
              const meta = CATEGORY_META[cat.key] || { desc: '', image: '', icon: null }
              const count = cat.services.length

              return (
                <motion.div key={cat.key} variants={card}>
                  <Link href={`/services/${cat.key}`} className="svc-photo-card">
                    {/* Background photo */}
                    <span
                      className="svc-photo-bg"
                      style={{ backgroundImage: `url('${meta.image}')` }}
                    />
                    {/* Dark overlay */}
                    <span className="svc-photo-overlay" />

                    {/* Icon box — top left */}
                    <span className="svc-photo-icon">
                      {meta.icon}
                    </span>

                    {/* Bottom content */}
                    <div className="svc-photo-body">
                      <h3 className="svc-photo-title">{cat.title}</h3>
                      <p className="svc-photo-desc">{meta.desc}</p>
                      <span className="svc-photo-cta">
                        Read More <span className="svc-photo-arrow">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
