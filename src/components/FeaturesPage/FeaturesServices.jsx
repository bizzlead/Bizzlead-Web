import './FeaturesServices.css'

const FeaturesServices = () => {
  const services = [
    {
      title: 'Call Tracking',
      description: 'Unlock business growth with real-time outgoing & incoming call tracking. Monitor and analyze every call for actionable insights, streamline operations, and drive performance improvements effortlessly'
    },
    {
      title: 'Auto Dialer',
      description: 'Revolutionize your calling strategy with our autodial features! Turbocharge performance, expand your reach to countless leads, and watch your business grow.'
    },
    {
      title: 'Device Call Recording',
      description: 'Unlock call recording for quality analysis. Refine interactions instantly to ensure top performance and exceptional customer experiences. Transform every call into an opportunity for excellence.'
    },
    {
      title: 'Bulk Lead Transfer',
      description: 'Effortlessly transfer bulk leads with a single click. Streamline your process and assign leads to team members without any hassle, ensuring seamless management and swift follow-ups!'
    },
    {
      title: 'Lead Management',
      description: 'Simplify lead tracking, nurturing, and conversion to guide customers efficiently through the sales funnel. Our CRM streamlines these steps, enhancing sales and customer relationships.'
    },
    {
      title: 'Third-Party Integration',
      description: 'Seamlessly connect with third-party tools to enhance functionality. Integrate external applications for smooth data exchange, automated processes, and improved efficiency.'
    },
    {
      title: 'Follow-Up Reminders',
      description: 'Stay connected with every opportunity with our lead follow-up features. Track, engage, and convert leads seamlessly to ensure no business chance slips through the cracks!'
    },
    {
      title: 'Lead Source Integration',
      description: 'Track and analyze where your leads are coming from, helping you optimize your marketing campaigns and improve lead generation efforts.'
    }
  ]

  return (
    <section className="features-services">
      <div className="features-services-container">
        <div className="features-services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {index === 0 && '📞'}
                {index === 1 && '📱'}
                {index === 2 && '🎙️'}
                {index === 3 && '📋'}
                {index === 4 && '👥'}
                {index === 5 && '🔗'}
                {index === 6 && '⏰'}
                {index === 7 && '📊'}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesServices

