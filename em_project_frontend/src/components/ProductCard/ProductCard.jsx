import "./ProductCard.css";

function ProductCard({ product, onCardClick }) {
  return (
    <article
      className="product-card"
      onClick={() => {
        console.log("CARD CLICKED", product);
        onCardClick(product);
      }}
    >
      <img className="product-card__image" src={product.imageUrl} alt={product.name} />

      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__price">${product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
