import { useState } from "react";
import "./LaunchOverlay.css";

function LaunchOverlay() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Text alert signup:", phoneNumber);

    setPhoneNumber("");
  };

  return (
    <section className="launch-overlay">
      <div className="launch-overlay__content">
        <h1 className="launch-overlay__logo">Estilo Mafioso</h1>

        <p className="launch-overlay__subtitle">Sign up for text alerts</p>

        <form className="launch-overlay__form" onSubmit={handleSubmit}>
          <input
            className="launch-overlay__input"
            type="tel"
            inputMode="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button className="launch-overlay__submit-btn" type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}

export default LaunchOverlay;
