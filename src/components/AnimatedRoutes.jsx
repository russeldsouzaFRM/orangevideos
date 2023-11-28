import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home/Home";
import AboutPage from "./About/AboutPage";
import ServicePage from "./Services/ServicePage";
import PortfolioPage from "./Portfolio/PortfolioPage";

const AnimatedRoutes = () => {
    return (
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutPage />} />
          <Route exact path="/video-services" element={<ServicePage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </AnimatePresence>
    );
  };

  export default AnimatedRoutes;