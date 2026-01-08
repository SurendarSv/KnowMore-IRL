'use client';

import { useState, useEffect } from 'react';

const learningPaths = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Master AI/ML concepts with real-world implementations and latest frameworks',
    topics: 120,
    problems: '300+',
    status: 'Free',
    icon: '🧠'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Learn DevOps practices, CI/CD, Docker, Kubernetes, and cloud technologies',
    topics: 95,
    problems: '200+',
    status: 'Free',
    icon: '⚙️'
  },
  {
    id: 'coding',
    title: 'DSA & Coding',
    description: 'Data Structures, Algorithms, and coding patterns for interviews',
    topics: 180,
    problems: '500+',
    status: 'Free',
    icon: '💻'
  }
];

const features = [
  { icon: '🧠', title: 'AI/ML Focus', desc: 'Latest AI tools, frameworks & real implementations' },
  { icon: '⚙️', title: 'DevOps Mastery', desc: 'CI/CD, containerization & cloud infrastructure' },
  { icon: '💻', title: 'Coding Excellence', desc: 'DSA fundamentals for technical interviews' },
  { icon: '📈', title: 'Industry Updates', desc: 'Real-time tech trends and best practices' }
];

const stats = [
  { number: '100%', label: 'Free Content' },
  { number: '1000+', label: 'Practice Resources' },
  { number: '50+', label: 'Tech Articles' },
  { number: '3', label: 'Core Domains' }
];

const topics: Record<string, string[]> = {
  ai: [
    'Machine Learning Fundamentals', 'Deep Learning & Neural Networks', 'Natural Language Processing',
    'Computer Vision', 'LangChain & LLM Integration', 'OpenAI API & GPT Models',
    'Model Training & Fine-tuning', 'ML Deployment & MLOps', 'TensorFlow & PyTorch',
    'Transformers & BERT', 'RAG Systems', 'AI Ethics & Bias'
  ],
  devops: [
    'Git & Version Control', 'Docker & Containerization', 'Kubernetes Orchestration',
    'CI/CD Pipelines', 'Jenkins & GitHub Actions', 'AWS Cloud Services',
    'Azure & GCP Basics', 'Infrastructure as Code', 'Terraform & Ansible',
    'Monitoring & Logging', 'Linux System Administration', 'Security Best Practices'
  ],
  coding: [
    'Arrays & Strings', 'Linked Lists', 'Stacks & Queues',
    'Trees & Graphs', 'Dynamic Programming', 'Greedy Algorithms',
    'Binary Search', 'Sliding Window', 'Two Pointers',
    'Backtracking', 'Bit Manipulation', 'System Design Basics'
  ]
};

const articles = [
  { title: 'Getting Started with LangChain & RAG Systems', date: 'Jan 5, 2026', tag: 'AI/ML', icon: '🧠' },
  { title: 'Kubernetes Best Practices for Production', date: 'Jan 3, 2026', tag: 'DevOps', icon: '⚙️' },
  { title: 'Mastering Dynamic Programming Patterns', date: 'Dec 28, 2025', tag: 'Coding', icon: '💻' }
];

