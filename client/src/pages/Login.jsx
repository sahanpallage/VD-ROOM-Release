import React from "react";
import "./LoginForm.css";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-header">Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
        <div className="links-container">
          <a href="#" className="forgot-password-link">
            Forgot password?
          </a>
          <span className="signup-link">
            Don't have an account? <a href="#">Sign Up</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
