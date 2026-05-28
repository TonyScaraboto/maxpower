import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CoveragePage from './pages/CoveragePage'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  )
}

export default App
