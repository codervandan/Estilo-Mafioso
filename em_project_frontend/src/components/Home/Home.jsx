import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="home__title">ESTILO MAFIOSO</h1>

      <p className="home__subtitle">Luxury Streetwear</p>

      <nav className="home__nav">
        {/* <Link to="/">Home</Link>

        <span>|</span> */}

        <Link to="/clothing-items">View Collection</Link>
      </nav>
    </section>
  );
}

export default Home;
