import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(" Signup successful! Redirecting to login...");
        setFormData({ email: "", password: "" });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(` Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(" Network error, try again later.");
    }
  };
  return (
    <div className="mb-5" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Signup</h2>
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
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          Sign Up
        </button>
      </form>
      {message && (
        <div className=" mt-1 alert alert-dark" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Signup;
