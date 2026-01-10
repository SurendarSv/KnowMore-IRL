'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Learning paths - coding is hidden for now (set hidden: true to hide, false to show)
const learningPaths = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Understand how AI actually works — from model inference to deployment pipelines. No hype, just clarity.',
    topics: 'Growing',
    problems: 'Evolving',
    status: '',
    icon: '🧠',
    hidden: false
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Learn how real teams ship software. CI/CD, containers, cloud — the way it works in production.',
    topics: 'Growing',
    problems: 'Evolving',
    status: '',
    icon: '⚙️',
    hidden: false
  },
  {
    id: 'coding',
    title: 'DSA & Coding',
    description: 'Data Structures, Algorithms, and coding patterns — practical problem solving.',
    topics: 'Growing',
    problems: 'Evolving',
    status: '',
    icon: '💻',
    hidden: true // Hidden for now - set to false to show again
  }
];

// Filter to only show visible paths
const visiblePaths = learningPaths.filter(p => !p.hidden);

// Features - what makes KnowMoreIRL different
const features = [
  { icon: '🔍', title: 'Real-World Focus', desc: 'We explain how things work in actual environments — not textbook theory', hidden: false },
  { icon: '🔄', title: 'Always Evolving', desc: 'Content updates with the industry. When tech changes, we change with it', hidden: false },
  { icon: '💻', title: 'Coding Excellence', desc: 'DSA fundamentals for technical interviews', hidden: true },
  { icon: '👥', title: 'Community-Driven', desc: 'Built by engineers, for engineers. Learn in public, grow together', hidden: false }
];

const visibleFeatures = features.filter(f => !f.hidden);

// Stats labels - what we cover
const stats = [
  { number: '', label: 'AI & ML' },
  { number: '', label: 'DevOps' },
  { number: '', label: 'Cloud' },
  { number: '', label: 'System Design' }
];

import { topics, blogPosts, articles } from '../data/content';

