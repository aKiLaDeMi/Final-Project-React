import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products({ onAdd }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="page">
      <div className="container">
        <div className="page-heading reveal">
          <span className="section-label">NEXUS / HARDWARE</span>
          <h1>THE COLLECTION.</h1>
          <p>
            Explore the hardware that powers the NEXUS ecosystem.
          </p>
        </div>

        <div className="catalog-controls reveal">
          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hardware..."
            />
          </div>
        </div>

        <div className="product-grid catalog-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <span>NO RESULTS</span>
            <h2>Nothing found.</h2>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </main>
  );
}