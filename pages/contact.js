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
          <div className="content-panel">
            <h2>Contact Details</h2>
            <p>Phone: +92 300 0000000</p>
            <p>Email: info@crystalcarcare.pk</p>
            <p>Areas: Islamabad and Rawalpindi</p>
            <p>
              Replace these details with the client's final phone number, email,
              WhatsApp, and address.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </Layout>
  );
}
