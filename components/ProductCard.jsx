export default function ProductCard({ product, onAdd }) {
  return (
    <article
      className="product-card reveal"
      style={{ "--accent": product.accent }}
    >
      <div className="product-image">
        <div className="product-glow" />

        <div className="hardware-shape">
          <span>{product.category}</span>
        </div>

        <div className="badge">{product.badge}</div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="spec-list">
          {product.specs.map((spec) => (
            <span key={spec}>{spec}</span>
          ))}
        </div>

        <div className="product-bottom">
          <strong>€{product.price.toLocaleString()}</strong>

          <button onClick={() => onAdd(product)} className="add-button">
            Add +
          </button>
        </div>
      </div>
    </article>
  );
}