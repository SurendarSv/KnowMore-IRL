export default function Navigation() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/favicon.png" alt="Favicon" className="favicon-image" />
          <span className="logo-text">Know<span className="highlight">More</span>IRL</span>
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
  );
}