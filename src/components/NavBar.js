// src/components/NavBar.js
import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">FoodApp</Link>
        </div>
        <Link to="/menu">Menu</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/gift-cards">Gift Cards</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/rewards">Rewards</Link>
      </div>
      <div className="navbar-right">
        <Link to="/signin">Sign In</Link>
        <Link to="/cart">Cart{totalQuantity > 0 && ` (${totalQuantity})`}</Link>
        <Link to="/menu" className="order-button">
          Order Now
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
