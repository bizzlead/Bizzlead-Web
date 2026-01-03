import './Features.css'

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          Streamline, Grow, Succeed with Bizzlead!
        </h2>
        <p className="features-subtitle">
          Explore Bizzlead's call tracking CRM tools designed to enhance productivity and drive growth.
          <br />
          our solutions are tailored to meet your business needs.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="feature-card-title">Cost Effective</h3>
            <p className="feature-card-description">
              Maximize your budget with affordable, high-quality CRM solutions. Achieve more for less.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3 className="feature-card-title">User Friendly</h3>
            <p className="feature-card-description">
              Intuitive design for easy navigation and use. Get started quickly without hassle.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-card-title">Real-Time Monitoring</h3>
            <p className="feature-card-description">
              Monitor activities and performance live. Make informed decisions instantly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-card-title">Sim Level Calling</h3>
            <p className="feature-card-description">
              Make calls directly from your device. Enjoy seamless, high-quality connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

