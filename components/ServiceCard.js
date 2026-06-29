import Link from "next/link";

export default function ServiceCard({ service, linkLabel = "View service" }) {
  return (
    <article className="card reveal-card">
      <Link
        href={`/services/${service.slug}`}
        className="card-image-link"
        aria-label={`View ${service.title}`}
      >
        <img src={service.image} alt={service.title} />
        <span className="card-badge">{service.category}</span>
      </Link>

      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <Link className="card-link" href={`/services/${service.slug}`}>
          {linkLabel} <span>→</span>
        </Link>
      </div>
    </article>
  );
}
