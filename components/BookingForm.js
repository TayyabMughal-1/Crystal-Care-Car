import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { services } from '../data/services'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [location, setLocation] = useState('')
  const [locStatus, setLocStatus] = useState('idle') // idle | loading | done | denied
  const [service, setService] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem('prefill_location')
    if (saved) {
      setLocation(saved)
      setLocStatus('done')
      sessionStorage.removeItem('prefill_location')
    }

    const savedService = sessionStorage.getItem('prefill_service')
    if (savedService) {
      setService(savedService)
      sessionStorage.removeItem('prefill_service')
    }
  }, [])

  const detectLocation = () => {
    if (!navigator.geolocation) return
    setLocStatus('loading')
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=16`,
            { headers: { 'Accept-Language': 'en' } }
          )
          const data = await res.json()
          setLocation(data.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`)
        } catch {
          setLocation(`Location detected`)
        }
        setLocStatus('done')
      },
      () => setLocStatus('denied'),
      { timeout: 10000 }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError('Booking form is not fully configured yet. Please contact us directly on WhatsApp.')
      return
    }

    const formData = new FormData(e.target)
    const serviceTitle =
      services.find((s) => s.slug === formData.get('service'))?.title ||
      formData.get('service')

    setSending(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.get('name'),
          phone: formData.get('phone'),
          service: serviceTitle,
          car_type: formData.get('carType'),
          area: formData.get('area'),
          location: formData.get('location'),
          message: formData.get('message'),
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
    } catch {
      setError('Something went wrong sending your request. Please try again or contact us on WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-card">
        <h3 style={{ marginTop: 0 }}>Thanks, request received.</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
          We will contact you shortly to confirm price and timing. For a faster
          reply, you can also reach us directly on WhatsApp.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginTop: 18 }}
          onClick={() => setSubmitted(false)}
        >
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
          <input
            id="bf-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="bf-phone">Phone Number</label>
          <input
            id="bf-phone"
            name="phone"
            type="tel"
            placeholder="+92 300 0000000"
            required
          />
        </div>

        <div className="field full">
          <label htmlFor="bf-service">Service</label>
          <select
            id="bf-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option value={s.slug} key={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="bf-car-type">Car Type</label>
          <select id="bf-car-type" name="carType" defaultValue="" required>
            <option value="" disabled>Select car type</option>
            <option>Mini / Compact</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>Coupe</option>
            <option>SUV / Crossover</option>
            <option>Van / Pickup</option>
            <option>Other</option>
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

        {/* Address / Location field with inline detect button */}
        <div className="field full">
          <label htmlFor="bf-location">
            Address / Location
            {locStatus === 'done' && (
              <span className="loc-detected-badge">📍 Auto-detected</span>
            )}
            {locStatus === 'denied' && (
              <span className="loc-denied-badge">Location access denied</span>
            )}
          </label>
          <div className="loc-input-wrap">
            <input
              id="bf-location"
              name="location"
              type="text"
              placeholder="Your full address, street, or nearest landmark"
              value={location}
              onChange={(e) => { setLocation(e.target.value); setLocStatus('idle') }}
              className={locStatus === 'done' ? 'loc-filled' : ''}
            />
            <button
              type="button"
              className="loc-detect-btn"
              onClick={detectLocation}
              disabled={locStatus === 'loading'}
              title="Auto-detect my location"
            >
              {locStatus === 'loading' ? (
                <span className="loc-spinner" />
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                  Detect
                </>
              )}
            </button>
          </div>
        </div>

        <div className="field full">
          <label htmlFor="bf-message">Message</label>
          <textarea
            id="bf-message"
            name="message"
            placeholder="Car model, preferred time, and any extra details"
          />
        </div>

      </div>

      {error && (
        <p style={{ color: 'var(--danger)', marginTop: 14, marginBottom: 0 }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: 18 }}
        disabled={sending}
      >
        {sending ? 'Sending...' : 'Submit Booking Request'}
      </button>
    </form>
  )
}
