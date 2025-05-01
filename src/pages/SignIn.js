import React, { useState } from 'react';
import '../styles/SignUp.css'
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted', { email, password });
    setEmail('');
    setPassword('');
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com';
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
          onClick={handleFacebookLogin} // Facebook login redirect
        >
          Log in with Facebook
        </button>
      </div>

      <div className="login-box">
        Already have an account? <a href="/signup">Log in</a>
      </div>
    </div>
  );
}

export default Signup;
