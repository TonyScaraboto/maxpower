import { useScrollReveal } from '../hooks/useScrollReveal'
import './ThermalCoversSection.css'

const THERMAL_COVERS_IMAGE =
  'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/4ae96f52ba00414b84e93fa6546d09a7.jpg'

const benefits = [
  'Reduced energy losses',
  'Increased heating efficiency',
  'Thermal stability of the process',
  'Equipment protection',
  'Optimization of operational costs',
]

export default function ThermalCoversSection() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const panelRef = useScrollReveal<HTMLElement>(0.12)

  return (
    <section className="thermal-covers-feature" id="thermal-covers">
      <div className="thermal-covers-header reveal" ref={headerRef}>
        <span className="thermal-covers-eyebrow">Technical Solutions</span>
        <h1 className="section-title">Thermal Blankets</h1>
        <p className="section-subtitle">
          Complete thermal management for industrial equipment — maximizing
          efficiency, stability, and operational safety.
        </p>
      </div>

      <article className="thermal-covers-panel reveal" ref={panelRef}>
        <div className="thermal-covers-panel-inner">
          <figure className="thermal-covers-media">
            <img
              src={THERMAL_COVERS_IMAGE}
              alt="Industrial thermal insulation covers on equipment"
              loading="lazy"
              decoding="async"
              width={286}
              height={268}
            />
          </figure>

          <div className="thermal-covers-content">
            <span className="thermal-covers-index">02</span>
            <h2>Enhanced Technical Version</h2>
            <p className="thermal-covers-tagline">
              High-performance insulation integrated with heating and dissipation
              systems
            </p>

            <div className="thermal-covers-copy">
              <p>
                Our thermal insulation covers, when used in conjunction with heating
                elements and heat dissipation systems, form a complete thermal management
                solution designed to maximize energy efficiency and operational
                stability of equipment.
              </p>
              <p>
                Manufactured with high-performance materials and advanced thermal
                insulation, these covers significantly reduce heat losses through
                convection and radiation, maintaining a uniform temperature across the
                entire surface of the equipment.
              </p>
              <p>
                In addition, the system directly contributes to operational safety by
                reducing exposure to hot surfaces and minimizing thermal fluctuations
                that could compromise the production process.
              </p>
            </div>

            <p className="thermal-covers-lead">
              Ideal for industrial applications that require high thermal performance,
              this solution provides:
            </p>

            <ul className="thermal-covers-benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}
