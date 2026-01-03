import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/Logo Small Brand.svg'
import whiteLogoImage from '../assets/Bizzlead White Logo.svg'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    // On non-homepage routes, always show scrolled state (white header with dark text)
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : ''}`}>
      {/* Same animated background as hero - only on homepage when not scrolled */}
      {isHomePage && !isScrolled && (
        <div className="header-animated-bg">
          {/* Gradient orbs */}
          <div className="header-gradient-orb header-orb-1"></div>
          <div className="header-gradient-orb header-orb-2"></div>
          <div className="header-gradient-orb header-orb-3"></div>
          
          {/* Geometric shapes */}
          <div className="header-geometric-shape header-shape-1"></div>
          <div className="header-geometric-shape header-shape-2"></div>
          <div className="header-geometric-shape header-shape-3"></div>
          
          {/* Floating dots */}
          <div className="header-floating-dot header-dot-1"></div>
          <div className="header-floating-dot header-dot-2"></div>
          <div className="header-floating-dot header-dot-3"></div>
          
          {/* Rotating rings */}
          <div className="header-rotating-ring header-ring-1"></div>
        </div>
      )}
      
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img 
              src={isScrolled || !isHomePage ? logoImage : whiteLogoImage} 
              alt="BizzLead Logo" 
              className="logo-svg" 
            />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div className="dropdown">
              <a href="#company">Company</a>
              <div className="dropdown-content">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
              </div>
            </div>
          {isHomePage ? (
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          ) : (
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          )}
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Plans & Pricing</Link>
          {isHomePage ? (
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          ) : (
            <Link to="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          )}
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
  )
}

export default Header

