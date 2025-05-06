import React from "react";
import "../styles/Rewards.css";
import { Link } from "react-router-dom";

function Rewards() {
  const rewardTiers = [
    {
      id: 1,
      title: "Bronze Member",
      points: 100,
      perks: ["5% off on orders", "Birthday surprise"],
    },
    {
      id: 2,
      title: "Silver Member",
      points: 250,
      perks: ["10% off", "Free drink on weekends", "Priority service"],
    },
    {
      id: 3,
      title: "Gold Member",
      points: 500,
      perks: ["15% off", "Free dessert weekly", "Early access to new items"],
    },
  ];

  return (
    <div className="rewards-container">
      <h2>🍔 Our Rewards Program</h2>
      <p>Earn points with every order and unlock exclusive rewards!</p>
      <div className="rewards-tiers">
        {rewardTiers.map((tier) => (
          <div key={tier.id} className="reward-card">
            <h3>{tier.title}</h3>
            <p>
              <strong>Points Required:</strong> {tier.points}
            </p>
            <ul>
              {tier.perks.map((perk, index) => (
                <li key={index}>✅ {perk}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="join-section">
        <h4>How to Join?</h4>
        <p>
          Just create an account and start ordering. Points are added
          automatically!
        </p>
        <Link to="/signin" className="signin-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Rewards;
