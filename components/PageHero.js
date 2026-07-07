import Image from "next/image";

export default function PageHero({
  eyebrow = "Crystal Car Care",
  title,
  description,
  image,
  video,
  bgPosition = "center",
  children,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        {video ? (
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
        ) : (
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: bgPosition }}
          />
        )}
      </div>
      <div className="page-hero-overlay" />

      <div className="container page-hero-content">
        <div className="breadcrumbs">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
