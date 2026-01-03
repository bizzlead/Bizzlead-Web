import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AboutUsPage.css'

const AboutUsPage = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observerRef.current = observer

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
      elementsToAnimate.forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div className="about-us-page">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-animated-bg">
          <div className="about-gradient-orb about-orb-1"></div>
          <div className="about-gradient-orb about-orb-2"></div>
          <div className="about-gradient-orb about-orb-3"></div>
          <div className="about-geometric-shape about-shape-1"></div>
          <div className="about-geometric-shape about-shape-2"></div>
          <div className="about-geometric-shape about-shape-3"></div>
          <div className="about-floating-dot about-dot-1"></div>
          <div className="about-floating-dot about-dot-2"></div>
          <div className="about-floating-dot about-dot-3"></div>
          <div className="about-rotating-ring about-ring-1"></div>
          <div className="about-rotating-ring about-ring-2"></div>
        </div>

        <div className="about-hero-container">
          <h1 className="about-hero-title">
            Digital Transformation to<br />
            Grow Your Company!
          </h1>
          <p className="about-hero-description">
            At Bizzlead, we deliver a powerful, affordable CRM solution to enhance productivity and drive growth. 
            Our innovative features streamline operations and elevate your business, focusing on both effectiveness and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Brand Management Section */}
      <section className="about-brand-section">
        <div className="about-container">
          <div className="about-brand-content animate-on-scroll">
            <h2 className="about-brand-title">
              Manage Everything for Brand and Trademark!
            </h2>
            <p className="about-brand-text">
              We offer a complete CRM suite with call tracking, lead management, automated reminders, and seamless integrations. 
              Bizzlead's intuitive, scalable platform helps you build strong customer relationships and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section className="about-users-section">
        <div className="about-container">
          <div className="about-users-header animate-on-scroll">
            <h2 className="about-users-title">
              Over 50K+ Users all over<br />
              the world...
            </h2>
          </div>

          <div className="about-features-grid">
            <div className="about-feature-card animate-on-scroll">
              <div className="about-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-feature-title">Innovative Solutions</h3>
              <p className="about-feature-text">
                We leverage the latest technology to provide cutting-edge CRM features that meet the demands of modern businesses.
              </p>
            </div>

            <div className="about-feature-card animate-on-scroll">
              <div className="about-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-feature-title">Affordability</h3>
              <p className="about-feature-text">
                We offer high-quality CRM tools at a price that fits your budget, ensuring you get the best value for your investment.
              </p>
            </div>

            <div className="about-feature-card animate-on-scroll">
              <div className="about-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-feature-title">Customer Focus</h3>
              <p className="about-feature-text">
                Our commitment to customer satisfaction drives everything we do, from product development to support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="about-commitment-section">
        <div className="about-container">
          <div className="about-commitment-header animate-on-scroll">
            <h2 className="about-commitment-title">Our Commitment</h2>
            <p className="about-commitment-subtitle">
              We are dedicated to your success, offering exceptional support, continuous improvement, and a focus on helping you achieve your business goals with our CRM solutions.
            </p>
          </div>

          <div className="about-commitment-grid">
            <div className="about-commitment-item animate-on-scroll">
              <div className="about-commitment-number">1</div>
              <h3 className="about-commitment-item-title">Exceptional Support</h3>
              <p className="about-commitment-item-text">
                We provide dedicated, responsive support to ensure you get the most out of our CRM solutions.
              </p>
            </div>

            <div className="about-commitment-item animate-on-scroll">
              <div className="about-commitment-number">2</div>
              <h3 className="about-commitment-item-title">Continuous Improvement</h3>
              <p className="about-commitment-item-text">
                We regularly update our platform with new features and enhancements based on your feedback.
              </p>
            </div>

            <div className="about-commitment-item animate-on-scroll">
              <div className="about-commitment-number">3</div>
              <h3 className="about-commitment-item-title">Customer Success</h3>
              <p className="about-commitment-item-text">
                Your success is our priority; we work closely with you to help you achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="about-strengths-section">
        <div className="about-container">
          <div className="about-strengths-header animate-on-scroll">
            <h2 className="about-strengths-title">Our Core Strengths!</h2>
            <p className="about-strengths-subtitle">
              Bizzlead delivers a powerful CRM platform with essential tools to enhance customer relationships and drive business growth.
            </p>
          </div>

          <div className="about-strengths-grid">
            <div className="about-strength-card animate-on-scroll">
              <div className="about-strength-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-strength-title">Comprehensive Features</h3>
              <p className="about-strength-text">
                From call tracking and lead management to automated reminders, we offer all the tools you need to streamline operations.
              </p>
            </div>

            <div className="about-strength-card animate-on-scroll">
              <div className="about-strength-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-strength-title">Intuitive and Scalable</h3>
              <p className="about-strength-text">
                Our platform is designed to be user-friendly and adaptable to fit businesses of any size.
              </p>
            </div>

            <div className="about-strength-card animate-on-scroll">
              <div className="about-strength-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="about-strength-title">Growth Focused</h3>
              <p className="about-strength-text">
                We help you boost productivity and drive growth with solutions tailored to your unique business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials-section">
        <div className="about-container">
          <div className="about-testimonials-header animate-on-scroll">
            <h2 className="about-testimonials-title">
              Trusted by Millions<br />
              of Customers.
            </h2>
            <p className="about-testimonials-subtitle">
              Join millions who trust Bizzlead for reliable CRM solutions and outstanding support.<br />
              See why we're the top choice for effective customer management.
            </p>
          </div>

          <div className="about-testimonials-grid">
            <div className="about-testimonial-card animate-on-scroll">
              <div className="about-testimonial-content">
                <p className="about-testimonial-text">
                  "Bizzlead has transformed our sales process. The call tracking and lead management features ensure that no lead slips through the cracks, and the follow-up reminders keep our team on track. We've seen a significant increase in our conversion rates since implementing Bizzlead"
                </p>
              </div>
              <div className="about-testimonial-author">
                <div className="about-testimonial-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="about-testimonial-info">
                  <h4 className="about-testimonial-name">John Smith</h4>
                  <p className="about-testimonial-role">Sales Manager at TechCorp</p>
                </div>
              </div>
            </div>

            <div className="about-testimonial-card animate-on-scroll">
              <div className="about-testimonial-content">
                <p className="about-testimonial-text">
                  "The device call recording feature has been a game-changer for our training and quality assurance processes. Our team can review calls and continuously improve their skills, leading to higher customer satisfaction. Bizzlead's seamless integration with our existing tools has also made our workflow much more efficient."
                </p>
              </div>
              <div className="about-testimonial-author">
                <div className="about-testimonial-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="about-testimonial-info">
                  <h4 className="about-testimonial-name">Sarah Johnson</h4>
                  <p className="about-testimonial-role">Customer Service Director at HealthPlus</p>
                </div>
              </div>
            </div>

            <div className="about-testimonial-card animate-on-scroll">
              <div className="about-testimonial-content">
                <p className="about-testimonial-text">
                  "With Bizzlead's lead source integration, we now have clear insights into the effectiveness of our marketing campaigns. We can track where our leads are coming from and optimize our strategies accordingly. This has resulted in a more efficient allocation of our marketing budget and better lead generation."
                </p>
              </div>
              <div className="about-testimonial-author">
                <div className="about-testimonial-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="about-testimonial-info">
                  <h4 className="about-testimonial-name">Michael Brown</h4>
                  <p className="about-testimonial-role">Marketing Director at FinTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-content animate-on-scroll">
            <h2 className="about-cta-title">
              Ready to Improve your<br />
              customer retention rate?
            </h2>
            <p className="about-cta-text">
              Discover how Bizzlead's advanced CRM features can help you build stronger customer relationships, enhance satisfaction, 
              and keep your clients coming back. Start boosting your retention today!
            </p>
            <Link to="/contact" className="about-cta-button">
              Get started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUsPage

