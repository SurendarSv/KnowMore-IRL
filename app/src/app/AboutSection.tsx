import { ABOUT_CARDS } from './constants';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Everything You Need</span>
          <h2 className="section-title">Crack Your Dream Tech Job</h2>
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
  );
}