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
          <div className="hero-badge">🚀 Your One-Stop Learning Platform</div>
          <h1 className="hero-title">
            Master <span className="gradient-text">TECH Interviews</span>
          </h1>
          <p className="hero-subtitle">
            Learn DSA, System Design, and Core CS Subjects with personalized roadmaps,
            expert videos, and practice built for results.
          </p>
          <div className="hero-cta">
            <button className="btn-primary btn-large">Start Learning Free</button>
            <button className="btn-secondary btn-large">Explore Plus</button>
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