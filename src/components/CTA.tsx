import { useScrollReveal } from '../hooks/useScrollReveal'
import './CTA.css'

export default function CTA() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section className="cta reveal" id="contact" ref={sectionRef}>
      <div className="cta-bg">
        <img src="/images/cta-bg.jpg" alt="" aria-hidden="true" loading="lazy" />
      </div>
      <div className="cta-container">
        <h2>Ready to optimize your thermal management?</h2>
        <p>
          Get in touch with our specialists to find the perfect solution for your
          industrial needs.
        </p>
        <a href="mailto:sales@maxpower.solutions" className="btn btn-primary btn-large">
          Contact Us Today
        </a>
      </div>
    </section>
  )
}
