import { useScrollReveal } from '../hooks/useScrollReveal'
import './TestimonialSection.css'

const testimonial = {
  name: 'Michael Anderson',
  role: 'Operations Manager',
  image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  quote: `Installing Maxpower heat sinks in our facility was a game-changer. We were struggling with excessive heat buildup, unstable performance, and rising energy costs. After the installation, the improvement was immediate and impressive. The system now runs cooler, smoother, and far more efficiently. What truly stood out was the significant reduction in our energy consumption — our monthly costs dropped noticeably, delivering real and measurable savings. The durability and engineering quality of Maxpower products are outstanding, and the overall performance exceeded our expectations. It's a smart, reliable, and highly effective solution for any industrial operation dealing with thermal challenges.`,
}

export default function TestimonialSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      className="testimonial-section reveal"
      ref={sectionRef}
      aria-labelledby="testimonial-title"
    >
      <div className="testimonial-inner">
        <div className="testimonial-avatar">
          <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
          <span className="testimonial-like" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />
            </svg>
          </span>
        </div>

        <div className="testimonial-content">
          <h2 id="testimonial-title" className="testimonial-title">
            See what people are saying about Maxpower
          </h2>
          <blockquote className="testimonial-quote">
            <p>{testimonial.quote}</p>
            <footer className="testimonial-author">— {testimonial.name}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
