import "./ProductCard.css";

function ProductCard({ product, onCardClick }) {
  return (
    <article className="product-card" onClick={() => onCardClick(product)}>
      <img className="product-card__image" src={product.imageUrl} alt={product.name} />

      <h3 className="product-card__title">{product.name}</h3>

      <p className="product-card__price">${product.price}</p>
    </article>
  );
}

export default ProductCard;
