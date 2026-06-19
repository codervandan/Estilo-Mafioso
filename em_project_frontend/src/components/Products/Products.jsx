import ProductCard from "../ProductCard/ProductCard";

function Products({ products }) {
  return (
    <section>
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </section>
  );
}

export default Products;
