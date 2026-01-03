import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="contact-page">
      <Header />
      
      <section className="contact-hero">
        {/* Professional Background Animation */}
        <div className="contact-hero-animated-bg">
          {/* Gradient orbs */}
          <div className="contact-gradient-orb contact-orb-1"></div>
          <div className="contact-gradient-orb contact-orb-2"></div>
          <div className="contact-gradient-orb contact-orb-3"></div>
          
          {/* Geometric shapes */}
          <div className="contact-geometric-shape contact-shape-1"></div>
          <div className="contact-geometric-shape contact-shape-2"></div>
          <div className="contact-geometric-shape contact-shape-3"></div>
          <div className="contact-geometric-shape contact-shape-4"></div>
          <div className="contact-geometric-shape contact-shape-5"></div>
          
          {/* Floating dots */}
          <div className="contact-floating-dot contact-dot-1"></div>
          <div className="contact-floating-dot contact-dot-2"></div>
          <div className="contact-floating-dot contact-dot-3"></div>
          <div className="contact-floating-dot contact-dot-4"></div>
          <div className="contact-floating-dot contact-dot-5"></div>
          <div className="contact-floating-dot contact-dot-6"></div>
          
          {/* Rotating rings */}
          <div className="contact-rotating-ring contact-ring-1"></div>
          <div className="contact-rotating-ring contact-ring-2"></div>
        </div>

        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Start Your Call Tracking CRM @ just ₹99/-<br />
            Ready to transform your sales? Let's talk!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <a href="mailto:Support@Bizzlead.in">Support@Bizzlead.in</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3>Location</h3>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3528 21.3992C21.1482 21.5858 20.9073 21.7262 20.6446 21.8117C20.3819 21.8972 20.1035 21.9257 19.83 21.895C16.7438 21.5111 13.787 20.4302 11.19 18.74C8.77382 17.2147 6.72533 15.1657 5.2 12.74C3.49997 10.1447 2.41125 7.18628 2.03 4.1C1.99929 3.82648 2.02779 3.54809 2.1133 3.28539C2.19881 3.02269 2.33917 2.78181 2.52579 2.57725C2.7124 2.37268 2.94179 2.20912 3.19678 2.09753C3.45177 1.98594 3.72746 1.92896 4.006 1.93H7.006C7.48687 1.92998 7.95476 2.09974 8.33006 2.41126C8.70535 2.72278 8.96622 3.15936 9.066 3.64L9.936 7.29C10.0333 7.74787 10.0161 8.22614 9.88627 8.67557C9.75645 9.125 9.51805 9.53031 9.196 9.85L7.266 11.78C8.88533 14.6255 11.1945 16.9347 14.04 18.554L15.97 16.624C16.2897 16.302 16.695 16.0636 17.1444 15.9338C17.5939 15.804 18.0721 15.7868 18.53 15.884L22.18 16.754C22.6581 16.8531 23.0914 17.1111 23.4007 17.4831C23.71 17.8551 23.8778 18.3188 23.8778 18.7963C23.8778 19.2737 23.71 19.7374 23.4007 20.1094C23.0914 20.4814 22.6581 20.7394 22.18 20.8385L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3>Phone</h3>
                    <p>Available on request</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contact-form-title">Send us a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.667 5L7.50033 14.1667L3.33366 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="31.416">
                          <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416;0 31.416" repeatCount="indefinite"/>
                          <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416;-31.416" repeatCount="indefinite"/>
                        </circle>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage

