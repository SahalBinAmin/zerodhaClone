import React from "react";
import "../nav.css";
import { Link } from "react-router-dom";

function Universe({ imageUrl, imageDesc, imageClick }) {
  return (
    <div className="container mt-5 p-5 text-muted">
      <div className="row text-muted  " style={{ textAlign: "center" }}>
        <h3>The Zerodha Universe</h3>
        <p className="mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mt-5 p-5">
        <div className="col-4">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/zerodhaFundhouse.png"
              alt="img for zerodhaFundhouse"
            ></img>
          </a>
          <p className="none">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/sensibullLogo.svg"
              alt="img for sensibullLogo"
            ></img>
          </a>
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/streakLogo.png"
              alt="img for streakLogo.svg"
            ></img>
          </a>
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>

      <div className="row mt-5 p-5">
        <div className="col-4 ">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/smallcaseLogo.png"
              alt="img for smallCaseLogo"
            ></img>
          </a>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/dittoLogo.png"
              alt="img for dittoLogo.png"
            ></img>
          </a>
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-4">
          <a href="/" style={{ textAlign: "center" }}>
            <img
              style={{ width: "33%" }}
              src="media/images/goldenpiLogo.png"
              alt="img for goldenPiLogo.svg"
            ></img>
          </a>
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <Link to={"/signup"}>
          <button
            className="p-2 btn mt-5 btn-primary fs-5 mb-5"
            style={{ width: "20%", marginLeft: "40%" }}
          >
            Sign up for Free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
