import { Link } from "react-router-dom";
import Products from "../Products/Products";
import productsData from "../../utils/products";
import "./ClothingItems.css";

function ClothingItems({ onCardClick }) {
  return (
    <section className="clothing-items">
      <Link className="clothing-items__back" to="/">
        ← Back to Home
      </Link>
      <h2>Clothing Items</h2>

      <Products products={productsData} onCardClick={onCardClick} />
    </section>
  );
}

export default ClothingItems;
