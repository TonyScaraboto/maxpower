import { useScrollReveal } from '../hooks/useScrollReveal'
import './Dicas.css'

const dicas = [
  {
    title: 'Filter Screens',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/04da5218028a45768c25cdea7edbe0e9.png',
    description:
      'Improve the quality of your extrusion process with high-performance filtration screens for screen changer systems, removing contaminants and ensuring polymer purity.',
    benefits: ['Stainless steel durability', 'Consistent filtration', 'Reduced process contamination'],
  },
  {
    title: 'Thermal Covers',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/4ae96f52ba00414b84e93fa6546d09a7.jpg',
    description:
      'Thermal blankets create a protective barrier that retains heat, preventing losses to the environment and helping your heaters operate with greater efficiency.',
    benefits: ['Lower energy loss', 'Longer heater life', 'Thermal stability for the process'],
  },
  {
    title: 'Air Ring Insulation',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/259ba9bd1b5a4d7db386bbf58bbf2c8a.jpg',
    description:
      'The efficiency of blown film extrusion depends on the cooling capacity of the system. Insulation applied to the pipelines and air ring keeps the chilled air at the ideal temperature.',
    benefits: ['Better cooling control', 'Lower thermal losses', 'Improved extrusion consistency'],
  },
]

export default function Dicas() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="dicas" id="dicas">
      <div className="dicas-header reveal" ref={headerRef}>
        <span className="dicas-kicker">Dicas</span>
        <h2 className="section-title">Technical Solutions</h2>
        <p className="section-subtitle">
          Recreate the technical guidance of the old MaxPower page with practical
          industrial solutions for heating, insulation, and thermal control.
        </p>
      </div>

      <div className="dicas-grid">
        {dicas.map((item) => (
          <article key={item.title} className="dicas-card reveal">
            <div className="dicas-visual">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="dicas-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="dicas-callout reveal">
        <div>
          <span className="dicas-kicker">Discover Our Industrial Solutions</span>
          <h3>Find the best thermal solution for your operation</h3>
          <p>
            MaxPower provides specialized industrial heating solutions tailored to
            your equipment and production needs. Our technical team can evaluate your
            machines, identify overheating issues, and recommend the best solution to
            reduce energy consumption and improve operational performance.
          </p>
        </div>
        <a href="#contact" className="btn btn-primary">
          Contact Us
        </a>
      </div>
    </section>
  )
}
