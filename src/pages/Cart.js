import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
} from "../slices/CartSlice";
import "../styles/Cart.css";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleContinue = () => {
    if (totalQuantity > 1) {
      navigate("/payment");
    } else {
      alert("Please select atleast 1 item");
    }
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
                  <div className="qty-control-container">
                    <button
                      className="qty-circle-btn"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-circle-btn"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
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
          <div>
            <Link to="/menu" className="need-more-items-link">
              Need More Items
            </Link>
          </div>
          <div className="cart-summary">
            <p className="cart-container-price">Total Items: {totalQuantity}</p>
            <p className="cart-container-price">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Cart;
