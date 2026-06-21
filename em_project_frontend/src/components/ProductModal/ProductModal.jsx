import "./ProductModal.css";

function ProductModal({ onClose, product, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        <img src={product.imageUrl} alt={product.name} className="modal__image" />

        <p className="modal__price">${product.price}</p>

        <p className="modal__description">{product.description}</p>

        <div className="modal__actions">
          <button className="modal__buy-btn">Buy Now</button>

          <button className="modal__add-btn" onClick={() => onAddToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