const visibleArticles = articles.filter(a => !a.hidden);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setContactForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="site-wrapper">
      {/* Navigation */}
      <nav className="nav-main">
        <div className="container nav-container">
          <div className="nav-brand">
            <svg width="40" height="40" viewBox="0 0 100 100" className="nav-logo">
              <polygon points="20,80 70,30 50,30 50,10" fill={isDarkMode ? "#ffffff" : "#1a1a1a"} />
              <circle cx="75" cy="25" r="12" fill="#f59e42" />
            </svg>
            <div className="brand-text">
              <span className="brand-know">KnowMore</span>
              <span className="brand-irl">IRL</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links">
            <a href="#" className="nav-link">AI/ML</a>
            <a href="#" className="nav-link">DevOps</a>
            {/* <a href="#" className="nav-link">Coding</a> */}{/* Hidden for now */}
            <a href="#" className="nav-link">Articles</a>
            <a href="#" className="nav-link">Community</a>

            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <button className="btn-nav">Join Community</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#" className="mobile-link">AI/ML</a>
            <a href="#" className="mobile-link">DevOps</a>
            {/* <a href="#" className="mobile-link">Coding</a> */}{/* Hidden for now */}
            <a href="#" className="mobile-link">Articles</a>
            <a href="#" className="mobile-link">Community</a>
            <button className="btn-nav btn-block">Join Community</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-badge">
            Learning tech as it actually works
          </div>
          <h1 className="hero-title">
            Learn <span className="text-orange">AI</span>, <span className="text-orange">DevOps</span> &amp; <span className="text-orange">Cloud</span>
          </h1>
          <p className="hero-subtitle">
            Not another course platform. KnowMoreIRL is where engineers learn how technology
            actually works — in real environments, with real context.
          </p>
          <div className="hero-cta">
            <button
              className="btn-primary btn-large"
              onClick={() => document.getElementById('recent-writes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Exploring
            </button>
            <button
              className="btn-outline btn-large"
              onClick={() => document.getElementById('what-we-cover')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See What We Cover
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Numbers hidden for now */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              {/* <div className="stat-number">{stat.number}</div> */}{/* Numbers hidden */}
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why KnowMoreIRL?</h2>
            <p className="section-subtitle">We do things differently. Here's how.</p>
          </div>
          <div className="features-grid">
            {visibleFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Topics</h2>
            <p className="section-subtitle">Pick a domain. Start where you are.</p>
          </div>
          <div className="paths-grid">
            {visiblePaths.map((path) => (
              <div key={path.id} className="path-card">
                <div className="path-header">
                  <span className="path-icon">{path.icon}</span>
                  <span className="path-badge">{path.status}</span>
                </div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <div className="path-meta">
                  <div className="path-stat">✓ {path.topics} Topics Covered</div>
                  <div className="path-stat">📚 {path.problems} Resources</div>
                </div>
                <button className="btn-primary btn-block">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section section-alt" id="what-we-cover">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Cover</h2>
            <p className="section-subtitle">Real topics. Practical depth. Always evolving.</p>
          </div>

          <div className="tabs-container">
            {visiblePaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setActiveTab(path.id)}
                className={`tab-btn ${activeTab === path.id ? 'active' : ''}`}
              >
                {path.title}
              </button>
            ))}
          </div>

          <div className="topics-grid">
            {topics[activeTab].map((topic, idx) => (
              <Link
                href={`/topics?topic=${encodeURIComponent(topic)}`}
                key={idx}
                className="topic-item hover:bg-white/5 transition-colors cursor-pointer block"
              >
                <span className="topic-star">⭐</span>
                <span>{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section">
        <div className="container">
          <div className="community-card">
            <div className="community-icon">👋</div>
            <h2>Learn in Public</h2>
            <p>
              KnowMoreIRL is community-driven. Ask questions, share what you're building,
              and learn from other engineers on the same journey.
            </p>
            <div className="community-cta">
              <button className="btn-dark">Join Discord</button>
              <button className="btn-outline-dark">Follow on X</button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section section-alt" id="recent-writes">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Writes</h2>
            <p className="section-subtitle">Practical takes on real engineering problems</p>
          </div>
          <div className="articles-grid">
            {visibleArticles.map((article, idx) => (
              <Link href={`/blog/${article.id}`} key={idx} className="article-card block hover:transform hover:scale-[1.02] transition-all duration-300 no-underline" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div className="article-header">
                  <span className="article-icon">{article.icon}</span>
                  <span className="article-tag">{article.tag}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{article.title}</h3>
                <div className="article-date">🕐 {article.date}</div>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <button className="btn-primary">Read More</button>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section (everythingdevops.dev style) */}
      <section className="section" id="blog">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Deep Dives</h2>
            <p className="section-subtitle">Long-form guides for when you want the full picture</p>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(p => p.featured).map(post => (
            <div key={post.id} className="blog-featured" style={{ background: post.image }}>
              <div className="blog-featured-overlay">
                <span className="blog-category-pill">{post.category}</span>
                <h2 className="blog-featured-title">{post.title}</h2>
                <p className="blog-featured-excerpt">{post.excerpt}</p>
                <div className="blog-featured-meta">
                  <div className="blog-author">
                    <span className="blog-author-avatar">{post.author.avatar}</span>
                    <span className="blog-author-name">{post.author.name}</span>
                  </div>
                  <span className="blog-meta-divider">•</span>
                  <span>{post.date}</span>
                  <span className="blog-meta-divider">•</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="btn-primary">Read More →</button>
              </div>
            </div>
          ))}

          {/* Regular Blog Cards */}
          <div className="blog-cards-grid">
            {blogPosts.filter(p => !p.featured).map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-image" style={{ background: post.image }}></div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-author-small">
                      <span className="blog-author-avatar-small">{post.author.avatar}</span>
                      <div>
                        <span className="blog-author-name-small">{post.author.name}</span>
                        <span className="blog-post-date">{post.date}</span>
                      </div>
                    </div>
                    <span className="blog-category-tag">{post.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section (everythingdevops.dev style) */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Say Hello</h2>
            <p className="section-subtitle">Got feedback, a question, or just want to connect?</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info-card">
              <h3>Reach Out</h3>
              <p>We read every message. Whether it's a content suggestion, a bug report, or just a hello — we're listening.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hello@knowmoreirl.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <span className="contact-label">Discord</span>
                    <span className="contact-value">Join our community</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📬</span>
                  <div>
                    <span className="contact-label">X (Twitter)</span>
                    <span className="contact-value">@knowmoreirl</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    value={contactForm.firstName}
                    onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    value={contactForm.lastName}
                    onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="content">Content Suggestion</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Please type your message here..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary btn-block btn-large">
                {formSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-brand">
                <svg width="32" height="32" viewBox="0 0 100 100">
                  <polygon points="20,80 70,30 50,30 50,10" fill={isDarkMode ? "#ffffff" : "#1a1a1a"} />
                  <circle cx="75" cy="25" r="12" fill="#f59e42" />
                </svg>
                <div className="brand-text">
                  <span className="brand-know">KnowMore</span>
                  <span className="brand-irl">IRL</span>
                </div>
              </div>
              <p className="footer-tagline">Technology as it actually works</p>
              <p className="footer-domains">AI • DevOps • Cloud • System Design</p>
              <p className="footer-free">Community-driven learning</p>
            </div>
            <div className="footer-links">
              <h4>Topics</h4>
              <ul>
                <li><a href="#">AI & Machine Learning</a></li>
                <li><a href="#">DevOps & Cloud</a></li>
                {/* <li><a href="#">DSA & Coding</a></li> */}{/* Hidden for now */}
                <li><a href="#">System Design</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Content</h4>
              <ul>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Deep Dives</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 KnowMoreIRL. Built by engineers, for engineers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}