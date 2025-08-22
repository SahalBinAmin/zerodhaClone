import React from "react";
import Dashboard from "./Dashhboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3002/allholdings", { withCredentials: true })
      .then((res) => {
        console.log("Logged in user:", res.data);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
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
