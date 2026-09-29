import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ onAdd }) {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="section-label">01 / FEATURED</span>
              <h2>Built to dominate.</h2>
            </div>

            <Link to="/products" className="text-link">
              View all hardware →
            </Link>
          </div>

          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="container manifesto-inner">
          <span className="section-label">02 / THE NEXUS STANDARD</span>

          <h2>
            WE DON'T BUILD
            <br />
            <span>ORDINARY.</span>
          </h2>

          <p>
            Every component is selected around one idea: remove the limits
            between you and the game.
          </p>
        </div>
      </section>

      <section className="section performance">
        <div className="container">
          <div className="performance-card">
            <div>
              <span className="section-label">03 / PERFORMANCE</span>
              <h2>One system.<br />Zero compromises.</h2>
              <p>
                High-speed memory, powerful graphics and responsive displays
                come together in one ecosystem.
              </p>
            </div>

            <div className="performance-ring">
              <div>
                <strong>99</strong>
                <span>FPS INDEX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}