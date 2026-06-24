import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home__brand">
        <h1 className="home__title">Estilo Mafioso</h1>
        <p className="home__subtitle">Luxury Streetwear</p>
      </div>
      <nav className="home__nav">
        <Link to="/clothing-items">View Collection</Link>
      </nav>
    </section>
  );
}

export default Home;
