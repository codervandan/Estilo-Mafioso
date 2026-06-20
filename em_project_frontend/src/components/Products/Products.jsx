import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products({ products, onCardClick }) {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onCardClick={onCardClick} />
      ))}
    </section>
  );
}

export default Products;
