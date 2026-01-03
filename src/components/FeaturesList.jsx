import './FeaturesList.css'

const FeaturesList = () => {
  return (
    <section className="features-list-section">
      <div className="features-list-container">
        <h2 className="features-list-title">
          Unlock Potential with Our Powerful Call Tracking CRM Features!
        </h2>
        <p className="features-list-subtitle">
          Experience a robust CRM solution that combines advanced features with high productivity at a price that won't break the bank.
        </p>
        
        <div className="features-list-grid">
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Streamline your workflow with effortless Auto Dialing</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Seamless Lead Management for efficient tracking and nurturing.</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Automated reminders to keep you on schedule.</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Track and analyze lead sources for better marketing.</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Expert support to assist you with any issues or questions.</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span>
            <span>Set up your CRM effortlessly and quickly</span>
          </div>
        </div>

        <button className="features-list-button">
          Get in Touch
        </button>
      </div>
    </section>
  )
}

export default FeaturesList

