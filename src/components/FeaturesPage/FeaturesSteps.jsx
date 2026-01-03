import './FeaturesSteps.css'

const FeaturesSteps = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create your Bizzlead account by filling out a simple registration form. Choose the plan that best fits your needs and start your journey with our powerful CRM solutions.'
    },
    {
      number: '2',
      title: 'Set Up Your CRM',
      description: 'Follow our easy setup guide to configure your CRM system. Customize features, integrate with existing tools, and import your data to get everything ready for smooth operation.'
    },
    {
      number: '3',
      title: 'Start Using Bizzlead',
      description: 'Begin using Bizzlead\'s comprehensive suite of tools to streamline your processes, manage leads, and drive growth. Access our support resources and team for any assistance along the way.'
    }
  ]

  return (
    <section className="features-steps">
      <div className="features-steps-container">
        <div className="features-steps-header">
          <h2 className="features-steps-title">
            Simple Steps to Seamless Success
          </h2>
          <p className="features-steps-subtitle">
            Get started with Bizzlead in three easy steps: sign up, set up your CRM, and start using our tools to streamline your processes and drive growth.
            <br />
            It's quick and straightforward, with support available whenever you need it.
          </p>
        </div>

        <div className="features-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSteps

