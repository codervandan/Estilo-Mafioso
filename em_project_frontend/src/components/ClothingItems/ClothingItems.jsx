import { Link } from "react-router-dom";
import Products from "../Products/Products";
import "./ClothingItems.css";

function ClothingItems({ onCardClick, products = [], isLoading, error, isAdmin, onAddProductClick, onDeleteProduct }) {
  return (
    <section className="clothing-items">
      <h2 className="clothing-items__title">Collection Items</h2>

      {isAdmin && (
        <button className="clothing-items__add-btn" type="button" onClick={onAddProductClick}>
          Add Product
        </button>
      )}

      {isLoading && <p className="clothing-items__message">Loading clothing items...</p>}

      {error && <p className="clothing-items__message">{error}</p>}

      {!isLoading && !error && products.length === 0 && <p className="clothing-items__message">No clothing items available yet.</p>}

      {!isLoading && !error && products.length > 0 && (
        <Products products={products} onCardClick={onCardClick} onDeleteProduct={isAdmin ? onDeleteProduct : null} />
      )}

      <Link className="clothing-items__back" to="/">
        ← Back to home
      </Link>
    </section>
  );
}

export default ClothingItems;
