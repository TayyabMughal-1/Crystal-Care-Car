import Head from 'next/head'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import ServiceCard from '../../components/ServiceCard'
import { serviceCategories, services } from '../../data/services'

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>All Services | Crystal Car Wash</title>
        <meta
          name="description"
          content="Car wash, detailing, paint protection, restoration, packages, and corporate services from Crystal Car Wash in Islamabad and Rawalpindi."
        />
      </Head>
      <PageHero
        title="All Car Wash & Detailing Services"
        description="Each service has its own proper page file, route, content, and booking call to action."
        image="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=80"
      />

      <section>
        <div className="container">
          {serviceCategories.map((category, index) => {
            const categoryServices = category.services.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean)
            return (
              <div className="category-block" key={category.title}>
                <div className="category-title">
                  <span>{index + 1}</span>
                  <h2>{category.title}</h2>
                </div>
                <div className="grid-3">
                  {categoryServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
