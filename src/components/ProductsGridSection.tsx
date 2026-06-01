import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProductsGridSection.css'

type ProductFeature = {
  label: string
  text: string
}

type Product = {
  id: string
  index: string
  name: string
  image: string
  description?: string
  intro?: string
  sectionTitle?: string
  sectionText?: string
  featuresHeading?: string
  features?: ProductFeature[]
}

const products: Product[] = [
  {
    id: 'filter-screens',
    index: '01',
    name: 'Filter Screens',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/04da5218028a45768c25cdea7edbe0e9.png',
    description:
      'Improve the quality of your extrusion process with our high-performance filtration screens for screen changer systems. Essential for removing contaminants and ensuring polymer purity.',
  },
  {
    id: 'thermal-covers-card',
    index: '02',
    name: 'Thermal Covers',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/4ae96f52ba00414b84e93fa6546d09a7.jpg',
    description:
      'Thermal blankets provide direct protection to electric heaters, increasing system efficiency and durability while preventing heat losses to the environment.',
  },
  {
    id: 'air-ring-insulation',
    index: '03',
    name: 'Air Ring Insulation',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/259ba9bd1b5a4d7db386bbf58bbf2c8a.jpg',
    description:
      'Thermal insulation applied to pipelines and the air ring ensures that chilled air reaches the bubble at the ideal temperature, without losses along the way.',
  },
  {
    id: 'thermal-insulation-covers',
    index: '04',
    name: 'Thermal Insulation Covers for Extruder Barrels and Injection Molding Machine Barrels',
    image: '/images/products/thermal-insulation-covers.png',
    description:
      'Maximize the efficiency of your manufacturing operations with our Thermal Insulation Covers. Specifically engineered for extruder and injection molding machine barrels, these high-performance covers act as an effective thermal barrier, preventing heat dissipation into the surrounding environment and concentrating energy exactly where it is needed: in the polymer processing zone. By reducing heat loss, our insulation covers help improve temperature stability, lower energy consumption, enhance process efficiency, and contribute to a safer and more comfortable working environment.',
  },
  {
    id: 'ceramic-heaters',
    index: '05',
    name: 'High-Performance Ceramic Heaters: Durable and Energy Efficient',
    image: '/images/products/ceramic-heaters-new.png',
    intro:
      'Our Ceramic Heaters are designed to meet the demanding requirements of the plastics processing industry. Engineered for extruder barrels, die heads, injection molding, and blow molding machines, they deliver superior heat transfer, durability, and precise temperature control.',
    sectionTitle: 'Advanced Engineering for Reliable Performance',
    featuresHeading: 'Key Features and Benefits:',
    features: [
      {
        label: 'High-Temperature Resistant Steel Housing:',
        text: 'Built with premium alloy steel to withstand extreme operating temperatures and ensure long service life.',
      },
      {
        label: 'Ceramic Fiber Insulation:',
        text: 'High-density ceramic fiber minimizes heat loss, improves energy efficiency, and promotes faster, more uniform heating.',
      },
      {
        label: 'High Thermal Conductivity Ceramic Elements:',
        text: 'Advanced ceramic components provide efficient heat transfer and consistent temperature distribution across the heating zone.',
      },
      {
        label: 'Fast and Uniform Heating:',
        text: 'Reduces machine startup time while maintaining stable processing temperatures',
      },
    ],
  },
  {
    id: 'finned-ceramic-heaters',
    index: '06',
    name: 'High-Performance Finned Ceramic Heaters',
    image: '/images/products/finned-ceramic-heaters.png',
    intro:
      'Upgrade your production line heating system with our Finned Ceramic Heaters. This advanced technology is designed to replace conventional heating systems with outstanding energy efficiency, superior thermal control, and a direct reduction in operating costs.',
    sectionTitle: 'Why Are Finned Ceramic Heaters Superior?',
    sectionText:
      'Unlike traditional heating solutions, this design eliminates the need for aluminum heat dissipators between heating zones, enabling a more efficient and intelligent installation.',
    featuresHeading: 'Key Benefits',
    features: [
      {
        label: 'Optimized Space and Heating Capacity:',
        text: 'By eliminating aluminum dissipators, more heaters can be installed on the same barrel, providing greater heating coverage and improved thermal performance.',
      },
      {
        label: 'Precise Temperature Control:',
        text: 'The absence of intermediate metallic components allows each heating zone to operate independently, ensuring exceptional thermal stability and accuracy.',
      },
      {
        label: 'Improved Energy Efficiency:',
        text: 'Heat is directed exactl',
      },
    ],
  },
]

export default function ProductsGridSection() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="products-grid-section" aria-labelledby="all-products-heading">
      <div className="products-grid-section-bg" aria-hidden="true" />

      <div className="reveal products-grid-header" ref={headerRef}>
        <span className="products-grid-eyebrow">Complete catalog</span>
        <h2 id="all-products-heading" className="section-title">
          All Products
        </h2>
      </div>

      <div className="products-grid">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} delayClass={`reveal-delay-${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({
  product,
  delayClass,
}: {
  product: Product
  delayClass: string
}) {
  const ref = useScrollReveal<HTMLElement>(0.1)

  return (
    <article id={product.id} className={`product-card reveal ${delayClass}`} ref={ref}>
      <div className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <span className="product-card-index">{product.index}</span>
        <h3>{product.name}</h3>
        {product.description && <p>{product.description}</p>}
        {product.intro && <p>{product.intro}</p>}
        {product.sectionTitle && (
          <h4 className="product-card-section-title">{product.sectionTitle}</h4>
        )}
        {product.sectionText && <p>{product.sectionText}</p>}
        {product.featuresHeading && (
          <p className="product-card-features-heading">{product.featuresHeading}</p>
        )}
        {product.features && (
          <ul className="product-card-features">
            {product.features.map((feature) => (
              <li key={feature.label}>
                <strong>{feature.label}</strong> {feature.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
