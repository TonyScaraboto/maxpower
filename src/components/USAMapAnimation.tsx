import { useEffect, useState } from 'react'
import './USAMapAnimation.css'

const hubs = [
  { id: 'texas', name: 'TEXAS', x: 280, y: 320 },
  { id: 'georgia', name: 'GEORGIA', x: 520, y: 280 },
  { id: 'ohio', name: 'OHIO', x: 540, y: 180 },
  { id: 'carolinas', name: 'CAROLINAS', x: 590, y: 230 },
  { id: 'florida', name: 'FLORIDA', x: 560, y: 360 },
]

const distributionPoints = [
  { x: 120, y: 120 }, { x: 180, y: 100 }, { x: 240, y: 140 },
  { x: 150, y: 200 }, { x: 200, y: 180 }, { x: 320, y: 120 },
  { x: 380, y: 100 }, { x: 420, y: 150 }, { x: 460, y: 130 },
  { x: 350, y: 200 }, { x: 400, y: 220 }, { x: 450, y: 200 },
  { x: 500, y: 150 }, { x: 600, y: 140 }, { x: 620, y: 180 },
  { x: 300, y: 280 }, { x: 350, y: 300 }, { x: 400, y: 290 },
  { x: 480, y: 320 }, { x: 440, y: 350 }, { x: 500, y: 380 },
  { x: 220, y: 250 }, { x: 180, y: 300 }, { x: 240, y: 380 },
  { x: 160, y: 350 }, { x: 100, y: 280 }, { x: 80, y: 200 },
]

export default function USAMapAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`usa-map-animation ${isVisible ? 'is-visible' : ''}`}>
      <svg viewBox="0 0 700 450" className="usa-map-svg">
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="#0d2240" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hubGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* USA Map outline - simplified */}
        <path
          className="usa-outline"
          d="M50,180 L80,140 L120,120 L180,100 L240,90 L320,85 L400,80 L480,90 L540,100 L600,120 L640,150 L660,200 L650,260 L620,300 L580,340 L540,380 L480,400 L400,410 L320,400 L240,380 L180,350 L120,300 L80,250 L50,200 Z"
          fill="url(#mapGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />

        {/* State divisions */}
        <g className="state-lines">
          <path d="M200,90 L200,380" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M320,85 L320,400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M440,85 L440,400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M560,100 L560,380" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M50,200 L660,200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M80,300 L620,300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </g>

        {/* Distribution lines from hubs */}
        <g className="distribution-lines">
          {hubs.map((hub) =>
            distributionPoints.map((point, i) => (
              <line
                key={`${hub.id}-${i}`}
                className={`dist-line dist-line-${hub.id}`}
                x1={hub.x}
                y1={hub.y}
                x2={point.x}
                y2={point.y}
                stroke="rgba(255,140,0,0.6)"
                strokeWidth="1"
                style={{ animationDelay: `${1.5 + i * 0.05}s` }}
              />
            ))
          )}
        </g>

        {/* Distribution points */}
        <g className="distribution-points">
          {distributionPoints.map((point, i) => (
            <circle
              key={i}
              className="dist-point"
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#ff8c00"
              style={{ animationDelay: `${2 + i * 0.08}s` }}
            />
          ))}
        </g>

        {/* Hub markers */}
        <g className="hub-markers">
          {hubs.map((hub, i) => (
            <g key={hub.id} className={`hub-group hub-${i + 1}`}>
              {/* Pulse rings */}
              <circle
                className="hub-pulse-ring"
                cx={hub.x}
                cy={hub.y}
                r="25"
                fill="none"
                stroke="#c8102e"
                strokeWidth="2"
              />
              <circle
                className="hub-pulse-ring delay"
                cx={hub.x}
                cy={hub.y}
                r="25"
                fill="none"
                stroke="#c8102e"
                strokeWidth="2"
              />
              
              {/* Hub center */}
              <circle
                className="hub-center"
                cx={hub.x}
                cy={hub.y}
                r="8"
                fill="#c8102e"
                filter="url(#hubGlow)"
              />
              
              {/* Hub label background */}
              <rect
                className="hub-label-bg"
                x={hub.x - 35}
                y={hub.y - 45}
                width="70"
                height="32"
                rx="4"
                fill="#c8102e"
              />
              
              {/* Hub label text */}
              <text
                className="hub-label-text"
                x={hub.x}
                y={hub.y - 33}
                textAnchor="middle"
                fill="white"
                fontSize="7"
                fontWeight="600"
              >
                MAXPOWER
              </text>
              <text
                className="hub-label-text"
                x={hub.x}
                y={hub.y - 22}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="800"
              >
                HUB
              </text>
              
              {/* Hub name */}
              <text
                className="hub-name-text"
                x={hub.x}
                y={hub.y + 25}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="700"
              >
                {hub.name}
              </text>
            </g>
          ))}
        </g>

        {/* Animated delivery trucks/dots */}
        <g className="delivery-dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              className={`delivery-dot dot-${i + 1}`}
              r="5"
              fill="#ff8c00"
              filter="url(#glow)"
            />
          ))}
        </g>
      </svg>

      {/* Overlay info */}
      <div className="map-overlay-info">
        <div className="map-info-box">
          <span className="info-label">MAXPOWER</span>
          <span className="info-tag">HUB</span>
          <span className="info-location">NETWORK</span>
        </div>
      </div>
    </div>
  )
}
