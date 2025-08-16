import React from "react";
import "../nav.css";

function Hero() {
  return (
    <section
      className="container-fluid border-bottom mb-5 "
      id="supportSection"
    >
      <div className="p-5" id="supportWrapper">
        <h5 style={{ fontWeight: "lighter" }}>Support Portals</h5>
        <a href="#" style={{ color: "white", fontWeight: "lighter" }}>
          Track Tickets
        </a>
      </div>

      <div className="row p-5">
        <div className="col-6">
          <h1 style={{ fontWeight: "lighter" }} className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            style={{
              marginBottom: "20%",
              border: "none",
              borderRadius: "10px",
              width: "90%",
              height: "60px",
            }}
            placeholder="   Ed: how do i activate F&O"
          ></input>
        </div>
        <div className="col-2"></div>
        <div className="col-4 ">
          <h1 style={{ fontWeight: "lighter" }}>Featured</h1>
          <ol>
            <li>
              <a href="#" style={{ color: "white" }}>
                Current Takeovers and Dilisting
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                Latest Intraday leverages
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
