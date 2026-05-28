import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <img src="/images/logo.png" alt="Maxpower" className="footer-logo" />
          <p>
            Advanced industrial heating solutions for excellence and reliability.
          </p>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Filter Screens</Link></li>
            <li><Link to="/products">Thermal Covers</Link></li>
            <li><Link to="/products">Air Ring Insulation</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/coverage">USA Coverage</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+18174712000">+1 (817) 471-2000</a>
            </li>
            <li>
              <a href="mailto:contact@maxpower.com">contact@maxpower.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Maxpower. All rights reserved.</p>
      </div>
    </footer>
  )
}
