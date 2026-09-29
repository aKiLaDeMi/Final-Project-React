import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo footer-logo">
            <span className="logo-mark">N</span>
            <span>NEXUS</span>
          </Link>

          <p>
            Hardware designed for the next generation of gamers.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/builder">PC Builder</Link>
          <Link to="/about">About</Link>
        </div>

        <div>
          <h4>Categories</h4>
          <span>GPUs</span>
          <span>CPUs</span>
          <span>Peripherals</span>
          <span>Displays</span>
        </div>

        <div>
          <h4>System</h4>
          <span>Privacy</span>
          <span>Warranty</span>
          <span>Support</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 NEXUS SYSTEMS</span>
        <span>ENGINEERED FOR PERFORMANCE</span>
      </div>
    </footer>
  );
}