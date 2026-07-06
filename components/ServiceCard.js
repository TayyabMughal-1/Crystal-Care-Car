import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ service, linkLabel = "View service" }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="card-image-link"
        aria-label={`View ${service.title}`}
      >
        <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
        <span className="card-badge">{service.category}</span>
      </Link>

      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <Link className="card-link" href={`/services/${service.slug}`}>
          {linkLabel} <span>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
