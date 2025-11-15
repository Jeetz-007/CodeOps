import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      
      {/* BRAND */}
      <div className="footer-brand">
        <h2>CodeOps</h2>
        <p>Empowering Devs. Accelerating Businesses.</p>
      </div>

      {/* NAV LINKS */}
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        © {new Date().getFullYear()} CodeOps. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;

