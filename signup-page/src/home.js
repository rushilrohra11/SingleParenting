import React, { useEffect } from 'react';
import '../src/styles/home.css';
import logo from './logo1-removebg-preview.png';

const Home = () => {
  useEffect(() => {
    // Create floating shapes
    const createShapes = () => {
      const shapesContainer = document.querySelector('.floating-shapes');
      if (!shapesContainer) return;
      
      shapesContainer.innerHTML = '';
      const numberOfShapes = 5;

      for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        
        const size = Math.random() * 150 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 20}s`;
        
        shapesContainer.appendChild(shape);
      }
    };

    // Animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .testimonial-card, .event-card, .resource-card')
      .forEach(card => observer.observe(card));

    createShapes();

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    e.target.reset();
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src={logo} alt="ParentPlus Logo" className="logo-img" />
            <span>ParentPlus</span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
            <a href="/signup">SignUp</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="floating-shapes"></div>
        <div className="hero-content">
          <h1>Supporting Single Parents Every Step of the Way</h1>
          <p>Join our community of strong, resilient parents. Find resources, support, and connection with others who understand your journey.</p>
          <a href="#join" className="cta-button">Join Our Community</a>
        </div>
      </section>

      <section className="features">
        <div className="section-container">
          <h2>Our Features</h2>
          <div className="features-grid">
            {[
              {
                title: "24/7 Support",
                desc: "Access our community forums and chat with other parents anytime, anywhere."
              },
              {
                title: "Resource Library",
                desc: "Comprehensive guides on parenting, financial planning, work-life balance."
              },
              {
                title: "Local Meetups",
                desc: "Connect with other single parents in your area."
              },
              {
                title: "Expert Advice",
                desc: "Regular webinars with parenting experts and counselors."
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-container">
          <h2>Stories from Our Community</h2>
          <div className="testimonials-grid">
            {[
              {
                quote: "This community has been my rock during tough times.",
                name: "Sarah M.",
                role: "Mother of 2"
              },
              {
                quote: "The financial planning workshops changed how I manage my money.",
                name: "David K.",
                role: "Father of 1"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote">"{testimonial.quote}"</div>
                <div className="author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="upcoming-events" id="events">
        <div className="section-container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {[
              {
                day: "15",
                month: "MAR",
                title: "Parenting Workshop",
                desc: "Managing Work-Life Balance",
                time: "2:00 PM EST",
                location: "Online"
              },
              {
                day: "22",
                month: "MAR",
                title: "Community Meetup",
                desc: "Family Park Day",
                time: "10:00 AM EST",
                location: "Central Park"
              }
            ].map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <div className="event-meta">
                    <span>🕒 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="section-container">
          <h2>Essential Resources</h2>
          <div className="resources-grid">
            {[
              {
                icon: "📚",
                title: "Parenting Guides",
                items: [
                  "Age-specific parenting tips",
                  "Educational resources",
                  "Behavioral management"
                ]
              },
              {
                icon: "💰",
                title: "Financial Support",
                items: [
                  "Budgeting templates",
                  "Government assistance",
                  "Scholarship programs"
                ]
              },
              {
                icon: "❤️",
                title: "Emotional Support",
                items: [
                  "24/7 helpline",
                  "Support groups",
                  "Professional counseling"
                ]
              }
            ].map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <ul>
                  {resource.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="section-container">
          <div className="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Join our newsletter to receive updates, resources, and event invitations.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>ParentPlus</h3>
              <p>Supporting single parents in their journey to create happy, healthy families.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul>
                <li>📧 support@parentplus.com</li>
                <li>📞 1-800-PARENT-1</li>
                <li>💬 24/7 Chat Support</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ParentPlus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;