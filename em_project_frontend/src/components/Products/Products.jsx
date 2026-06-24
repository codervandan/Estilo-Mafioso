import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products({ products = [], onCardClick, onDeleteProduct }) {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} onCardClick={onCardClick} onDeleteProduct={onDeleteProduct} />
      ))}
    </section>
  );
}

export default Products;
