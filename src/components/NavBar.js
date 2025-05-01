// src/components/NavBar.js
import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
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
        <Link to="/cart">Cart</Link>
        <button className="order-button">
          <Link to="/menu"> Order Now</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
