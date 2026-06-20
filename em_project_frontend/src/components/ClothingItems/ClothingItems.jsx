import { Link } from "react-router-dom";
import Products from "../Products/Products";
import productsData from "../../utils/products";
import "./ClothingItems.css";

function ClothingItems({ onCardClick }) {
  return (
    <section className="clothing-items">
      <h2 className="clothing-items__title">Clothing Items</h2>

      <Products products={productsData} onCardClick={onCardClick} />

      <Link className="clothing-items__back" to="/">
        ← Back to Home
      </Link>
    </section>
  );
}

export default ClothingItems;
