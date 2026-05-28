import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProductsVideoHero.css'

const YOUTUBE_VIDEO_ID = 'sIso559xWrA'
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`

export default function ProductsVideoHero() {
  const ref = useScrollReveal<HTMLElement>(0.08)

  return (
    <section className="products-video-hero reveal" ref={ref} aria-labelledby="products-video-hero-title">
      <div className="products-video-hero-bg" aria-hidden="true" />

      <div className="products-video-hero-inner">
        <div className="products-video-hero-text">
          <h1 id="products-video-hero-title">Discover Our Industrial Solutions</h1>
          <p>
            Watch MaxPower videos and see how our products and solutions can help your
            industry save energy, reduce overheating, and improve equipment performance
            with advanced technology, engineering, and specialized technical support.
          </p>
        </div>

        <div className="products-video-card">
          <div className="products-video-card-channel">
            <span className="products-video-card-avatar" aria-hidden="true">
              M
            </span>
            <div>
              <strong>MaxPower</strong>
              <span>MaxPower industrial heaters</span>
            </div>
          </div>

          <div className="products-video-embed">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="MaxPower industrial solutions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
