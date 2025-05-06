import React from "react";
import "../styles/Home.css"; // Create this CSS file
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>🍽️ Welcome to Foodie Haven</h1>
        <p>Delicious meals delivered hot & fresh to your door.</p>
        <button className="explore-btn">
          <Link to="/menu">Explore Menu</Link>
        </button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your order in 30 minutes or less.</p>
        </div>
        <div className="feature-card">
          <h3>👨‍🍳 Fresh Ingredients</h3>
          <p>Only high-quality, locally-sourced food.</p>
        </div>
        <div className="feature-card">
          <h3>⭐ Customer Favorites</h3>
          <p>Our most-loved dishes, handpicked for you.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
