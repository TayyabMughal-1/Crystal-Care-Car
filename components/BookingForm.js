import { useEffect, useState } from 'react'
import { services } from '../data/services'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [location, setLocation] = useState('')
  const [locStatus, setLocStatus] = useState('idle') // idle | loading | done | denied

  useEffect(() => {
    const saved = sessionStorage.getItem('prefill_location')
    if (saved) {
      setLocation(saved)
      setLocStatus('done')
      sessionStorage.removeItem('prefill_location')
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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

        <div className="field">
          <label htmlFor="bf-service">Service</label>
          <select id="bf-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option value={s.slug} key={s.slug}>{s.title}</option>
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

      <button type="submit" className="btn btn-primary" style={{ marginTop: 18 }}>
        Submit Booking Request
      </button>
    </form>
  )
}
