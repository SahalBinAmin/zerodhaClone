import React from "react";
import "../nav.css";

function Brokerage() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row p-3 mt-5 ">
        <div className="col-8 P-5">
          <a href="#" className="none fs-4">
            <h3 className="fs-5 " style={{ marginLeft: "15%" }}>
              Brokerage Calculator
            </h3>
          </a>
          <ul className="text-muted p-4" style={{ lineHeight: "2" }}>
            <li>Call & trade</li>
            <li>NRI brokerage charges</li>
            <li>Stamp charges</li>
            <li>AMC (Account maintenance charges)</li>
            <li>DP (Depository participant) charges</li>
            <li>Pledging charges</li>
          </ul>
        </div>

        <div className="col-4 P-5 ">
          <a href="#" className="none fs-4">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
