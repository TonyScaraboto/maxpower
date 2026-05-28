import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

const HERO_VIDEO = '/videos/hero-2.mp4'

export default function Hero() {
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="hero hero-spacex" id="home">
      <video
        className="hero-video-bg active"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="hero-overlay-spacex" />
      <div className="hero-content-spacex" ref={contentRef}>
        <h1 className="hero-title-spacex">
          We provide the best heat dissipation solutions for your industry.
        </h1>

        <p className="hero-subtitle-spacex">
          Advanced industrial heating technologies engineered to deliver efficiency,
          safety, and consistent thermal performance.
        </p>

        <div className="hero-buttons-spacex">
          <Link to="/products" className="hero-btn-spacex hero-btn-primary">
            Explore Products
          </Link>
          <Link to="/about" className="hero-btn-spacex hero-btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
