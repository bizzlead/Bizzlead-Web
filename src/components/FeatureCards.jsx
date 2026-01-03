import './FeatureCards.css'
import { FaPhoneAlt, FaPhoneVolume, FaUsers, FaBell, FaExchangeAlt, FaPlug } from 'react-icons/fa'
import { MdPhoneCallback, MdGroups, MdNotificationsActive, MdSwapHoriz, MdExtension } from 'react-icons/md'
import { HiPhone, HiUserGroup, HiBell, HiSwitchHorizontal, HiPuzzle } from 'react-icons/hi'

const FeatureCards = () => {
  const features = [
    {
      title: 'Call Tracking',
      description: 'Unlock growth with real-time call tracking. Monitor and analyze every call for actionable insights, streamline operations, and drive performance improvements effortlessly.',
      icon: FaPhoneAlt,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Auto Dialer',
      description: 'Revolutionize your calling strategy with our autodial features! Turbocharge performance, expand your reach to countless leads, and watch your business grow.',
      icon: FaPhoneVolume,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Team Performance',
      description: 'Unlock your team\'s full potential with LIVE performance tracking! Boost productivity, sharpen strategies, and analyze sales growth on the fly for dynamic results.',
      icon: FaUsers,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Follow-Up Reminders',
      description: 'Stay connected with every opportunity with our lead follow-up features. Track, engage, and convert leads seamlessly to ensure no business chance slips through the cracks!',
      icon: FaBell,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Bulk Lead Transfer',
      description: 'Effortlessly transfer bulk leads with a single click. Streamline your process and assign leads to team members without any hassle, ensuring seamless management and swift follow-ups!',
      icon: FaExchangeAlt,
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      title: 'Third-Party Integration',
      description: 'Seamlessly connect with third-party tools to enhance functionality. Integrate external applications for smooth data exchange, automated processes, and improved efficiency.',
      icon: FaPlug,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ]

  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        <h2 className="feature-cards-title">
          Integrate Leads From Everywhere
        </h2>
        
        <div className="feature-cards-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="feature-card-item">
                <div className="feature-card-icon-wrapper" style={{ background: feature.gradient }}>
                  <IconComponent className="feature-card-icon" />
                </div>
                <h3 className="feature-card-item-title">{feature.title}</h3>
                <p className="feature-card-item-description">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards

