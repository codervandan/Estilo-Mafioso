import Products from "../Products/Products";
import productsData from "../../utils/products";

function ClothingItems({ onCardClick }) {
  return (
    <section>
      <h2>Clothing Items</h2>

      <Products products={productsData} onCardClick={onCardClick} />
    </section>
  );
}

export default ClothingItems;
