import { useScrollReveal } from '../hooks/useScrollReveal'
import './CoveragePage.css'

const bottomFeatures = [
  {
    icon: 'hubs',
    title: '5 STRATEGIC HUBS',
    desc: 'Positioned for maximum efficiency',
  },
  {
    icon: 'dhl',
    title: 'DHL EXPRESS',
    desc: 'Premium logistics partner for 24-hour delivery',
  },
  {
    icon: 'reliability',
    title: 'RELIABILITY',
    desc: 'Optimized processes to keep your production running continuously',
  },
]

export default function CoveragePage() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const bottomRef = useScrollReveal<HTMLDivElement>()

  return (
    <main className="coverage-page">
      <div className="coverage-header reveal" ref={headerRef}>
        <h1 className="coverage-main-title">
          MAXPOWER <span className="highlight">EXPRESS USA</span>
        </h1>
        <p className="coverage-subtitle">24-HOUR NATIONAL DISTRIBUTION NETWORK</p>
      </div>

      <div className="coverage-video-wrapper">
        <video
          className="coverage-video"
          src="/images/coverage/usa-network.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="coverage-bottom reveal" ref={bottomRef}>
        <div className="coverage-bottom-features">
          {bottomFeatures.map((feat, i) => (
            <div key={feat.title} className={`coverage-bottom-feature delay-${i + 1}`}>
              <div className="coverage-bottom-icon">
                <BottomIcon type={feat.icon} />
              </div>
              <div className="coverage-bottom-text">
                <strong>{feat.title}</strong>
                <span>{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="coverage-tagline">
          <p className="tagline-main">
            If your machine stops, <span className="highlight">Maxpower</span> delivers tomorrow.
          </p>
          <div className="tagline-badge">
            <span>24H</span>
          </div>
        </div>
      </div>

      <div className="coverage-footer">
        <span className="footer-brand">MAXPOWER <span className="highlight">EXPRESS USA</span></span>
        <span className="footer-text">CRITICAL COMPONENTS. IMMEDIATE DELIVERY. NONSTOP PRODUCTION.</span>
      </div>
    </main>
  )
}

function BottomIcon({ type }: { type: string }) {
  if (type === 'hubs') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }
  if (type === 'dhl') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
