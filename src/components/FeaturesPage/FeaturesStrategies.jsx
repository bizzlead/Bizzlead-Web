import './FeaturesStrategies.css'

const FeaturesStrategies = () => {
  const strategies = [
    {
      icon: '⚡',
      title: 'Optimize Operations',
      description: 'Leverage our tools to streamline your workflows and increase efficiency.'
    },
    {
      icon: '🤝',
      title: 'Enhance Customer Relationships',
      description: 'Use our CRM features to build stronger, more meaningful connections with your clients.'
    },
    {
      icon: '📈',
      title: 'Drive Growth',
      description: 'Implement data-driven strategies and insights to fuel your business expansion and success.'
    }
  ]

  return (
    <section className="features-strategies">
      <div className="features-strategies-container">
        <div className="features-strategies-header">
          <h2 className="features-strategies-title">
            Strategies that get you on the Path to Success!
          </h2>
          <p className="features-strategies-subtitle">
            Implement Bizzlead's strategies to streamline operations, enhance customer relationships, and drive growth, putting you on the fast track to achieving your business goals.
          </p>
        </div>

        <div className="features-strategies-grid">
          {strategies.map((strategy, index) => (
            <div key={index} className="strategy-card-item">
              <div className="strategy-icon-large">{strategy.icon}</div>
              <h3 className="strategy-card-title">{strategy.title}</h3>
              <p className="strategy-card-text">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesStrategies

