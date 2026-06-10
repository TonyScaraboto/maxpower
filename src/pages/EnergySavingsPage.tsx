import { useScrollReveal } from '../hooks/useScrollReveal'
import './EnergySavingsPage.css'

export default function EnergySavingsPage() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const comparisonRef = useScrollReveal<HTMLDivElement>()
  const summaryRef = useScrollReveal<HTMLDivElement>()

  return (
    <main className="energy-savings-page">
      <div className="energy-savings-header reveal" ref={headerRef}>
        <span className="energy-savings-eyebrow">Energy Savings Results</span>
        <h1 className="energy-savings-title">
          REAL INDUSTRIAL TEST – MAXPOWER THERMAL INSULATION SYSTEM
        </h1>
        <p className="energy-savings-subtitle">
          See the real-world proof of how our thermal insulation system reduces
          energy consumption.
        </p>
      </div>

      <div className="comparison-images reveal" ref={comparisonRef}>
        <figure className="comparison-image comparison-image--without">
          <figcaption className="comparison-label comparison-label--without">
            Without Blanket
          </figcaption>
          <img
            src="/images/energy-savings/machine-without-blanket.png"
            alt="Industrial machine without thermal insulation"
            loading="lazy"
          />
        </figure>
        <figure className="comparison-image comparison-image--with">
          <figcaption className="comparison-label comparison-label--with">
            With Blanket
          </figcaption>
          <img
            src="/images/energy-savings/machine.png"
            alt="Industrial machine with MaxPower thermal insulation system installed"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="cost-summary reveal" ref={summaryRef}>
        <h2 className="cost-summary-title">Cost Summary</h2>

        <p className="cost-line cost-line--without">
          <span className="cost-badge cost-badge--without">Without Thermal Insulation Blanket</span>
          <span className="cost-detail">
            Consumption 150.1 kWh × $0.40 = $60.04
          </span>
        </p>

        <p className="cost-line cost-line--with">
          <span className="cost-badge cost-badge--with">With Thermal Insulation Blanket</span>
          <span className="cost-detail">
            Consumption 112.07 kWh × $0.40 = $44.83
          </span>
        </p>

        <div className="cost-savings-row">
          <span className="cost-savings-badge">Savings: 25%</span>
          <div className="cost-savings-projections">
            <p>= $365.04 / Day (24 Hours)</p>
            <p>= $10,951.20 (30 Working Days)</p>
            <p>= $262,828.80 (24 Months)</p>
          </div>
        </div>

        <p className="cost-disclaimer">
          Estimated values based on an electricity rate of $0.40 per kWh
        </p>
      </div>

      <div className="savings-summary">
        <div className="savings-card">
          <span className="savings-label">Energy Saved</span>
          <span className="savings-value">37.94 kWh</span>
          <span className="savings-percent">-25% consumption</span>
        </div>
        <div className="savings-card">
          <span className="savings-label">Cost Reduction</span>
          <span className="savings-value">$15.25 per hour</span>
          <span className="savings-percent">-25% per cycle</span>
        </div>
      </div>
    </main>
  )
}
