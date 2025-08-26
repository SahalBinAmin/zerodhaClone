import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow, triggerHoldingsRefresh } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post(`http://localhost:3002/buy/${uid}`, {
        qty: stockQuantity,
        avg: Number(stockPrice),
        price: stockPrice,
        net: stockQuantity * stockPrice,
        day: new Date().toISOString(),
      });

      closeBuyWindow();
      triggerHoldingsRefresh(); // ⬅ refresh holdings automatically
    } catch (err) {
      console.error("Error buying stock:", err);
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required PKR : {(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div>
          <button
            className="btn btn-blue"
            style={{ border: "none" }}
            onClick={handleBuyClick}
          >
            Buy
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "red", border: "none" }}
            onClick={closeBuyWindow}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
