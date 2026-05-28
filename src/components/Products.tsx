import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Products.css'

const products = [
  {
    id: 1,
    number: '01',
    name: 'Filter Screens',
    tagline: 'Improve extrusion quality with high-performance filtration',
    description:
      'Improve the quality of your extrusion process with our high-performance filtration screens for screen changer systems. Essential for removing contaminants and ensuring polymer purity, our screens are manufactured from high-quality stainless steel, offering exceptional durability and resistance.',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/04da5218028a45768c25cdea7edbe0e9.png',
    specs: [
      { label: 'Application', value: 'Screen changer systems' },
      { label: 'Material', value: 'High-quality stainless steel' },
      { label: 'Result', value: 'Cleaner polymer flow' },
    ],
  },
  {
    id: 2,
    number: '02',
    name: 'Thermal Covers',
    tagline: 'Protect heaters and retain heat where it matters most',
    description:
      'Thermal blankets provide direct protection to electric heaters, increasing system efficiency and durability. They create a barrier that retains heat, preventing losses to the environment and helping your heaters operate with greater efficiency.',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/4ae96f52ba00414b84e93fa6546d09a7.jpg',
    specs: [
      { label: 'Application', value: 'Electric heaters and thermal systems' },
      { label: 'Benefit', value: 'Lower heat loss' },
      { label: 'Impact', value: 'Reduced energy consumption' },
    ],
  },
  {
    id: 3,
    number: '03',
    name: 'Air Ring Insulation',
    tagline: 'Preserve cooling efficiency for consistent blown film quality',
    description:
      'The efficiency of a blown film extruder directly depends on the cooling capacity of the system. Thermal insulation applied to the pipelines and the air ring is the ultimate solution to ensure that the chilled air reaches the bubble at the ideal temperature, without losses along the way.',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/259ba9bd1b5a4d7db386bbf58bbf2c8a.jpg',
    specs: [
      { label: 'Application', value: 'Pipelines and air ring' },
      { label: 'Benefit', value: 'Reduced thermal losses' },
      { label: 'Impact', value: 'Improved extrusion consistency' },
    ],
  },
]

export default function Products() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="products" id="products">
      <div className="products-header reveal" ref={headerRef}>
        <span className="products-eyebrow">Technical Solutions</span>
        <h2 className="section-title">Products</h2>
        <p className="section-subtitle">
          Recreate the old MaxPower guidance in a modern site layout with practical
          technical solutions for filtration, insulation, and thermal efficiency.
        </p>
      </div>

      <div className="products-showcase">
        {products.map((product, index) => (
          <ProductPanel
            key={product.id}
            product={product}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

function ProductPanel({
  product,
  reverse,
}: {
  product: (typeof products)[0]
  reverse: boolean
}) {
  const ref = useScrollReveal<HTMLElement>(0.15)

  return (
    <article
      className={`product-panel${reverse ? ' product-panel--reverse' : ''} reveal`}
      ref={ref}
    >
      <div className="product-panel-inner">
        <div className="product-stage">
          <span className="product-number" aria-hidden="true">
            {product.number}
          </span>
          <div className="product-image-frame">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={588}
              height={488}
            />
          </div>
        </div>

        <div className="product-details">
          <span className="product-index">{product.number}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-tagline">{product.tagline}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-specs">
            {product.specs.map((spec) => (
              <div key={spec.label} className="spec-item">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="product-actions">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="product-link">
              Technical inquiry →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
