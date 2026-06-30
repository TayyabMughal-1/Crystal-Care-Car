export default function PageHero({
  eyebrow = "Crystal Car Care",
  title,
  description,
  image,
  video,
}) {
  if (video) {
    return (
      <section className="page-hero page-hero--video">
        <div className="page-hero-media">
          <video
            className="page-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={image}
            aria-hidden="true"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="page-hero-overlay" />
        </div>

        <div className="container page-hero-content">
          <div className="breadcrumbs">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    );
  }

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
