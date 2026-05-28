import './ProductsFormSection.css'

export default function ProductsFormSection() {
  return (
    <section className="products-form-section">
      <div className="products-form-content">
        <div className="products-form-text">
          <h1>DISCOVER THE BEST<br />THERMAL SOLUTIONS FOR<br />YOUR INDUSTRY</h1>
          <p>
            MaxPower provides specialized industrial heating solutions tailored to your equipment and production needs. Our technical team and engineers can evaluate your machines, identify overheating issues, improve thermal efficiency, and recommend the best solution to reduce energy consumption and maximize operational performance. Send us your message and our specialists will contact you to schedule a technical visit and explain the best solution for your operation.<br /><br />
            <b>PT:</b>
          </p>
        </div>
        <form className="products-form-fields">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="email *" required />
          <textarea placeholder="Write your message here *" required rows={4} />
          <input type="text" placeholder="Telephone *" required />
          <input type="text" placeholder="Mobile *" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
