import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Plans & Pricing</a></li>
              <li><a href="#contact">Get In Touch</a></li>
              <li><a href="#faq">Help & FAQ</a></li>
              <li><a href="#privacy">Bizzlead Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-links">
              <li><a href="mailto:Support@Bizzlead.in">Support@BizzLead.in</a></li>
            </ul>
          </div>

          <div className="footer-section footer-newsletter">
            <h3 className="footer-title">Subscribe</h3>
            <p className="footer-newsletter-text">
              Get the latest updates and offers for business services.
            </p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <input
                type="text"
                name="bot-field"
                className="footer-bot-field"
                tabIndex="-1"
                autoComplete="off"
              />
              <button type="submit" className="footer-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © Copyright 2024 BizzLead. All Rights Reserved. Developed By LeadEstela
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

