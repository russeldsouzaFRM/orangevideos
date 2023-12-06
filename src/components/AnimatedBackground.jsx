import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const routes = {
  "/": "#fff",
  "/about": "#f0f0f0",
  "/contact": "#000",
};

const AnimatedBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const location = useLocation();

  useEffect(() => {
    setBackgroundColor(routes[location.pathname] || "#fff");
  }, [location]);

  return (
    <motion.div
      style={{
        backgroundColor,
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        zIndex: 10,
        transition: "background-color 0.5s ease-in-out",
      }}
    />
  );
};

export default AnimatedBackground;
