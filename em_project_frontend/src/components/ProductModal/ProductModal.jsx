import "./ProductModal.css";

function ProductModal({ product, onClose, onBuyNow }) {
  if (!product) return null;

  return (
    <div className="product-modal" onMouseDown={onClose}>
      <div className="product-modal__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Close product modal">
          ×
        </button>

        <img className="product-modal__image" src={product.image} alt={product.name} />

        <div className="product-modal__content">
          <div className="product-modal__heading">
            <h2 className="product-modal__title">{product.name}</h2>
            <p className="product-modal__price">{product.price}</p>
          </div>

          <p className="product-modal__description">
            {product.description || "Luxury streetwear designed for presence, comfort, and culture."}
          </p>

          <div className="product-modal__actions">
            <button className="product-modal__buy-btn" type="button" onClick={() => onBuyNow(product)}>
              Buy Now
            </button>

            <button className="product-modal__cart-btn" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
