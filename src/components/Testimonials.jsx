import { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Sales Director, TechCorp',
      content: 'BizzLead has transformed our sales process. The auto-dialer feature alone has increased our call volume by 300%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager, GrowthHub',
      content: 'The real-time call tracking and lead management features are game-changers. Our team productivity has doubled since we started using BizzLead.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'CEO, StartupXYZ',
      content: 'Best CRM investment we\'ve made. The pricing is unbeatable, and the features are top-notch. Customer support is exceptional!',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Operations Head, SalesForce Pro',
      content: 'BizzLead\'s team performance tracking has helped us identify top performers and improve our overall sales strategy. Amazing tool!',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Customers Say</h2>
          <p className="testimonials-subtitle">
            Join thousands of satisfied customers who have transformed their business with BizzLead
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Previous">
            ‹
          </button>
          
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">{testimonials[currentIndex].name}</div>
                <div className="author-role">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Next">
            ›
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

