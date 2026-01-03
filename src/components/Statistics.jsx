import './Statistics.css'

const Statistics = () => {
  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '50K+', label: 'Leads Managed' },
    { number: '99%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics

