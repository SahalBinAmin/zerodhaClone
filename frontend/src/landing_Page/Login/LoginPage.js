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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3002/login", {
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
          window.location.href = "http://localhost:3001";
        }, 200);
      } else {
        setMessage(` ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(" Network error, try again later.");
    }
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
      {message && (
        <div className="mt-3 alert alert-info text-center" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
