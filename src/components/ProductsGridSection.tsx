import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProductsGridSection.css'

const products = [
  {
    index: '01',
    name: 'Filter Screens',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/04da5218028a45768c25cdea7edbe0e9.png',
    description:
      'Improve the quality of your extrusion process with our high-performance filtration screens for screen changer systems. Essential for removing contaminants and ensuring polymer purity.',
  },
  {
    index: '02',
    name: 'Thermal Covers',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/4ae96f52ba00414b84e93fa6546d09a7.jpg',
    description:
      'Thermal blankets provide direct protection to electric heaters, increasing system efficiency and durability while preventing heat losses to the environment.',
  },
  {
    index: '03',
    name: 'Air Ring Insulation',
    image:
      'https://yata-apix-2930b0d1-92d6-4c93-a4ac-2db6facb6458.s3-object.locaweb.com.br/259ba9bd1b5a4d7db386bbf58bbf2c8a.jpg',
    description:
      'Thermal insulation applied to pipelines and the air ring ensures that chilled air reaches the bubble at the ideal temperature, without losses along the way.',
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
  product: (typeof products)[0]
  delayClass: string
}) {
  const ref = useScrollReveal<HTMLElement>(0.1)

  return (
    <article className={`product-card reveal ${delayClass}`} ref={ref}>
      <div className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <span className="product-card-index">{product.index}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </article>
  )
}
