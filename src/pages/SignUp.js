import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted", { name, email, username, password });
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">FoodApp</h1>
        <form onSubmit={handleSubmit} data-testid="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" data-testid="signup-button">
            Sign Up
          </button>
        </form>
      </div>

      <div className="login-box">
        Already have an account? <Link to="/signin">Log in</Link>
      </div>
    </div>
  );
}

export default Signup;
