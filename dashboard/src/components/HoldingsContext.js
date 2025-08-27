import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const HoldingsContext = createContext();

export function HoldingsProvider({ children }) {
  const [holdings, setHoldings] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${API_URL}3002/allholdings`, {
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
