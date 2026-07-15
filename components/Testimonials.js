import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Testimonials() {
  return (
    <section className="section-tight">
      <div className="container">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 style={{ marginTop: 12 }}>What our clients say</h2>
          </div>
          <p>
            Real feedback from car owners, families, and businesses we serve
            across Islamabad and Rawalpindi.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {testimonials.map((t) => (
            <motion.figure className="testimonial-card" key={t.name} variants={fadeUp}>
              <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <figcaption className="testimonial-author">
                <Image
                  className="testimonial-avatar"
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
