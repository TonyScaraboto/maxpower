import { useScrollReveal } from '../hooks/useScrollReveal'
import './EnergySavingsPage.css'

export default function EnergySavingsPage() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const withoutRef = useScrollReveal<HTMLDivElement>()
  const withRef = useScrollReveal<HTMLDivElement>()

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

      {/* WITHOUT BLANKET */}
      <div className="energy-savings-section reveal" ref={withoutRef}>
        <h2 className="section-label section-label--without">WITHOUT THERMAL BLANKET</h2>
        <div className="energy-savings-content">
          <div className="energy-savings-image">
            <img
              src="/images/energy-savings/machine-without-blanket.png"
              alt="Industrial machine without thermal insulation"
              loading="lazy"
            />
          </div>

          <div className="energy-savings-data">
            <div className="data-report">
              <div className="report-header">
                <span className="report-date">PDF generated on 22/03/2022. 18:24</span>
                <span className="report-title">Cost simulation - Energy consumption (DMI ID: 078201155003_0c)</span>
              </div>

              <p className="report-note">
                For this cost simulation, different rates were used than those configured for this database, so the values may not correspond to those presented considering the originally configured rates.
              </p>

              <h3 className="table-period">Calculation Period - 06/01/2022 21:00 a 06/01/2022 21:59</h3>

              <div className="table-wrapper">
                <table className="energy-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Accounted</th>
                      <th>Tariff (TE+TU)</th>
                      <th>Total without taxes</th>
                      <th>Total with taxes</th>
                      <th>Calculation basis ICMS</th>
                      <th>ICMS (0%)</th>
                      <th>Pis + Cofins (0% / 0%)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>241,31 kwh</td>
                      <td>R$ 0,33</td>
                      <td>R$ 79,63</td>
                      <td>R$ 0,33</td>
                      <td>R$ 79,63</td>
                      <td>R$ 0,00</td>
                      <td>R$ 0,00</td>
                      <td className="highlight-value">R$ 79,63</td>
                    </tr>
                    <tr>
                      <td>Flag</td>
                      <td>241,31 kwh</td>
                      <td>R$ 0,00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>R$ 0,00</td>
                    </tr>
                    <tr>
                      <td>Public Lighting</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>R$ 0,00</td>
                    </tr>
                    <tr className="total-row">
                      <td colSpan={7}></td>
                      <td><strong>Total</strong></td>
                      <td className="highlight-value"><strong>R$ 79,63</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="table-subtitle">Consumption in kWh/phase without taxes (tariff x consumption)</h3>

              <div className="table-wrapper">
                <table className="energy-table phase-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Consumption phase 1</th>
                      <th>Value</th>
                      <th>Consumption phase 2</th>
                      <th>Value</th>
                      <th>Consumption phase 3</th>
                      <th>Value</th>
                      <th>Total Consumption</th>
                      <th>Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>80,03 kwh</td>
                      <td>R$ 26,41</td>
                      <td>80,8 kwh</td>
                      <td>R$ 26,66</td>
                      <td>80,48 kwh</td>
                      <td>R$ 26,56</td>
                      <td>241,31 kwh</td>
                      <td className="highlight-value">R$ 79,63</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="report-footer">
                <span className="footer-date">Day 06/01/2022</span>
                <span className="footer-total">Total <strong>241 kwh</strong> <strong className="highlight-value">R$ 79,63</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WITH BLANKET */}
      <div className="energy-savings-section reveal" ref={withRef}>
        <h2 className="section-label section-label--with">WITH MAXPOWER THERMAL BLANKET</h2>
        <div className="energy-savings-content">
          <div className="energy-savings-image">
            <img
              src="/images/energy-savings/machine.png"
              alt="Industrial machine with MaxPower thermal insulation system installed"
              loading="lazy"
            />
          </div>

          <div className="energy-savings-data">
            <div className="data-report">
              <div className="report-header">
                <span className="report-date">DF generated on 22/03/2022. 18:29</span>
                <span className="report-title">Cost simulation - Energy consumption (DMI ID: 078201155003_0c)</span>
              </div>

              <p className="report-note">
                For this cost simulation, different rates were used than those configured for this database, so the values may not correspond to those presented considering the originally configured rates.
              </p>

              <h3 className="table-period">Calculation Period - 06/01/2022 21:00 a 06/01/2022 21:59</h3>

              <div className="table-wrapper">
                <table className="energy-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Accounted</th>
                      <th>Tariff (TE+TU)</th>
                      <th>Total without taxes</th>
                      <th>Total with taxes</th>
                      <th>Calculation basis ICMS</th>
                      <th>ICMS (0%)</th>
                      <th>Pis + Cofins (0% / 0%)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>185,16 kwh</td>
                      <td>R$ 0,33</td>
                      <td>R$ 61,10</td>
                      <td>R$ 0,33</td>
                      <td>R$ 61,10</td>
                      <td>R$ 0,00</td>
                      <td>R$ 0,00</td>
                      <td className="highlight-value highlight-green">R$ 61,10</td>
                    </tr>
                    <tr>
                      <td>Flag</td>
                      <td>185,16 kwh</td>
                      <td>R$ 0,00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>R$ 0,00</td>
                    </tr>
                    <tr>
                      <td>Public Lighting</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>R$ 0,00</td>
                    </tr>
                    <tr className="total-row">
                      <td colSpan={7}></td>
                      <td><strong>Total</strong></td>
                      <td className="highlight-value highlight-green"><strong>R$ 61,10</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="table-subtitle">Consumption in kWh/phase without taxes (tariff x consumption)</h3>

              <div className="table-wrapper">
                <table className="energy-table phase-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Consumption phase 1</th>
                      <th>Value</th>
                      <th>Consumption phase 2</th>
                      <th>Value</th>
                      <th>Consumption phase 3</th>
                      <th>Value</th>
                      <th>Total Consumption</th>
                      <th>Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>62,85 kwh</td>
                      <td>R$ 20,74</td>
                      <td>62,22 kwh</td>
                      <td>R$ 20,53</td>
                      <td>60,09 kwh</td>
                      <td>R$ 19,83</td>
                      <td>185,16 kwh</td>
                      <td className="highlight-value highlight-green">R$ 61,10</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="report-footer report-footer--savings">
                <span className="footer-date">Day 24/01/2022</span>
                <span className="footer-total">Total <strong>185,16 kwh</strong> <strong className="highlight-value highlight-green">R$ 61,10</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SAVINGS SUMMARY */}
      <div className="savings-summary">
        <div className="savings-card">
          <span className="savings-label">Energy Saved</span>
          <span className="savings-value">56,15 kwh</span>
          <span className="savings-percent">-23% consumption</span>
        </div>
        <div className="savings-card">
          <span className="savings-label">Cost Reduction</span>
          <span className="savings-value">R$ 18,53</span>
          <span className="savings-percent">-23% per cycle</span>
        </div>
      </div>
    </main>
  )
}
