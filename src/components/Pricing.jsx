import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'Quarterly Plan',
      price: '₹399',
      period: '/month/user',
      billing: 'Billed Quarterly',
      description: 'Perfect for teams looking for flexibility',
      popular: false
    },
    {
      name: 'Yearly Plan',
      price: '₹299',
      period: '/month/user',
      billing: 'Billed Yearly',
      description: 'Best value with maximum savings',
      popular: true
    }
  ]

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-tenure-section">
          <h3 className="pricing-tenure-title">Choose Your Tenure</h3>
          
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">Best Value</div>
                )}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  <p className="plan-billing">{plan.billing}</p>
                </div>

                <Link to="/contact" className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
                  Get This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

