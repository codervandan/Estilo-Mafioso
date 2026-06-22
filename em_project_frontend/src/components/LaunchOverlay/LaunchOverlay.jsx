import "./LaunchOverlay.css";

function LaunchOverlay() {
  return (
    <div className="launch-overlay">
      <div className="launch-overlay__content">
        <h1 className="launch-overlay__logo">Estilo Mafioso</h1>

        <h2 className="launch-overlay__subtitle">Sign up for text alerts</h2>

        <form className="launch-overlay__form">
          <input type="tel" placeholder="XXX-XXX-XXXX" />

          <button className="launch-overlay__submit-btn" type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default LaunchOverlay;
