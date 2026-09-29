import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import BuildPC from "./pages/BuildPC";
import About from "./pages/About";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCart((current) => [...current, product]);

    setToast(`${product.name} added to cart`);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const removeFromCart = (index) => {
    setCart((current) => current.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <BrowserRouter>
      <div className="cursor-dot" />
      <div className="cursor-ring" />

      <Navbar
        cartCount={cart.length}
        onCart={() => setCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route
          path="/products"
          element={<Products onAdd={addToCart} />}
        />
        <Route
          path="/builder"
          element={<BuildPC onAdd={addToCart} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div>
            <span className="section-label">NEXUS / CART</span>
            <h2>Your setup.</h2>
          </div>

          <button onClick={() => setCartOpen(false)}>×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span>◌</span>
              <h3>Your cart is empty.</h3>
              <p>Add some hardware to get started.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                <div>
                  <span>{item.category}</span>
                  <strong>{item.name}</strong>
                </div>

                <div>
                  <strong>€{item.price.toLocaleString()}</strong>
                  <button onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div>
            <span>TOTAL</span>
            <strong>€{total.toLocaleString()}</strong>
          </div>

          <button
            className="btn btn-primary full"
            disabled={cart.length === 0}
          >
            Continue
          </button>
        </div>
      </div>

      {cartOpen && (
        <button
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
          aria-label="Close cart"
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </BrowserRouter>
  );
}