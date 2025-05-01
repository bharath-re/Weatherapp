import React from "react";
import "../styles/MenuCard.css";
function MenuCard({ item }) {
  return (
    <div className="menu-card" key={item.id}>
      <img src={item.image} alt={item.name} className="menu-image" />
      <div className="menu-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="menu-price">{item.price}</span>
      </div>
    </div>
  );
}

export default MenuCard;
