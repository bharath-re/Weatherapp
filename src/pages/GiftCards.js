import React from "react";
import "../styles/GiftCards.css";
import giftcard from "../images/giftcard.png";

function GiftCards() {
  const giftCards = [
    {
      id: 1,
      value: 10,
      discount: 10,
      description: "Get 10% off on your next purchase!",
      imageUrl: giftcard,
    },
    {
      id: 2,
      value: 25,
      discount: 10,
      description: "Get 10% off on your next purchase!",
      imageUrl: giftcard,
    },
    {
      id: 3,
      value: 50,
      discount: 10,
      description: "Get 10% off on your next purchase!",
      imageUrl: giftcard,
    },
    {
      id: 4,
      value: 100,
      discount: 10,
      description: "Get 10% off on your next purchase!",
      imageUrl: giftcard,
    },
  ];

  const handlePurchase = (value) => {
    alert(`You have purchased a $${value} gift card. Enjoy your 10% off!`);
  };

  return (
    <div className="giftcards-container">
      <h2>Gift Cards</h2>
      <p>Buy a gift card today and get 10% off on your next purchase!</p>
      <div className="giftcards-list">
        {giftCards.map((card) => (
          <div key={card.id} className="giftcard-item">
            <img
              src={card.imageUrl}
              alt={`Gift Card $${card.value}`}
              className="giftcard-image"
            />
            <div className="giftcard-details">
              <h3>${card.value} Gift Card</h3>
              <p>{card.description}</p>
            </div>
            <button
              className="purchase-btn"
              onClick={() => handlePurchase(card.value)}
            >
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftCards;
