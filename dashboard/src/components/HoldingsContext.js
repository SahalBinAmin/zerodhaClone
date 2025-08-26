// src/context/HoldingsContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const HoldingsContext = createContext();

export function HoldingsProvider({ children }) {
  const [holdings, setHoldings] = useState([]);

  // fetch holdings once when app loads
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
    fetchHoldings();
  }, []);

  return (
    <HoldingsContext.Provider value={{ holdings, setHoldings, fetchHoldings }}>
      {children}
    </HoldingsContext.Provider>
  );
}

export function useHoldings() {
  return useContext(HoldingsContext);
}
