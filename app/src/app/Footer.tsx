import { FOOTER_SECTIONS, SOCIAL_LINKS } from './constants';

export default function Footer() {
  return (
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
  );
}