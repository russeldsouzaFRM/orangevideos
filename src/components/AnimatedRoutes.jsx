import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import ClientsPage from "./clients/ClientsPage";
import InsightsPage from "./insights/InsightsPage";
import ImportanceOfRacce from "./insights/ImportanceOfRacce";
import VoiceOverAndItsRoleInVideos from "./insights/VoiceOverAndItsRoleInVideos";
import ImportanceOfProductionDesign from "./insights/ImportanceOfProductionDesign";
import TypesOfShotsInLiveShootVideos from "./insights/TypesOfShotsInLiveShootVideos";
import AvBreakdownAProcessNeverToSkip from "./insights/AvBreakdownAProcessNeverToSkip";

const PageTransition = ({ children }) => {
  const location = useLocation();

  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      translateX: "100%", // Start from right and move to the center
    },
    animate: {
      opacity: 1,
      translateX: "0%", // Move to the center
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      translateX: "-100%", // Move to the left
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  // Adjust animation for the back direction
  if (location.action === "POP") {
    pageTransitionVariants.animate.translateX = "100%"; // Move to the right
    pageTransitionVariants.exit.translateX = "0%"; // Move to the center
  }

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="/about-us"
        element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        }
      />
      <Route
        path="/video-services"
        element={
          <PageTransition>
            <ServicePage />
          </PageTransition>
        }
      />
      <Route
        path="/portfolio"
        element={
          <PageTransition>
            <PortfolioPage />
          </PageTransition>
        }
      />
      <Route
        path="/careers"
        element={
          <PageTransition>
            <CareersPage />
          </PageTransition>
        }
      />
      <Route
        path="/account-manager"
        element={
          <PageTransition>
            <AccountManager />
          </PageTransition>
        }
      />
      <Route
        path="/video-editing"
        element={
          <PageTransition>
            <VideoEditing />
          </PageTransition>
        }
      />
      <Route
        path="/videographers"
        element={
          <PageTransition>
            <Videographers />
          </PageTransition>
        }
      />
      <Route
        path="/account-manager-apply"
        element={
          <PageTransition>
            <ApplyForm />
          </PageTransition>
        }
      />
      <Route
        path="/video-editing-apply"
        element={
          <PageTransition>
            <ApplyForm />
          </PageTransition>
        }
      />
      <Route
        path="/videographers-apply"
        element={
          <PageTransition>
            <ApplyForm />
          </PageTransition>
        }
      />
      <Route
        path="/contact"
        element={
          <PageTransition>
            <Contact />
          </PageTransition>
        }
      />
      <Route
        path="/clients"
        element={
          <PageTransition>
            <ClientsPage />
          </PageTransition>
        }
      />
      <Route
        path="/insights"
        element={
          <PageTransition>
            <InsightsPage />
          </PageTransition>
        }
      />
      <Route
        path="/studio"
        element={
          <PageTransition>
            <OrangeStudio />
          </PageTransition>
        }
      />
      <Route
        path="/importance-of-recce"
        element={
          <PageTransition>
            <ImportanceOfRacce />
          </PageTransition>
        }
      />
      <Route
        path="/voice-over-and-its-role-in-videos"
        element={
          <PageTransition>
            <VoiceOverAndItsRoleInVideos />
          </PageTransition>
        }
      />
      <Route
        path="/importance-of-production-design"
        element={
          <PageTransition>
            <ImportanceOfProductionDesign />
          </PageTransition>
        }
      />
      <Route
        path="/types-of-shots-in-live-shoot-videos"
        element={
          <PageTransition>
            <TypesOfShotsInLiveShootVideos />
          </PageTransition>
        }
      />
      <Route
        path="/av-breakdown-a-process-never-to-skip"
        element={
          <PageTransition>
            <AvBreakdownAProcessNeverToSkip />
          </PageTransition>
        }
      />
      <Route
        path="*"
        element={
          <PageTransition>
            <PageNotFound />
          </PageTransition>
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
