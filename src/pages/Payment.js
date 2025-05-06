import React, { useState } from "react";
import "../styles/Payment.css";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
];

function Payment() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handleSubmit = () => {
    if (!city || !location || !paymentMethod) {
      alert("Please complete all fields.");
      return;
    }
    alert(`Order confirmed for ${location}, ${city} using ${paymentMethod}.`);
    setCity("");
    setLocation("");
    setPaymentMethod("Credit Card");
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>

      <label>Select Your City:</label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">-- Choose a City --</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label>Enter Your Location:</label>
      <input
        type="text"
        placeholder="Enter street address or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Select Payment Method:</label>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="PayPal"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          🅿️ PayPal
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Apple Pay"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          🍎 Apple Pay
        </label>
      </div>

      <button className="confirm-btn" onClick={handleSubmit}>
        Confirm Order
      </button>
    </div>
  );
}

export default Payment;
