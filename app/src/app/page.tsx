import ClientScript from './ClientScript';
import {
  HERO_STATS,
  ABOUT_CARDS,
  FEATURES,
  COURSES,
  CONTACT_ITEMS,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from './constants';

export default function Home() {
  return (
    <>
      <ClientScript />
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="logo.png" alt="KnowMoreIRL Logo" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn-primary">Get Started</button>
          <button className="mobile-menu-toggle" id="mobileMenuToggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content reveal">
            <div className="hero-badge">🚀 Welcome to the Future of Learning</div>
            <h1 className="hero-title">
              Learn. Grow. <span className="gradient-text">Innovate.</span>
            </h1>
            <p className="hero-subtitle">
              Unlock your potential with cutting-edge courses, hands-on projects, and a community that empowers
              you to turn errors into expertise.
            </p>
            <div className="hero-cta">
              <button className="btn-primary btn-large">Start Learning</button>
              <button className="btn-secondary btn-large">Explore Courses</button>
            </div>
            <div className="hero-stats">
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Transforming Learning Into Mastery</h2>
            <p className="section-subtitle">
              We believe that every mistake is a stepping stone to success. Our platform is designed to help you
              learn from errors and grow into an expert.
            </p>
          </div>
          <div className="about-content">
            {ABOUT_CARDS.map((card, index) => (
              <div key={index} className="about-card reveal">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Premium Learning Features</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((feature, index) => (
              <div key={index} className="feature-card reveal">
                <div className="feature-visual">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Popular Courses</span>
            <h2 className="section-title">Start Your Journey Today</h2>
          </div>
          <div className="courses-grid">
            {COURSES.map((course, index) => (
              <div key={index} className="course-card reveal">
                <div className="course-image" style={{ background: course.image }}>
                  <span className="course-badge">{course.badge}</span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="course-duration">{course.duration}</span>
                    <span className="course-level">{course.level}</span>
                  </div>
                  <button className="btn-course">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to Transform Your Future?</h2>
            <p>Join thousands of learners who have already started their journey to success.</p>
            <button className="btn-primary btn-large">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Connect</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Have Questions?</h3>
              <p>We're here to help! Reach out to us and we'll get back to you as soon as possible.</p>
              <div className="contact-details">
                {CONTACT_ITEMS.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="contact-form reveal">
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">Know<span className="highlight">More</span>IRL</h3>
              <p>Learning That Works IRL - Empowering learners worldwide to turn mistakes into mastery.</p>
              <div className="social-links">
                {SOCIAL_LINKS.map((link, index) => (
                  <a key={index} href="#" className="social-link">{link}</a>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                {FOOTER_SECTIONS.quickLinks.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                {FOOTER_SECTIONS.resources.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                {FOOTER_SECTIONS.legal.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 KnowMoreIRL. All rights reserved. Built with ❤️ for learners.</p>
          </div>
        </div>
      </footer>
    </>
  );
}