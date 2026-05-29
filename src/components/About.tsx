import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const engineeringSlides = [
  {
    src: '/images/about/slide-1.png',
    alt: 'MaxPower engineering team with industrial heaters',
  },
  {
    src: '/images/about/slide-2.png',
    alt: 'Engineering team in thermal manufacturing process',
  },
  {
    src: '/images/about/slide-3.png',
    alt: 'Industrial thermal insulation line',
  },
  {
    src: '/images/about/slide-4.png',
    alt: 'Thermal blanket application in equipment',
  },
  {
    src: '/images/about/slide-5.png',
    alt: 'Ceramic thermal component',
  },
]

const specialties = [
  {
    id: 'heating',
    title: 'High-Performance Heating',
    description:
      'Ceramic heaters that heat and cool quickly, reducing energy consumption.',
    icon: 'heating',
  },
  {
    id: 'thermal-control',
    title: 'Thermal Control',
    description: 'Technical coating that keeps the air at the ideal temperature.',
    icon: 'thermal-control',
  },
  {
    id: 'insulation',
    title: 'Smart Insulation',
    description:
      'Thermal blankets that reduce consumption and increase operational safety.',
    icon: 'insulation',
  },
  {
    id: 'heads',
    title: 'Heating for Heads',
    description: 'Armored heaters for areas with high thermal demand.',
    icon: 'heads',
  },
  {
    id: 'filtration',
    title: 'Precision Filtration',
    description: 'Stainless steel screens that ensure polymer purity.',
    icon: 'filtration',
  },
  {
    id: 'optimization',
    title: 'Thermal Optimization',
    description:
      'Thermal solutions that increase efficiency and production stability.',
    icon: 'optimization',
  },
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)

  const engineeringRef = useScrollReveal<HTMLElement>()
  const introRef = useScrollReveal<HTMLElement>()
  const specialtyHeaderRef = useScrollReveal<HTMLDivElement>()

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % engineeringSlides.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? engineeringSlides.length - 1 : prev - 1,
    )
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const timerId = window.setInterval(goNext, 4500)
    return () => window.clearInterval(timerId)
  }, [])


  return (
    <div className="about-page">
      <section
        className="about-engineering reveal"
        ref={engineeringRef}
        aria-labelledby="about-engineering-title"
      >
        <video
          className="about-video-bg"
          src="/images/WhatsApp%20Video%202026-05-22%20at%2014.03.58.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="about-video-overlay" />
        <div className="about-engineering-inner">
          <h1 id="about-engineering-title" className="about-engineering-title">
            Expert Engineering Team: Precision in Thermal Installation
          </h1>
          <p className="about-engineering-text">
            Our team is composed of highly selected professionals, all certified
            in mechanics, hydraulics, and civil construction to ensure a flawless
            installation of heat sinks. This technical rigor guarantees the
            operational success and continuous growth of our partners.
          </p>

          <div className="about-carousel">
            <div className="about-carousel-stage">
              <button
                type="button"
                className="about-carousel-nav about-carousel-nav-prev"
                aria-label="Previous image"
                onClick={goPrev}
              >
                ‹
              </button>

              <div className="about-carousel-track">
                {engineeringSlides.map((slide, index) => {
                  const offset = index - activeIndex
                  const isActive = index === activeIndex
                  
                  return (
                    <figure
                      key={slide.src}
                      className={`about-carousel-card${isActive ? ' is-active' : ''}`}
                      style={{
                        '--offset': offset,
                      } as React.CSSProperties}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        loading="lazy"
                      />
                    </figure>
                  )
                })}
              </div>

              <button
                type="button"
                className="about-carousel-nav about-carousel-nav-next"
                aria-label="Next image"
                onClick={goNext}
              >
                ›
              </button>
            </div>
          </div>

          <div className="about-carousel-dots" role="tablist" aria-label="Slide navigation">
            {engineeringSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                className={`about-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

        </div>
      </section>

      <section className="about-intro reveal" ref={introRef} aria-labelledby="about-intro-title">
        <div className="about-intro-inner">
          <h1 id="about-intro-title" className="about-intro-title">
            Innovation in Thermal Insulation and Energy Savings
          </h1>
          <p className="about-intro-text">
            Maxpower develops advanced thermal insulation systems and high-performance
            resistors designed to minimize heat loss. Our solutions focus on reducing
            energy consumption while maintaining optimal operating temperatures. This
            balance ensures significant cost savings and a more sustainable production
            line for your industry.
          </p>
        </div>
      </section>

      <section className="about-specialty" aria-labelledby="about-specialty-title">
        <div className="about-specialty-header reveal" ref={specialtyHeaderRef}>
          <h2 id="about-specialty-title" className="about-specialty-title">
            Our technical specialty
          </h2>
          <p className="about-specialty-subtitle">
            Our specialty is solving your problem! Discover below our services.
          </p>
        </div>

        <ul className="about-specialty-grid">
          {specialties.map((item, index) => (
            <SpecialtyCard key={item.id} item={item} delayClass={`reveal-delay-${(index % 3) + 1}`} />
          ))}
        </ul>
      </section>
    </div>
  )
}

function SpecialtyCard({
  item,
  delayClass,
}: {
  item: (typeof specialties)[0]
  delayClass: string
}) {
  const ref = useScrollReveal<HTMLLIElement>(0.1)

  return (
    <li className={`about-specialty-card reveal ${delayClass}`} ref={ref}>
      <div className="about-specialty-icon" aria-hidden="true">
        <SpecialtyIcon name={item.icon} />
      </div>
      <div className="about-specialty-copy">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  )
}

function SpecialtyIcon({ name }: { name: string }) {
  const stroke = 'currentColor'
  const common = {
    fill: 'none',
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'heating':
    case 'optimization':
      return (
        <svg viewBox="0 0 64 64" role="presentation">
          <path {...common} d="M32 8v8M32 48v8M8 32h8M48 32h8" />
          <circle {...common} cx="32" cy="32" r="10" />
          <path {...common} d="M20 44c2-6 6-10 12-10s10 4 12 10" />
          <path {...common} d="M14 52h12M38 52h12" />
          <path {...common} d="M44 18l4 4M16 46l4 4" />
        </svg>
      )
    case 'thermal-control':
    case 'insulation':
      return (
        <svg viewBox="0 0 64 64" role="presentation">
          <path {...common} d="M28 10v44M36 10v44" />
          <circle {...common} cx="32" cy="44" r="6" />
          <path {...common} d="M20 22h24M18 30h28M20 38h24" />
          <path {...common} d="M32 10c4 4 4 8 0 12" />
        </svg>
      )
    case 'heads':
      return (
        <svg viewBox="0 0 64 64" role="presentation">
          <path {...common} d="M18 46c0-10 6-18 14-18s14 8 14 18" />
          <path {...common} d="M22 46h20" />
          <path {...common} d="M24 28c2-6 6-10 8-10s6 4 8 10" />
          <path {...common} d="M44 20l4 6M46 16v8" />
        </svg>
      )
    case 'filtration':
      return (
        <svg viewBox="0 0 64 64" role="presentation">
          <path {...common} d="M32 12v28" />
          <circle {...common} cx="32" cy="44" r="5" />
          <path {...common} d="M18 32a14 14 0 0 1 28 0" />
          <path {...common} d="M22 24a10 10 0 0 1 20 0" />
        </svg>
      )
    default:
      return null
  }
}
