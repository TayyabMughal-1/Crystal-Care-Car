import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({ service, linkLabel = "View Details" }) {
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
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <span className="card-badge">{service.category}</span>
      </Link>

      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <div className="card-actions">
          <Link className="card-link" href={`/services/${service.slug}`}>
            {linkLabel} <span>→</span>
          </Link>
          <Link
            className="card-book-btn"
            href="/contact"
            onClick={() => sessionStorage.setItem("prefill_service", service.slug)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
