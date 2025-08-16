import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { Link } from "react-router-dom";
import "../nav.css";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        productName={" Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        imageURL={"media/images/console.png"}
        tryDemo={"#"}
        ImageClick={"#"}
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        imageURL={"media/images/kiteconnect.png"}
        tryDemo={"#"}
        ImageClick={"#"}
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <div style={{ textAlign: "center" }}>
        <p>
          Want to know more about our technology stack? Check out the &nbsp;
          <Link className="none" to={"/"}>
            Zerodha.tech
          </Link>
          &nbsp; blog. The Zerodha Universe
        </p>
      </div>

      <Universe></Universe>
    </>
  );
}

export default ProductPage;
