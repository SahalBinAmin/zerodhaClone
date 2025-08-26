import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";

function Holdings() {
  const [allHoldings, setHoldings] = useState([]);
  const { refreshHoldingsFlag } = useContext(GeneralContext);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allholdings", {
        withCredentials: true,
      });
      setHoldings(res.data);
    } catch (err) {
      console.error("Error fetching holdings:", err);
    }
  };

  useEffect(() => {
    fetchHoldings(); // load on mount
  }, []);

  // ⚡ Refresh whenever triggerHoldingsRefresh flips
  useEffect(() => {
    fetchHoldings();
  }, [refreshHoldingsFlag]);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  const handleDrop = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/allholdings/${id}`, {
        withCredentials: true,
      });
      fetchHoldings(); // refresh after delete
    } catch (err) {
      console.error("Error deleting stock:", err);
    }
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{ border: "none" }}
                      onClick={() => handleDrop(stock._id)}
                    >
                      Drop
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />
    </>
  );
}

export default Holdings;
