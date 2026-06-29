export default function PageHero({
  eyebrow = "Crystal Car Care",
  title,
  description,
  image,
}) {
  return (
    <section className="page-hero" style={{ "--page-image": `url(${image})` }}>
      <div className="container">
        <div className="breadcrumbs">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
