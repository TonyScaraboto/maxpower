import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

const HERO_VIDEOS = ['/videos/hero.mp4', '/videos/hero-b.mp4']

export default function Hero() {
  const contentRef = useScrollReveal<HTMLDivElement>()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === active) {
        void video.play().catch(() => { })
      } else {
        video.pause()
      }
    })
  }, [active])

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_VIDEOS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero hero-spacex" id="home">
      {HERO_VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el
          }}
          className={`hero-video-bg${i === active ? ' active' : ''}`}
          src={src}
          loop
          muted
          playsInline
          preload="auto"
        />
      ))}
      <div className="hero-overlay-spacex" />
      <div className="hero-content-spacex" ref={contentRef}>
        <h1 className="hero-title-spacex">
          Solutions built on results.
        </h1>

        <p className="hero-subtitle-spacex">
          Engineering solutions that reduce waste, improve efficiency, and deliver proven results.
        </p>

        <div className="hero-buttons-spacex">
          <Link to="/products" className="hero-btn-spacex hero-btn-primary">
            Explore Our Solutions
          </Link>
          <Link to="/about" className="hero-btn-spacex hero-btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
