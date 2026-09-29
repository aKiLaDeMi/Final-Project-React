export default function About() {
  return (
    <main className="page about-page">
      <div className="container">
        <div className="page-heading reveal">
          <span className="section-label">NEXUS / ABOUT</span>
          <h1>ENGINEERED<br /><span>DIFFERENT.</span></h1>
          <p>
            NEXUS is a fictional gaming hardware brand built around
            performance, precision and design.
          </p>
        </div>

        <section className="about-grid">
          <div className="about-card large reveal">
            <span>01</span>
            <h2>Performance<br />first.</h2>
            <p>
              We believe hardware should disappear between the player and
              the experience. Fast, responsive and dependable.
            </p>
          </div>

          <div className="about-card reveal delay-1">
            <span>02</span>
            <h2>Designed<br />with purpose.</h2>
            <p>
              Every detail exists for a reason — from airflow to the shape
              of every interface.
            </p>
          </div>

          <div className="about-card reveal delay-2">
            <span>03</span>
            <h2>Built for<br />the future.</h2>
            <p>
              Technology changes quickly. NEXUS is designed to keep moving
              forward.
            </p>
          </div>
        </section>

        <section className="numbers reveal">
          <div>
            <strong>2026</strong>
            <span>ESTABLISHED</span>
          </div>
          <div>
            <strong>8+</strong>
            <span>PRODUCTS</span>
          </div>
          <div>
            <strong>4K</strong>
            <span>VISION</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>POSSIBILITIES</span>
          </div>
        </section>
      </div>
    </main>
  );
}