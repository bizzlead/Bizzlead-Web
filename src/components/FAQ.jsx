import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How can Bizzlead help improve my team's productivity?",
      answer: "Bizzlead includes tools like the auto dialer to automate dialing, bulk lead transfer for efficient lead distribution, and follow-up reminders to keep your team on track. These features help your team focus on engaging with customers and closing deals, rather than getting bogged down by administrative tasks."
    },
    {
      question: "Can I integrate Bizzlead with my existing software?",
      answer: "Yes, Bizzlead supports a wide range of third-party integrations, allowing you to seamlessly connect it with your existing tools and platforms. This ensures a smooth workflow and helps you leverage the full power of your software ecosystem."
    },
    {
      question: "How does the lead source integration feature benefit my marketing efforts?",
      answer: "Bizzlead's lead source integration provides valuable insights into where your leads are coming from, allowing you to track the effectiveness of your marketing campaigns. This helps you optimize your strategies, allocate resources more efficiently, and ultimately improve your lead generation efforts."
    },
    {
      question: "Can data upload manually in Bizzlead?",
      answer: "Yes, you can upload data manually. You need to visit our official web portal ( https://app.bizzlead.in ) and get logged-in. Under Leads Page, you will get an option called Upload to upload the data."
    },
    {
      question: "Is customization of CRM possible in BizzLead?",
      answer: "Yes, BizzLead CRM offers customization for its users."
    },
    {
      question: "How does Bizzlead Provide Customer Support?",
      answer: "For support, you can contact Bizzlead via email : support@bizzlead.in"
    },
    {
      question: "Is Bizzlead equipped with auto-dial support?",
      answer: "Yes, Bizzlead includes robust auto-dialer support. Our auto-dialer feature automates the dialing process, allowing your team to save time and focus on engaging with customers. This tool enhances efficiency and helps manage high call volumes seamlessly."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Help and FAQ's</h2>
        <p className="faq-subtitle">
          Our success in creating business solutions is due in large part spacially
          <br />
          to talented and highly committed team.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta-title">Engage your customers instantly.</h3>
          <h2 className="faq-cta-heading">
            Ready to Improve your
            <br />
            Business Growth?
          </h2>
          <p className="faq-cta-text">
            Discover how Bizzlead's advanced call tracking CRM features can help you build stronger customer relationships, enhance satisfaction,
            <br />
            and keep your clients coming back. Start boosting your retention today!
          </p>
          <Link to="/contact" className="faq-cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQ

