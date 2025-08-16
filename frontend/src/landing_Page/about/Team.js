import React from "react";
import "../nav.css";

function Team() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row p-3 mt-5 ">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-3 text-muted text-center">
        <div className="col-6 P-3 ">
          <img
            src="media/images/nithinKamath.jpg"
            alt="founder's Image"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h4 className="p-1">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>

        <div className="col-6 P-5" style={{ textAlign: "start" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="#" className="none">
              Homepage
            </a>
            <a href="#" className="none">
              / TradingQnA
            </a>
            <a href="#" className="none">
              / Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
