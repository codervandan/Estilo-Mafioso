import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>

        <Link to="/profile" className="header__link">
          Profile
        </Link>

        <Link to="/cart" className="header__link">
          Cart
        </Link>

        <button type="button" className="header__button" onClick={onLoginClick}>
          Log In
        </button>

        <button type="button" className="header__button" onClick={onRegisterClick}>
          Register
        </button>
      </nav>
    </header>
  );
}

export default Header;
