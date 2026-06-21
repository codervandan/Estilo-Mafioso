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

        <h2>{product.name}</h2>

        <p>${product.price}</p>

        <p>{product.description}</p>

        <button className="modal__add-btn" onClick={() => onAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
