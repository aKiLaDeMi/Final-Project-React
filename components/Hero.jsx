import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="container hero-content">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="pulse-dot" />
            HARDWARE WITHOUT LIMITS
          </div>

          <h1>
            BUILD
            <br />
            <span>BEYOND</span>
            <br />
            LIMITS.
          </h1>

          <p>
            Premium gaming hardware engineered for players who refuse to
            compromise.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Hardware
              <span>↗</span>
            </Link>

            <Link to="/builder" className="btn btn-ghost">
              Build Your PC
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>240Hz</strong>
              <span>DISPLAY</span>
            </div>

            <div>
              <strong>5.7GHz</strong>
              <span>BOOST</span>
            </div>

            <div>
              <strong>4K</strong>
              <span>GAMING</span>
            </div>
          </div>
        </div>

        <div className="hero-device reveal delay-2">
          <div className="device-glow" />

          <div className="pc-case">
            <div className="case-top" />
            <div className="case-glass">
              <div className="fan fan-1" />
              <div className="fan fan-2" />
              <div className="fan fan-3" />
              <div className="gpu-bar" />
              <div className="cpu-block">
                <span>NEXUS</span>
              </div>
            </div>
            <div className="case-bottom">
              <span>NX // 01</span>
            </div>
          </div>

          <div className="floating-card card-a">
            <span>GPU</span>
            <strong>RTX 5080</strong>
          </div>

          <div className="floating-card card-b">
            <span>PERFORMANCE</span>
            <strong>99.8%</strong>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>
    </section>
  );
}