import React, { useState } from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted", { email, password });
    setEmail("");
    setPassword("");
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com";
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">FoodApp</h1>
        <form onSubmit={handleSubmit} data-testid="signup-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            sign in
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          type="button"
          className="facebook-login"
          onClick={handleFacebookLogin}
        >
          Log in with Facebook
        </button>
      </div>

      <div className="login-box">
        want to create a account <Link to="/signup"> Sign up</Link>
      </div>
    </div>
  );
}

export default Signup;
