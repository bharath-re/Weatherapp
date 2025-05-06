import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
} from "../slices/CartSlice";
import "../styles/Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(addQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(subtractQuantity(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <span>{item.name}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                </div>
                <span className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
