import React from "react";
import "../nav.css";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  ImageClick,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 mt-5 p-3 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo} className="none">
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        <div className="col-1"></div>
        <div className="col-5 p-3 mb-5">
          <a href={ImageClick}>
            <img
              style={{ width: "80%" }}
              src={imageURL}
              alt="img for Prop"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
