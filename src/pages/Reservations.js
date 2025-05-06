import React, { useState } from "react";
import "../styles/Reservations.css";

function Reservations() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time || !guests) {
      alert("Please fill out all fields.");
      return;
    }
    alert(
      `Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guest(s).`
    );
    setName("");
    setGuests("");
    setDate("");
    setTime("");
    setEmail("");
  };

  return (
    <div className="reservations-container">
      <h2>Book a Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Please Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          max="10:00"
          min="21:00"
        />
        <input
          type="number"
          min="1"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
}

export default Reservations;
