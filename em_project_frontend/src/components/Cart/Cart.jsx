import "./Cart.css";

function Cart({ cartItems = [] }) {
  const subtotal = cartItems.reduce((total, item) => {
    const price = typeof item.price === "number" ? item.price : Number(String(item.price).replace(/[^0-9.]/g, ""));

    return total + price;
  }, 0);

  return (
    <section className="cart">
      <h1 className="cart__title">Cart</h1>

      {cartItems.length === 0 && (
        <p className="cart__empty-message">Your cart is empty. Go to Clothing Items and add something to your cart.</p>
      )}

      {cartItems.length > 0 && (
        <>
          <ul className="cart__list">
            {cartItems.map((item) => {
              const itemImage = item.image || item.imageUrl;
              const itemPrice = typeof item.price === "number" ? `$${item.price}` : item.price;

              return (
                <li className="cart__item" key={item._id || item.name}>
                  <img className="cart__image" src={itemImage} alt={item.name} />

                  <div className="cart__info">
                    <h2 className="cart__item-name">{item.name}</h2>
                    <p className="cart__item-price">{itemPrice}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="cart__summary">
            <p className="cart__subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="cart__note">Checkout is currently available from the product modal using the Buy Now button.</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
