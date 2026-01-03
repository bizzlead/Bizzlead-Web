import { useState } from 'react'
import './FeaturedTabs.css'
import dashboardScreenshot from '../assets/Screenshot/Dashboard.png'
import calllogsScreenshot from '../assets/Screenshot/Calllogs page.png'
import leadPageScreenshot from '../assets/Screenshot/Lead page.png'
import performanceScreenshot from '../assets/Screenshot/Performance.png'
import customerDetailsScreenshot from '../assets/Screenshot/Customer Details.png'

const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Real-Time Dashboard',
      description: 'Monitor your sales performance, track leads, and analyze team productivity with our comprehensive dashboard.',
      screenshot: dashboardScreenshot,
      features: [
        'Live call tracking and analytics',
        'Team performance metrics',
        'Lead conversion insights',
        'Real-time activity monitoring'
      ]
    },
    {
      id: 'calls',
      label: 'Call Tracking',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Advanced Call Tracking',
      description: 'Track every call with detailed analytics, call recording, and intelligent lead management.',
      screenshot: calllogsScreenshot,
      features: [
        'Automatic call logging',
        'Call recording and playback',
        'Call source tracking',
        'Call analytics and reports'
      ]
    },
    {
      id: 'leads',
      label: 'Lead Management',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Smart Lead Management',
      description: 'Manage your leads efficiently with automated workflows, follow-up reminders, and lead scoring.',
      screenshot: leadPageScreenshot,
      features: [
        'Lead capture and organization',
        'Automated follow-up reminders',
        'Lead scoring and prioritization',
        'Bulk lead operations'
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 7l-5 5-4-4-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Powerful Analytics',
      description: 'Get deep insights into your sales performance with comprehensive reports and data visualization.',
      screenshot: performanceScreenshot,
      features: [
        'Sales performance reports',
        'Conversion rate analysis',
        'Team productivity metrics',
        'Customizable dashboards'
      ]
    },
    {
      id: 'integrations',
      label: 'Customer Details',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Customer Management',
      description: 'View and manage detailed customer information, interaction history, and relationship insights.',
      screenshot: customerDetailsScreenshot,
      features: [
        'Complete customer profiles',
        'Interaction history tracking',
        'Customer relationship insights',
        'Detailed contact information'
      ]
    }
  ]

  return (
    <section className="featured-tabs-section" id="features-tabs">
      <div className="featured-tabs-container">
        <div className="featured-tabs-header">
          <h2 className="featured-tabs-title">
            Explore Bizzlead Features
          </h2>
          <p className="featured-tabs-subtitle">
            Discover how our powerful CRM solution can transform your sales process and drive growth.
          </p>
        </div>

        <div className="featured-tabs-wrapper">
          <div className="featured-tabs-nav">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`featured-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
              >
                <span className="featured-tab-icon">{tab.icon}</span>
                <span className="featured-tab-label">{tab.label}</span>
                {activeTab === index && (
                  <span className="featured-tab-indicator"></span>
                )}
              </button>
            ))}
          </div>

          <div className="featured-tabs-content">
            <div className="featured-tab-panel" key={activeTab}>
              <div className="featured-tab-info">
                <h3 className="featured-tab-title">{tabs[activeTab].title}</h3>
                <p className="featured-tab-description">{tabs[activeTab].description}</p>
                
                <ul className="featured-tab-features">
                  {tabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="featured-tab-feature-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="featured-tab-screenshot">
                <div className="screenshot-wrapper">
                  <img 
                    src={tabs[activeTab].screenshot} 
                    alt={tabs[activeTab].title}
                    className="screenshot-image"
                    key={activeTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTabs

