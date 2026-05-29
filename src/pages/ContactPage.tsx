import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
    mobile: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const formRef = useScrollReveal<HTMLDivElement>()
  const mapRef = useScrollReveal<HTMLDivElement>()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '', telephone: '', mobile: '' })
  }

  return (
    <main className="contact-page">
      <video
        className="contact-video-bg"
        src="/images/WhatsApp%20Video%202026-05-22%20at%2014.03.58.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="contact-video-overlay" />
      <div className="contact-container">
        <div className="contact-form-section reveal" ref={formRef}>
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-intro">
            We are here to help. If you need any repair, maintenance, installation, or renovation,
            get in touch!
          </p>

          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
              <button
                type="button"
                className="contact-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Write your message here *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Telephone *"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile *"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading">
                    <span className="spinner" />
                    Sending...
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </form>
          )}
        </div>

        <div className="contact-map-section reveal" ref={mapRef}>
          <div className="map-header">
            <a
              href="https://www.google.com/maps/search/?api=1&query=5900+Balcones+Dr+Ste+100+Austin+TX+78731"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Open in Maps
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div className="map-container">
            <iframe
              title="MaxPower Location"
              src="https://maps.google.com/maps?q=5900%20Balcones%20Dr%20Ste%20100%20Austin%20TX%2078731&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-overlay">
              <div className="map-pin">
                <div className="pin-pulse" />
                <div className="pin-marker">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
              <div className="map-info-card">
                <span className="info-badge">MAXPOWER</span>
                <span className="info-title">MAXPOWER HEATERS USA L.L.C</span>
                <span className="info-address">5900 Balcones Dr, Ste 100 · Austin, TX 78731-4298</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info-bar">
        <div className="info-item">
          <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="info-text">
            <span className="label">Phone</span>
            <span className="value">+1 (817) 471-2000</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="info-text">
            <span className="label">Email</span>
            <span className="value">sales@maxpowerindustrialheaters.com</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="info-text">
            <span className="label">Business Hours</span>
            <span className="value">Mon-Fri: 8AM - 6PM CST</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="info-text">
            <span className="label">Address</span>
            <span className="value">5900 Balcones Dr, Ste 100, Austin, TX 78731-4298</span>
          </div>
        </div>
      </div>
    </main>
  )
}
