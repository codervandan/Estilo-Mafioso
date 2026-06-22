import "./LaunchOverlay.css";

function LaunchOverlay() {
  return (
    <div className="launch-overlay">
      <div className="launch-overlay__content">
        <h1 className="launch-overlay__logo">Estilo Mafioso</h1>

        <h2 className="launch-overlay__title">Launching Soon</h2>

        <p className="launch-overlay__text">Luxury. Power. Presence.</p>

        <p className="launch-overlay__description">
          Our first collection is almost here. Sign up for text alerts and be the first to know when pre-orders open.
        </p>

        <form className="launch-overlay__form">
          <input type="tel" placeholder="Enter your phone number" />

          <button type="submit">Notify Me</button>
        </form>

        <span className="launch-overlay__coming-soon">Pre-Orders Opening Soon</span>
      </div>
    </div>
  );
}

export default LaunchOverlay;
