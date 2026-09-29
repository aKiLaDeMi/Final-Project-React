import { useMemo, useState } from "react";
import { builderParts } from "../data/products";

export default function BuildPC({ onAdd }) {
  const [selected, setSelected] = useState({
    cpu: 1,
    gpu: 1,
    ram: 0,
    storage: 0,
    cooling: 2,
  });

  const total = useMemo(() => {
    return Object.entries(selected).reduce((sum, [key, index]) => {
      return sum + builderParts[key][index].price;
    }, 0);
  }, [selected]);

  const choose = (type, index) => {
    setSelected((current) => ({
      ...current,
      [type]: index,
    }));
  };

  const addBuild = () => {
    onAdd({
      id: `build-${Date.now()}`,
      name: "NEXUS Custom Build",
      category: "Custom PC",
      price: total,
      description: "Your custom NEXUS gaming configuration.",
      specs: Object.entries(selected).map(
        ([key, index]) => builderParts[key][index].name
      ),
      accent: "#7c5cff",
    });
  };

  return (
    <main className="page builder-page">
      <div className="container">
        <div className="page-heading reveal">
          <span className="section-label">NEXUS / CONFIGURATOR</span>
          <h1>BUILD YOUR<br /><span>SYSTEM.</span></h1>
          <p>
            Choose your components and create a machine built around you.
          </p>
        </div>

        <div className="builder-layout">
          <div className="builder-options">
            {Object.entries(builderParts).map(([type, options]) => (
              <section className="builder-section reveal" key={type}>
                <div className="builder-title">
                  <span>{type.toUpperCase()}</span>
                  <small>SELECT ONE</small>
                </div>

                <div className="builder-options-grid">
                  {options.map((option, index) => (
                    <button
                      key={option.name}
                      className={
                        selected[type] === index ? "selected" : ""
                      }
                      onClick={() => choose(type, index)}
                    >
                      <span>{option.name}</span>
                      <strong>€{option.price}</strong>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="build-summary reveal delay-2">
            <div className="summary-top">
              <span>YOUR BUILD</span>
              <span>NX-01</span>
            </div>

            <div className="summary-visual">
              <div className="summary-pc">
                <div className="summary-fan" />
                <div className="summary-fan" />
                <div className="summary-light" />
              </div>
            </div>

            <div className="summary-list">
              {Object.entries(selected).map(([key, index]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{builderParts[key][index].name}</strong>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <span>ESTIMATED TOTAL</span>
              <strong>€{total.toLocaleString()}</strong>
            </div>

            <button className="btn btn-primary full" onClick={addBuild}>
              Add Build to Cart
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}