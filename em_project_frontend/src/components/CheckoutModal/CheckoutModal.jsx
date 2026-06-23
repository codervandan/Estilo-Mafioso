import { useMemo, useState } from "react";
import "./CheckoutModal.css";

function CheckoutModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    billingSameAsShipping: true,
  });

  const priceNumber = useMemo(() => {
    if (!product?.price) return 0;

    if (typeof product.price === "number") {
      return product.price;
    }

    return Number(String(product.price).replace(/[^0-9.]/g, ""));
  }, [product]);

  const shippingFee = priceNumber >= 250 ? 0 : 12.99;
  const estimatedTotal = priceNumber + shippingFee;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Checkout data ready for backend:", {
      product,
      customer: formData,
      amount: estimatedTotal,
    });

    alert("Frontend checkout form is ready. Next step is connecting this to Express, MongoDB, and Stripe.");
  };

  if (!product) return null;

  return (
    <div className="checkout-modal" onMouseDown={onClose}>
      <div className="checkout-modal__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="checkout-modal__close" type="button" onClick={onClose} aria-label="Close checkout modal">
          ×
        </button>

        <div className="checkout-modal__header">
          <p className="checkout-modal__eyebrow">Secure Checkout</p>
          <h2 className="checkout-modal__title">Complete Your Purchase</h2>
        </div>

        <div className="checkout-modal__content">
          <form className="checkout-modal__form" onSubmit={handleSubmit}>
            <fieldset className="checkout-modal__section">
              <legend className="checkout-modal__section-title">Contact Information</legend>

              <label className="checkout-modal__label">
                Email Address
                <input
                  className="checkout-modal__input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="checkout-modal__label">
                Full Name
                <input
                  className="checkout-modal__input"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Daniel Quintana"
                  required
                />
              </label>

              <label className="checkout-modal__label">
                Phone Number
                <input
                  className="checkout-modal__input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  required
                />
              </label>
            </fieldset>

            <fieldset className="checkout-modal__section">
              <legend className="checkout-modal__section-title">Shipping Address</legend>

              <label className="checkout-modal__label">
                Street Address
                <input
                  className="checkout-modal__input"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main Street"
                  required
                />
              </label>

              <label className="checkout-modal__label">
                Apartment, Suite, etc.
                <input
                  className="checkout-modal__input"
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  placeholder="Apt 4B"
                />
              </label>

              <div className="checkout-modal__row">
                <label className="checkout-modal__label">
                  City
                  <input className="checkout-modal__input" type="text" name="city" value={formData.city} onChange={handleChange} required />
                </label>

                <label className="checkout-modal__label">
                  State
                  <input
                    className="checkout-modal__input"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="checkout-modal__row">
                <label className="checkout-modal__label">
                  ZIP Code
                  <input
                    className="checkout-modal__input"
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="checkout-modal__label">
                  Country
                  <input
                    className="checkout-modal__input"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="checkout-modal__checkbox-label">
                <input
                  className="checkout-modal__checkbox"
                  type="checkbox"
                  name="billingSameAsShipping"
                  checked={formData.billingSameAsShipping}
                  onChange={handleChange}
                />
                Billing address is the same as shipping address
              </label>
            </fieldset>

            <fieldset className="checkout-modal__section checkout-modal__section_payment">
              <legend className="checkout-modal__section-title">Payment</legend>

              <div className="checkout-modal__payment-placeholder">
                <p className="checkout-modal__payment-title">Stripe Payment Element goes here.</p>
                <p className="checkout-modal__payment-text">
                  Do not build custom credit card inputs. After the backend is ready, this section will load Stripe’s secure payment form
                  for Visa, Mastercard, Apple Pay, Google Pay, and more.
                </p>
              </div>
            </fieldset>

            <button className="checkout-modal__submit" type="submit">
              Continue Purchase
            </button>
          </form>

          <aside className="checkout-modal__summary">
            <h3 className="checkout-modal__summary-title">Order Summary</h3>

            <div className="checkout-modal__product">
              <img className="checkout-modal__product-image" src={product.image} alt={product.name} />

              <div>
                <p className="checkout-modal__product-name">{product.name}</p>
                <p className="checkout-modal__product-price">${priceNumber.toFixed(2)}</p>
              </div>
            </div>

            <div className="checkout-modal__totals">
              <div className="checkout-modal__total-row">
                <span>Subtotal</span>
                <span>${priceNumber.toFixed(2)}</span>
              </div>

              <div className="checkout-modal__total-row">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</span>
              </div>

              <div className="checkout-modal__total-row checkout-modal__total-row_final">
                <span>Total</span>
                <span>${estimatedTotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