// Enhanced Blog Posts (everythingdevops.dev style)
const blogPosts = [
  {
    id: 1,
    featured: true,
    title: 'Complete Guide to Building Production-Ready ML Pipelines',
    excerpt: 'Learn how to design, implement, and deploy machine learning pipelines that scale. From data ingestion to model serving, we cover everything you need to know.',
    category: 'AI/ML',
    author: { name: 'Surendar SV', avatar: '👨‍💻' },
    date: 'Jan 8, 2026',
    readTime: '12 min read',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    featured: false,
    title: 'Docker to Kubernetes: A Practical Migration Guide',
    excerpt: 'Step-by-step guide to containerizing your applications and deploying them on Kubernetes clusters.',
    category: 'DevOps',
    author: { name: 'Surendar SV', avatar: '👨‍💻' },
    date: 'Jan 6, 2026',
    readTime: '8 min read',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    featured: false,
    title: 'Advanced Terraform Patterns for Enterprise',
    excerpt: 'Master Infrastructure as Code with advanced Terraform modules, workspaces, and state management.',
    category: 'DevOps',
    author: { name: 'Surendar SV', avatar: '👨‍💻' },
    date: 'Jan 4, 2026',
    readTime: '10 min read',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    featured: false,
    title: 'Building RAG Systems with LangChain',
    excerpt: 'Create powerful retrieval-augmented generation applications using LangChain and vector databases.',
    category: 'AI/ML',
    author: { name: 'Surendar SV', avatar: '👨‍💻' },
    date: 'Jan 2, 2026',
    readTime: '15 min read',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
];

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
            <a href="#" className="nav-link">Coding</a>
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
            <a href="#" className="mobile-link">Coding</a>
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
            🤖 AI • ⚙️ DevOps • 💻 Coding - All Free Forever
          </div>
          <h1 className="hero-title">
            Master <span className="text-orange">AI</span>, <span className="text-orange">DevOps</span><br />
            & Coding
          </h1>
          <p className="hero-subtitle">
            Free learning resources focused on AI/ML, DevOps practices, and coding fundamentals.
            Stay updated with real-time tech trends and build practical skills.
          </p>
          <div className="hero-cta">
            <button className="btn-primary btn-large">Start Learning (Free)</button>
            <button className="btn-outline btn-large">Explore Resources</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Focus</h2>
            <p className="section-subtitle">Three domains that matter in modern tech</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
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
            <h2 className="section-title">Choose Your Learning Path</h2>
            <p className="section-subtitle">All content is free and community-driven</p>
          </div>
          <div className="paths-grid">
            {learningPaths.map((path) => (
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
                  Start Learning →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What You&apos;ll Learn</h2>
            <p className="section-subtitle">Comprehensive coverage across AI, DevOps, and Coding</p>
          </div>

          <div className="tabs-container">
            {learningPaths.map((path) => (
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
              <div key={idx} className="topic-item">
                <span className="topic-star">⭐</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section">
        <div className="container">
          <div className="community-card">
            <div className="community-icon">👥</div>
            <h2>Join Our Learning Community</h2>
            <p>
              Connect with AI enthusiasts, DevOps engineers, and developers.
              Share knowledge, discuss real-world implementations, and grow together.
            </p>
            <div className="community-cta">
              <button className="btn-dark">Join Discord Community</button>
              <button className="btn-outline-dark">Follow on Twitter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Tech Updates & Articles</h2>
            <p className="section-subtitle">Stay ahead with real-time AI, DevOps & Coding insights</p>
          </div>
          <div className="articles-grid">
            {articles.map((article, idx) => (
              <div key={idx} className="article-card">
                <div className="article-header">
                  <span className="article-icon">{article.icon}</span>
                  <span className="article-tag">{article.tag}</span>
                </div>
                <h3>{article.title}</h3>
                <div className="article-date">🕐 {article.date}</div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <button className="btn-primary">View All Articles</button>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section (everythingdevops.dev style) */}
      <section className="section" id="blog">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From The Blog</h2>
            <p className="section-subtitle">In-depth tutorials, guides, and industry insights</p>
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
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have questions or want to collaborate? We&apos;d love to hear from you</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info-card">
              <h3>Let&apos;s Connect</h3>
              <p>Whether you have a question about our content, want to suggest a topic, or are interested in collaborating, we&apos;re here to help.</p>

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
                  <span className="contact-icon">🐦</span>
                  <div>
                    <span className="contact-label">Twitter</span>
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
              <p className="footer-tagline">Learning That Works IRL</p>
              <p className="footer-domains">AI • DevOps • Coding</p>
              <p className="footer-free">100% Free Forever</p>
            </div>
            <div className="footer-links">
              <h4>Learning Paths</h4>
              <ul>
                <li><a href="#">AI & Machine Learning</a></li>
                <li><a href="#">DevOps & Cloud</a></li>
                <li><a href="#">DSA & Coding</a></li>
                <li><a href="#">Practice Problems</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Tech Articles</a></li>
                <li><a href="#">Real-World Projects</a></li>
                <li><a href="#">Interview Prep</a></li>
                <li><a href="#">Community Forum</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Discord Community</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 KnowMoreIRL. Focused on AI, DevOps & Coding. All content is free.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}