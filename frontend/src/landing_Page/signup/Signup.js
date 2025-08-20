import React from "react";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div
      className="signup-container"
      style={{ maxWidth: "400px", margin: "2rem auto" }}
    >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 15px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
