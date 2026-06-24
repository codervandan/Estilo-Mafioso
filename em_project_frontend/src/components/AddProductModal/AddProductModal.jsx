import { useState } from "react";
import "./AddProductModal.css";

function AddProductModal({ onClose, onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    price: "",
    description: "",
    category: "set",
    sizes: "S, M, L, XL",
    inStock: true,
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      price: Number(formData.price),
      description: formData.description,
      category: formData.category,
      sizes: formData.sizes.split(",").map((size) => size.trim()),
      inStock: formData.inStock,
    };

    setIsSaving(true);

    onAddProduct(newProduct).finally(() => {
      setIsSaving(false);
    });
  };

  return (
    <div className="add-product-modal" onMouseDown={onClose}>
      <div className="add-product-modal__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="add-product-modal__close" type="button" onClick={onClose}>
          ×
        </button>

        <h2 className="add-product-modal__title">Add Product</h2>

        <form className="add-product-modal__form" onSubmit={handleSubmit}>
          <label className="add-product-modal__label">
            Product Name
            <input
              className="add-product-modal__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
            />
          </label>

          <label className="add-product-modal__label">
            Image URL
            <input
              className="add-product-modal__input"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </label>

          <label className="add-product-modal__label">
            Price
            <input
              className="add-product-modal__input"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              required
            />
          </label>

          <label className="add-product-modal__label">
            Description
            <textarea
              className="add-product-modal__textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength="300"
              required
            />
          </label>

          <label className="add-product-modal__label">
            Category
            <select className="add-product-modal__input" name="category" value={formData.category} onChange={handleChange} required>
              <option value="set">Set</option>
              <option value="shirt">Shirt</option>
              <option value="shorts">Shorts</option>
              <option value="hoodie">Hoodie</option>
              <option value="pants">Pants</option>
              <option value="accessory">Accessory</option>
            </select>
          </label>

          <label className="add-product-modal__label">
            Sizes
            <input className="add-product-modal__input" type="text" name="sizes" value={formData.sizes} onChange={handleChange} required />
          </label>

          <label className="add-product-modal__checkbox-label">
            <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} />
            In stock
          </label>

          <button className="add-product-modal__submit" type="submit">
            {isSaving ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
