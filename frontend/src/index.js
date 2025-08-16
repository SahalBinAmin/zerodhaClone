import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AboutPage from "./landing_Page/about/AboutPage";
import HomePage from "./landing_Page/home/HomePage";
import PricingPage from "./landing_Page/pricing/PricingPage";
import ProductPage from "./landing_Page/products/Productpage";
import SignupPage from "./landing_Page/signup/Signup";
import SupportPage from "./landing_Page/support/SupportPage";
import Nav from "./landing_Page/Nav";
import Footer from "./landing_Page/Footer";
import PageNotFound from "./landing_Page/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
