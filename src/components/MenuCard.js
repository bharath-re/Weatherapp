import React, { useState } from "react";
import "../styles/MenuCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";

function MenuCard({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity }));
  };

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-image" />
      <div className="menu-text">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="price">${item.price.toFixed(2)}</p>

        <div className="quantity-control">
          <button onClick={decreaseQuantity} className="quantity-btn">
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-btn">
            +
          </button>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
