import React from "react";
import "../styles/MenuCard.css";

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="menu-text">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <img src={item.image} alt={item.name} className="menu-image" />
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export default MenuCard;
