import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home/Home";
import AboutPage from "./About/AboutPage";
import ServicePage from "./Services/ServicePage";
import PortfolioPage from "./Portfolio/PortfolioPage";
import CareersPage from "./careers/CareersPage";
import AccountManager from "./careers/JobInfoComponents/AccountManager";
import VideoEditing from "./careers/JobInfoComponents/VideoEditing";
import ApplyForm from "./careers/ApplyForm/ApplyForm";
import PageNotFound from "./PageNotFound";
import Videographers from "./careers/JobInfoComponents/Videographers";
import Contact from "./Contact";
import OrangeStudio from "./Studio/OrangeStudio";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutPage />} />
        <Route exact path="/video-services" element={<ServicePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/careers" element={<CareersPage />} />
        <Route exact path="/account-manager" element={<AccountManager />} />
        <Route exact path="/video-editing" element={<VideoEditing />} />
        <Route exact path="/videographers" element={<Videographers />} />
        <Route exact path="/account-manager-apply" element={<ApplyForm />} />
        <Route exact path="/video-editing-apply" element={<ApplyForm />} />
        <Route exact path="/videographers-apply" element={<ApplyForm />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exace path="/studio" element={<OrangeStudio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
