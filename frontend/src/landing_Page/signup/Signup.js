import React from "react";
import { useState } from "react";

function Signup() {
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
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // send email + password
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(" Signup successful!");
      } else {
        setMessage(` Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(" Network error, try again later.");
    }

    console.log("Form submitted:", formData);
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
        <p class=" mt-1 alert alert-dark" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}

export default Signup;
