import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms &amp; Conditions | Crystal Car Care</title>
        <meta
          name="description"
          content="Terms and conditions for booking and using Crystal Car Care's car wash, detailing, and subscription services in Islamabad and Rawalpindi."
        />
      </Head>

      <PageHero
        title="Terms & Conditions"
        description="Please read these terms carefully before booking a service with Crystal Car Care."
        image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1800&q=80"
      />

      <section>
        <div className="container">
          <div className="legal-content content-panel">
            <p className="legal-updated">Last updated: July 2026</p>

            <p>
              These Terms &amp; Conditions ("Terms") govern all bookings and
              services provided by Crystal Car Care ("we", "us", "our") to
              customers ("you") in Islamabad and Rawalpindi. By booking a
              service through our website, phone, or WhatsApp, you agree to
              these Terms.
            </p>

            <h2>1. Bookings &amp; Services</h2>
            <ul className="feature-list">
              <li>Bookings can be made through the website, phone, or WhatsApp and are confirmed once our team contacts you to verify service, vehicle type, and location.</li>
              <li>Doorstep and mobile service is subject to team availability in your area.</li>
              <li>We reserve the right to decline or reschedule a booking if the location is outside our service area or access to the vehicle is not possible.</li>
            </ul>

            <h2>2. Working Hours</h2>
            <p>
              Our standard service hours are <strong>Monday – Saturday, 8:00 AM – 6:00 PM</strong>.
              Bookings requested outside these hours will be scheduled for the
              next available working slot.
            </p>

            <h2>3. Pricing &amp; Payment</h2>
            <ul className="feature-list">
              <li>Prices listed on the website are starting rates for a standard sedan. SUVs, vans, and larger vehicles may be charged at a higher rate, confirmed before the service begins.</li>
              <li>Final pricing varies based on the size, model, and condition of the vehicle (e.g. Mini/Compact, Hatchback, Sedan, Coupe, SUV/Crossover, or Van/Pickup). The exact rate for your vehicle will be confirmed at the time of booking or before service begins.</li>
              <li>Payment is due on completion of service, unless a subscription package has been arranged in advance.</li>
              <li>We accept cash and other payment methods as agreed at the time of booking.</li>
            </ul>

            <h2>4. Subscription Packages</h2>
            <ul className="feature-list">
              <li>Weekly, monthly, and family/multi-vehicle packages are billed monthly and renew automatically unless cancelled.</li>
              <li>Plans may be cancelled or changed anytime with 7 days' notice.</li>
              <li>The Family / Multi-Vehicle package covers up to 2 vehicles under one plan. Additional vehicles require a separate plan or custom quote.</li>
              <li>Unused washes within a billing cycle do not carry over to the next month.</li>
            </ul>

            <h2>5. Cancellations &amp; Rescheduling</h2>
            <p>
              You may cancel or reschedule a booking free of charge up to 2
              hours before the scheduled time. Repeated last-minute
              cancellations may affect priority booking on subscription plans.
            </p>

            <h2>6. Vehicle Condition &amp; Liability</h2>
            <ul className="feature-list">
              <li>Please remove valuables and personal items from the vehicle before service. We are not responsible for items left inside.</li>
              <li>Pre-existing damage, scratches, or mechanical issues should be pointed out to our team before service begins.</li>
              <li>While we take care with every vehicle, we are not liable for pre-existing wear, aftermarket modifications, or damage unrelated to the service performed.</li>
            </ul>

            <h2>7. Customer Responsibilities</h2>
            <ul className="feature-list">
              <li>Provide accurate location, contact, and vehicle details at the time of booking.</li>
              <li>Ensure safe and reasonable access to the vehicle at the agreed time and location.</li>
              <li>Supervise children and pets away from the work area during service for their safety.</li>
            </ul>

            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes
              in our services or policies. Continued use of our services
              after an update means you accept the revised Terms.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:info@crystalcarcare.pk">info@crystalcarcare.pk</a>{" "}
              or via our <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
