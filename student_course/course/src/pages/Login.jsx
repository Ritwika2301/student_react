import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Simple front-end login
    setError("");
    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🎓
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your Student Portal
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="login-footer">
          Student Course Management System
        </p>

      </div>

    </div>
  );
}

export default Login;