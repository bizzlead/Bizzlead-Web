import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/Logo Small Brand.svg'
import whiteLogoImage from '../assets/Bizzlead White Logo.svg'
import './Hero.css'
import './Header.css'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = (e, targetId) => {
    if (isHomePage && targetId) {
      e.preventDefault()
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <section className="hero" id="home">
      {/* Header inside Hero - becomes fixed on scroll */}
      <header className={`header header-in-hero ${isScrolled ? 'scrolled fixed-header' : ''} ${isHomePage ? 'home-header' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img 
                src={isScrolled ? logoImage : whiteLogoImage} 
                alt="BizzLead Logo" 
                className="logo-svg" 
              />
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => handleNavLinkClick(null, 'home')}>Home</Link>
            <div className="dropdown">
              <a href="#company">Company</a>
              <div className="dropdown-content">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
              </div>
            </div>
            {isHomePage && <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>}
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Plans & Pricing</Link>
            {isHomePage && <a href="#faq" onClick={(e) => handleNavLinkClick(e, 'faq')}>FAQ</a>}
            <a href="#login" className="nav-login" onClick={() => setIsMenuOpen(false)}>Login</a>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Professional Background Animation */}
      <div className="hero-animated-bg">
        {/* Gradient orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        {/* Geometric shapes */}
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
        <div className="geometric-shape shape-5"></div>
        
        {/* Floating dots */}
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
        <div className="floating-dot dot-5"></div>
        <div className="floating-dot dot-6"></div>
        
        {/* Rotating rings */}
        <div className="rotating-ring ring-1"></div>
        <div className="rotating-ring ring-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <Link to="/contact" className="hero-badge">
              Start Your Call Tracking CRM @ just ₹99/-
            </Link>
          </div>
          <h1 className="hero-title">
            BizzLead
          </h1>
          <p className="hero-subtitle">
            Bizzlead: Empowering Growth with Smart CRM Solutions
          </p>
          <p className="hero-email">
            Email Now: <a href="mailto:Support@Bizzlead.in">Support@Bizzlead.in</a>
          </p>
          <h2 className="hero-heading">
            Boost Sales Growth with Real-Time Call Tracking & Lead Management:
          </h2>
          <p className="hero-description">
            Transform Your leads to sales Today!
          </p>
          <p className="hero-text">
            Elevate your sales with real-time call tracking and lead management. maximize your reach outs with our auto-dial, and transform your growth with Live team performance features.
          </p>
          <Link to="/contact" className="hero-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

