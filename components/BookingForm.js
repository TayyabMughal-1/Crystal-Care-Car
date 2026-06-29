import { useState } from 'react'
import { services } from '../data/services'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-card">
        <h3 style={{ marginTop: 0 }}>Thanks, request received.</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
          We will contact you shortly to confirm price and timing. For a faster reply, you can also reach us directly on WhatsApp.
        </p>
        <button type="button" className="btn btn-secondary" style={{ marginTop: 18 }} onClick={() => setSubmitted(false)}>
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="bf-name">Your Name</label>
          <input id="bf-name" name="name" type="text" placeholder="Enter your name" required />
        </div>
        <div className="field">
          <label htmlFor="bf-phone">Phone Number</label>
          <input id="bf-phone" name="phone" type="tel" placeholder="+92 300 0000000" required />
        </div>
        <div className="field">
          <label htmlFor="bf-service">Service</label>
          <select id="bf-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option value={service.slug} key={service.slug}>{service.title}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="bf-area">Area</label>
          <select id="bf-area" name="area" defaultValue="" required>
            <option value="" disabled>Select area</option>
            <option>Islamabad</option>
            <option>Rawalpindi</option>
            <option>Other nearby area</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="bf-message">Message</label>
          <textarea id="bf-message" name="message" placeholder="Car model, preferred time, and service details"></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: 18 }}>Submit Booking Request</button>
    </form>
  )
}
