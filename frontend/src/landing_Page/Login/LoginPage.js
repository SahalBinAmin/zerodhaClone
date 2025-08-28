import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const API_URL = process.env.REACT_APP_API_URL;
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful! Redirecting...");
        setFormData({ email: "", password: "" });

        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 200);
      } else {
        setMessage(` ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(" Network error, try again later.");
    }
  };

  //Google login by redirecting to backend
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };
  return (
    <div className="mb-5" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Login To Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="loginPassword"
            className="form-label"
            id="loginPassword"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="loginPassword"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <br></br>

      <h4 style={{ textAlign: "center" }}>
        <b>OR</b>
      </h4>
      <div className="text-center mt-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary w-100"
          style={{ marginTop: "10px" }}
        >
          <i className="bi bi-google"></i> Login with Google
        </button>
      </div>
      {message && (
        <div className="mt-3 alert alert-info text-center" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
