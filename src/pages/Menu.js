import React from "react";
import menuItems from "../data/menuItems";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
const Menu = () => {
  return (
    <div className="menu-list">
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
