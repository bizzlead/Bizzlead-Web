import './Strategies.css'
import { FaBrain, FaLink, FaChartLine, FaUsers } from 'react-icons/fa'

const Strategies = () => {
  const strategies = [
    {
      icon: FaBrain,
      title: 'Smartness Inbuilt',
      description: 'Bizzlead believes in working smart and not just hard',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: FaLink,
      title: 'Lead Source Integration',
      description: 'Integrate Leads. From Everywhere.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics',
      description: 'Be the ultimate manager and lead your team to success',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: FaUsers,
      title: 'Enhance Teams Performance',
      description: 'Boost team efficiency and collaboration with powerful tools and insights.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ]

  return (
    <section className="strategies-section">
      <div className="strategies-container">
        <h2 className="strategies-title">
          Strategies that get you on the Path to Success!
        </h2>
        <p className="strategies-subtitle">
          Bizzlead provides a robust Call Tracking CRM suite designed to enhance productivity and streamline operations
        </p>
        
        <div className="strategies-grid">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon
            return (
              <div key={index} className="strategy-card">
                <div className="strategy-icon-wrapper" style={{ background: strategy.gradient }}>
                  <IconComponent className="strategy-icon" />
                </div>
                <h3 className="strategy-card-title">{strategy.title}</h3>
                <p className="strategy-card-description">
                  {strategy.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Strategies

