import Head from "next/head";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import BookingForm from "../components/BookingForm";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Book a Wash | Crystal Car Care</title>
        <meta
          name="description"
          content="Book Crystal Car Care for doorstep car wash, detailing, or corporate fleet service in Islamabad and Rawalpindi. Share your details to get a quote."
        />
      </Head>
      <PageHero
        title="Book Crystal Car Care"
        description="Share your car details, location, and preferred service. The team can confirm price and timing."
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80"
      />
      <section>
        <div className="container grid-2">
          <div className="contact-info-col">
            <div className="content-panel">
              <h2>Contact Details</h2>
              <p>Phone: <a href="tel:+923295443907">+92 329 5443907</a></p>
              <p>Email: info@crystalcarcare.pk</p>
              <p>Areas: Islamabad and Rawalpindi</p>
            </div>

            <div className="hours-highlight">
              <span className="hours-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <div>
                <strong>Working Hours</strong>
                <p>Monday – Saturday</p>
                <p className="hours-time">8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </Layout>
  );
}
