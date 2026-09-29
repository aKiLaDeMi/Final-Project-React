import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ cartCount, onCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">N</span>
          <span>NEXUS</span>
        </Link>

        <button
          className={`mobile-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/builder" onClick={closeMenu}>
            PC Builder
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <button className="cart-button" onClick={onCart}>
            Cart
            <span>{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}