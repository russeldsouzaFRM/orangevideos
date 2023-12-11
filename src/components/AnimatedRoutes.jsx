import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageNotFound from "./PageNotFound";
import Home from "./Home/Home";
import OrangeStudio from "./Studio/OrangeStudio";
import AboutPage from "./About/AboutPage";
import PortfolioPage from "./Portfolio/PortfolioPage";
import CareersPage from "./careers/CareersPage";
import AccountManager from "./careers/JobInfoComponents/AccountManager";
import VideoEditing from "./careers/JobInfoComponents/VideoEditing";
import ApplyForm from "./careers/ApplyForm/ApplyForm";
import Videographers from "./careers/JobInfoComponents/Videographers";
import Contact from "./Contact";
import ServicePage from "./Services/ServicePage";
import ClientsPage from "./clients/ClientsPage";
import InsightsPage from "./insights/InsightsPage";
import ImportanceOfRacce from "./insights/ImportanceOfRacce";
import VoiceOverAndItsRoleInVideos from "./insights/VoiceOverAndItsRoleInVideos";
import ImportanceOfProductionDesign from "./insights/ImportanceOfProductionDesign";
import TypesOfShotsInLiveShootVideos from "./insights/TypesOfShotsInLiveShootVideos";
import AvBreakdownAProcessNeverToSkip from "./insights/AvBreakdownAProcessNeverToSkip";
import SymboADigitalAdFilm from "./insights/SymboADigitalAdFilm";
import OurCorporateVideoProductionWorkflow from "./insights/OurCorporateVideoProductionWorkflow";
import HowMuchDoesACorporateVideoCost from "./insights/HowMuchDoesACorporateVideoCost";
import FourDsOfVideoProduction from "./insights/4dsOfVideoProduction";
import FiveFactorsThatAffectThePriceOfYourVideo from "./insights/5FactorsThatAffectThePriceOfYourVideo";
import TheImportanceOfVideoContentOnSocialMedia from "./insights/TheImportanceOfVideoContentOnSocialMedia";
import ProsAndConsOf2dAnimations from "./insights/ProsAndConsOf_2dAnimations";
import BenefitsOfUsingStockFootageInVideos from "./insights/BenefitsOfUsingStockFootageInVideos";
import TheImportanceOfStoryboarding from "./insights/TheImportanceOfStoryboarding";
import LightsCameraAction from "./insights/LightsCameraAction";
import StartingAfreshWithANewOffice from "./insights/StartingAfreshWithANewOffice";
import VideoStrategy from "./Services/VideoStrategy";
import ProfessionalCorporateFilmVideoProductionAgencyMumbai from "./Services/ProfessionalCorporateFilmVideoProductionAgencyMumbai";
import ProductVideoMakersMumbai from "./Services/ProductVideoMakersMumbai";
import AerialVideographyPhotography from "./Services/AerialVideographyPhotography";
import TwoThreeAnimationVideoProductionAgencyMumbai from "./Services/2d_3dAnimationVideoProductionAgencyMumbai";
import ExplainerVideoProductionCompanyMumbai from "./Services/ExplainerVideoProductionCompanyMumbai";
import DigitalAdFilmMakingAgencyMumbai from "./Services/DigitalAdFilmMakingAgencyMumbai";
import CorporatePhotoshootsAgencyMumbai from "./Services/CorporatePhotoshootsAgencyMumbai";

