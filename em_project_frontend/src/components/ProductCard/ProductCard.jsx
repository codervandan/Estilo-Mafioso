import "./ProductCard.css";

function ProductCard({ product, onCardClick, onDeleteProduct }) {
  const productImage = product.image || product.imageUrl;

  const handleCardClick = () => {
    onCardClick(product);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();

    if (onDeleteProduct) {
      onDeleteProduct(product);
    }
  };

  return (
    <article className="product-card" onClick={handleCardClick}>
      {onDeleteProduct && (
        <button className="product-card__delete-btn" type="button" onClick={handleDeleteClick} aria-label={`Delete ${product.name}`}>
          ×
        </button>
      )}

      <img className="product-card__image" src={productImage} alt={product.name} />

      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
