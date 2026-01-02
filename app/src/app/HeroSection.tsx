import { HERO_STATS } from './constants';

export default function HeroSection() {
  return (
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
  );
}