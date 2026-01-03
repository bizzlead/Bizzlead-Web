import Header from '../components/Header'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import './PlansPricingPage.css'

const PlansPricingPage = () => {
  return (
    <div className="plans-pricing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-animated-bg">
          <div className="pricing-gradient-orb pricing-orb-1"></div>
          <div className="pricing-gradient-orb pricing-orb-2"></div>
          <div className="pricing-gradient-orb pricing-orb-3"></div>
          <div className="pricing-geometric-shape pricing-shape-1"></div>
          <div className="pricing-geometric-shape pricing-shape-2"></div>
          <div className="pricing-geometric-shape pricing-shape-3"></div>
          <div className="pricing-floating-dot pricing-dot-1"></div>
          <div className="pricing-floating-dot pricing-dot-2"></div>
          <div className="pricing-floating-dot pricing-dot-3"></div>
          <div className="pricing-rotating-ring pricing-ring-1"></div>
          <div className="pricing-rotating-ring pricing-ring-2"></div>
        </div>

        <div className="pricing-hero-container">
          <h1 className="pricing-hero-title">
            Simple Affordable<br />
            Pricing Plans!
          </h1>
          <p className="pricing-hero-description">
            Explore our flexible pricing options designed to fit any business size and budget. 
            Choose the plan that best meets your needs and start benefiting from Bizzlead's powerful CRM features today.
          </p>
        </div>
      </section>

      <Pricing />
      <Footer />
    </div>
  )
}

export default PlansPricingPage

