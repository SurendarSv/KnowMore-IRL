import { ABOUT_CARDS } from './constants';

export default function AboutSection() {
  return (
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
  );
}