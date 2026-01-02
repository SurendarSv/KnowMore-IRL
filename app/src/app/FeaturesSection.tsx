import { FEATURES } from './constants';

export default function FeaturesSection() {
  return (
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
  );
}