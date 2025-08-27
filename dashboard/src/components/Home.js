import React from "react";
import Dashboard from "./Dashhboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const FRONTEND_URL = process.env.FRONTEND_URL;
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/allholdings`, { withCredentials: true })
      .then((res) => {
        console.log("Logged in user:", res.data);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = `${FRONTEND_URL}/login`;
      });
  }, []);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
