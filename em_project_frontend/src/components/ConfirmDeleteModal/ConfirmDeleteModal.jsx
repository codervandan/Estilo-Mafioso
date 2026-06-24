import { useEffect } from "react";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ product, onClose, onConfirm, isDeleting }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="confirm-delete" onMouseDown={onClose}>
      <div className="confirm-delete__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="confirm-delete__close" type="button" onClick={onClose} aria-label="Close delete confirmation">
          ×
        </button>

        <p className="confirm-delete__eyebrow">Confirm Removal</p>

        <h2 className="confirm-delete__title">Delete Product?</h2>

        <p className="confirm-delete__text">
          Are you sure you want to remove <span className="confirm-delete__product-name">{product.name}</span> from the collection?
        </p>

        <div className="confirm-delete__actions">
          <button className="confirm-delete__cancel" type="button" onClick={onClose} disabled={isDeleting}>
            Cancel
          </button>

          <button className="confirm-delete__delete" type="button" onClick={onConfirm} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
