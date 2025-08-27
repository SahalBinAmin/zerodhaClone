import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Tooltip } from "@mui/material";
import GeneralContext from "./GeneralContext";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const FRONTEND_URL = process.env.FRONTEND_URL;
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchWatchlist = async () => {
    try {
      const res = await axios.get(`${API_URL}/watchlist`, {
        withCredentials: true,
      });
      setWatchlist(res.data);
    } catch (err) {
      console.error("Error fetching watchlist:", err);
    }
  };

  const handleDeleteFromState = (id) => {
    setWatchlist((prev) => prev.filter((item) => item._id !== id));
  };

  const labels = watchlist.map((subarray) => subarray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock) => {
          return (
            <WatchListItem
              stock={stock}
              key={stock._id}
              onDelete={handleDeleteFromState}
            />
          );
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onDelete }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions stock={stock} onDelete={onDelete} />
      )}
    </li>
  );
};

const WatchListActions = ({ stock, onDelete }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(stock._id);
  };

  const handleDrop = async () => {
    try {
      await axios.delete(`${API_URL}/watchlist/${stock._id}`, {
        withCredentials: true,
      });
      onDelete(stock._id);
    } catch (err) {
      console.error("Error deleting stock:", err);
    }
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Drop (D)" placement="top" arrow>
          <button className="sell" onClick={handleDrop}>
            Drop
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
