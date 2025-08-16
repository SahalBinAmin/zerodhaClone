import React from "react";
import "../nav.css";
function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-5 ">
        <h4>Zerodha Products</h4>
        <h3 className="fs-2 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p>
          Check out our &nbsp;
          <a href="#" className="none">
            investment offerings &nbsp;
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
