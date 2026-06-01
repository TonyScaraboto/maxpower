import { useScrollReveal } from '../hooks/useScrollReveal'
import './TestimonialSection.css'

const testimonial = {
  name: 'Michael Anderson',
  role: 'Operations Manager',
  image: '/images/testimonial-client.png',
  imageAlt:
    'Technician giving thumbs up next to MaxPower thermal insulation installed on industrial equipment',
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
        <div className="testimonial-body">
          <div className="testimonial-image">
            <img src={testimonial.image} alt={testimonial.imageAlt} loading="lazy" />
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
      </div>
    </section>
  )
}