const PageTransition = ({ children }) => {
  const location = useLocation();

  // const pageTransitionVariants = {
  //   initial: {
  //     opacity: 0,
  //     position: "relative",
  //     left: location.action === "POP" ? "0%" : "100%",
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 1,
  //     },
  //   },
  //   animate: {
  //     opacity: 1,
  //     left: "0%",
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 1,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     position: "relative",
  //     left: location.action === "POP" ? "0%" : "-100%",
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 0.5,
  //     },
  //   },
  // };

  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const fadeInVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 },
  };

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
        <motion.div
          variants={fadeInVariant}
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutPage /> },
  { path: "/video-services", element: <ServicePage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/careers", element: <CareersPage /> },
  { path: "/account-manager", element: <AccountManager /> },
  { path: "/video-editing", element: <VideoEditing /> },
  { path: "/videographers", element: <Videographers /> },
  { path: "/account-manager-apply", element: <ApplyForm /> },
  { path: "/video-editing-apply", element: <ApplyForm /> },
  { path: "/videographers-apply", element: <ApplyForm /> },
  { path: "/contact", element: <Contact /> },
  { path: "/clients", element: <ClientsPage /> },
  { path: "/insights", element: <InsightsPage /> },
  { path: "/studio", element: <OrangeStudio /> },
  { path: "/importance-of-recce", element: <ImportanceOfRacce /> },
  {
    path: "/voice-over-and-its-role-in-videos",
    element: <VoiceOverAndItsRoleInVideos />,
  },
  {
    path: "/importance-of-production-design",
    element: <ImportanceOfProductionDesign />,
  },
  {
    path: "/types-of-shots-in-live-shoot-videos",
    element: <TypesOfShotsInLiveShootVideos />,
  },
  {
    path: "/av-breakdown-a-process-never-to-skip",
    element: <AvBreakdownAProcessNeverToSkip />,
  },
  { path: "/symbo-a-digital-ad-film", element: <SymboADigitalAdFilm /> },
  {
    path: "/Our-Corporate-Video-Production-Workflow",
    element: <OurCorporateVideoProductionWorkflow />,
  },
  {
    path: "/How-Much-Does-A-Corporate-Video-Cost",
    element: <HowMuchDoesACorporateVideoCost />,
  },
  { path: "/4ds-of-video-production", element: <FourDsOfVideoProduction /> },
  {
    path: "/5-factors-that-affect-the-price-of-your-video",
    element: <FiveFactorsThatAffectThePriceOfYourVideo />,
  },
  {
    path: "/the-importance-of-video-content-on-social-media",
    element: <TheImportanceOfVideoContentOnSocialMedia />,
  },
  {
    path: "/pros-and-cons-of-2d-animations",
    element: <ProsAndConsOf2dAnimations />,
  },
  {
    path: "/benefits-of-using-stock-footage-in-videos",
    element: <BenefitsOfUsingStockFootageInVideos />,
  },
  {
    path: "/the-importance-of-storyboarding",
    element: <TheImportanceOfStoryboarding />,
  },
  { path: "/lights-camera-action", element: <LightsCameraAction /> },
  { path: "/new-office", element: <StartingAfreshWithANewOffice /> },
  { path: "/video-strategy", element: <VideoStrategy /> },
  {
    path: "/professional-corporate-film-video-production-agency-mumbai",
    element: <ProfessionalCorporateFilmVideoProductionAgencyMumbai />,
  },
  {
    path: "/product-video-makers-mumbai",
    element: <ProductVideoMakersMumbai />,
  },
  {
    path: "/aerial-videography-photography",
    element: <AerialVideographyPhotography />,
  },
  {
    path: "/2d-3d-animation-video-production-agency-mumbai",
    element: <TwoThreeAnimationVideoProductionAgencyMumbai />,
  },
  {
    path: "/explainer-video-production-company-mumbai",
    element: <ExplainerVideoProductionCompanyMumbai />,
  },
  {
    path: "/digital-ad-film-making-agency-mumbai",
    element: <DigitalAdFilmMakingAgencyMumbai />,
  },
  {
    path: "/corporate-photoshoots-agency-mumbai",
    element: <CorporatePhotoshootsAgencyMumbai />,
  },
  { path: "*", element: <PageNotFound /> },
];

const AnimatedRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageTransition>{element}</PageTransition>}
          />
        ))}
      </Routes>
    </>
  );
};

export default AnimatedRoutes;
