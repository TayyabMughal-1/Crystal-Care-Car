import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import ServiceCard from '../../components/ServiceCard'
import { serviceCategories, services } from '../../data/services'

const CATEGORY_META = {
  wash: {
    desc: 'Quick and thorough wash services for daily drivers',
    color: '#0a3d8f',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=80',
  },
  detail: {
    desc: 'Deep interior and exterior detailing for a refreshed cabin',
    color: '#2f5fb8',
    image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1800&q=80',
  },
  paint: {
    desc: 'Ceramic, wax and sealant protection for lasting shine',
    color: '#1bb89e',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1800&q=80',
  },
  restore: {
    desc: 'Restore headlights and surfaces to like-new condition',
    color: '#159a83',
    image: 'https://images.unsplash.com/photo-1617814076668-cc1e9f5fc955?auto=format&fit=crop&w=1800&q=80',
  },
  packages: {
    desc: 'Weekly and monthly wash plans for regular clients',
    color: '#0a3d8f',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1800&q=80',
  },
  corporate: {
    desc: 'Fleet cleaning and office car wash contracts',
    color: '#081d40',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=80',
  },
  priority: {
    desc: 'Mobile and doorstep convenience services',
    color: '#2f5fb8',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80',
  },
}

export async function getStaticPaths() {
  const paths = serviceCategories.map((cat) => ({
    params: { category: cat.key },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const cat = serviceCategories.find((c) => c.key === params.category)
  if (!cat) return { notFound: true }

  const categoryServices = cat.services
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean)

  return {
    props: { cat, categoryServices },
  }
}

export default function CategoryPage({ cat, categoryServices }) {
  const meta = CATEGORY_META[cat.key] || {
    desc: '',
    color: '#0a3d8f',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=80',
  }

  return (
    <Layout>
      <Head>
        <title>{cat.title} | Crystal Car Care</title>
        <meta name="description" content={meta.desc} />
      </Head>

      <PageHero
        eyebrow="Services"
        title={cat.title}
        description={meta.desc}
        image={meta.image}
      />

      <section>
        <div className="container">
          {/* Breadcrumb */}
          <nav className="cat-breadcrumb">
            <Link href="/services">All Services</Link>
            <span>/</span>
            <span>{cat.title}</span>
          </nav>

          <div className="grid-3">
            {categoryServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
