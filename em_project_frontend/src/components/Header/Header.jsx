import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Estilo Mafioso</h1>

      <nav className="header__nav">
        <Link to="/">Home</Link>

        <Link to="/clothing-items">Clothing Items</Link>
      </nav>
    </header>
  );
}

export default Header;
