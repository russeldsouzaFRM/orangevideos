import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NumberAnimationCounter from "./NumberAnimationCounter";
import "../styles/services.css";

const ServicePage = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
    <>
      {/* section 1 */}
      <motion.section
        className="pageBanner services-banner"
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - Services
                </h4>
                <h1>Video Services</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 2 */}
      <motion.section
        className="commonSection"
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="sub_title red_color">Welcome to Orange Videos</h4>
              <h2 className="sec_title">
                creative video production
                <br /> with strategic marketing thinking.
              </h2>
              <p className="sec_desc color_aaa">
                We’re a video production agency helping businesses and brands
                achieve their goals with video.
              </p>
            </div>
          </div>
          <div className="row mb-3 d-flex justify-content-center">
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/video-strategy"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/video-strategy.svg"
                      alt=""
                    />
                    <h3>video strategy</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/video-strategy-white.svg"
                      alt=""
                    />
                    <h3>video strategy</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/professional-corporate-film-video-production-agency-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/corporate-video.svg"
                      alt=""
                    />
                    <h3>corporate videos</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/corporate-video-white.svg"
                      alt=""
                    />
                    <h3>corporate videos</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/product-video-makers-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/product-videos.svg"
                      alt=""
                    />
                    <h3>product videos</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/product-videos-white.svg"
                      alt=""
                    />
                    <h3>product videos</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/aerial-videography-photography.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/aerial-photography.svg"
                      alt=""
                    />
                    <h3>aerial videography &amp; photography</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/aerial-photography-white.svg"
                      alt=""
                    />
                    <h3>aerial videography &amp; photography</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/2d-3d-animation-video-production-agency-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/2d-3d-animateion.svg"
                      alt=""
                    />
                    <h3>2d &amp; 3d animation</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/2d-3d-animateion-white.svg"
                      alt=""
                    />
                    <h3>2d &amp; 3d animation</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="explainer-video-production-company-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/explainer-video.svg"
                      alt=""
                    />
                    <h3>explainer videos</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/explainer-video-white.svg"
                      alt=""
                    />
                    <h3>explainer videos</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/digital-ad-film-making-agency-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/digital-ad-films.svg"
                      alt=""
                    />
                    <h3>digital ad films</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/digital-ad-filmswhite.svg"
                      alt=""
                    />
                    <h3>digital ad films</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <a
                href="https://www.orangevideos.in/corporate-photoshoots-agency-mumbai.php"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src="../../assets-new/images/icons/grey/photoshoot.svg"
                      alt=""
                    />
                    <h3>photoshoots</h3>
                  </div>
                  <div className="back">
                    <img
                      src="../../assets-new/images/icons/white/photoshoot-white.svg"
                      alt=""
                    />
                    <h3>photoshoots</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 3 */}
      <motion.section
        className="commonSection funfact"
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                {/* <h1 data-counter="350" className="timer">
                  350+
                </h1> */}
                <h1 className="timer">
                  <NumberAnimationCounter
                    from={0}
                    to={350}
                    duration={30}
                    delay={0}
                  />
                </h1>
                <h3>videos</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                {/* <h1 data-counter="6" className="timer">
                  6+
                </h1> */}
                <h1 className="timer">
                  <NumberAnimationCounter
                    from={0}
                    to={60}
                    duration={100}
                    delay={0}
                  />
                </h1>
                <h3>countries</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                {/* <h1 data-counter="8" className="timer">
                  8+
                </h1> */}
                <h1 className="timer">
                  <NumberAnimationCounter
                    from={0}
                    to={8}
                    duration={1000}
                    delay={0}
                  />
                </h1>
                <h3>languages</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding">
              <div className="singlefunfact text-center">
                {/* <h1 data-counter="100" className="timer">
                  100+
                </h1> */}
                <h1 className="timer">
                  <NumberAnimationCounter
                    from={0}
                    to={100}
                    duration={100}
                    delay={0}
                  />
                </h1>
                <h3>happy clients</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 4 */}
      <motion.section
        className="commonSection trustClient pb_120"
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="CL_content">
                <img
                  src="../../assets-new/images/services/what-will-you-get.jpg"
                  alt=""
                />
                <div className="abc_inner">
                  <div className="row">
                    <div className="col-lg-5 col-sm-5 col-md-5"></div>
                    <div className="col-lg-7 col-sm-7 col-md-7">
                      <div className="abci_content">
                        <h2>What is in store for you?</h2>
                        <p>
                          We are a corporate video production agency in Mumbai.
                          Our competent team of video makers approaches every
                          video project with a unique treatment. We customise
                          video as per the requirement and message to be
                          delivered and ensure we meet deadlines.
                        </p>
                        <ul className="mb-3">
                          <li>
                            <i className="fa fa-check-square"></i>Committed
                            Project Manager
                          </li>
                          <li>
                            <i className="fa fa-check-square"></i>Dedicated
                            Creative Producer
                          </li>
                          <li>
                            <i className="fa fa-check-square"></i>Professional
                            Production Crew
                          </li>
                          <li>
                            <i className="fa fa-check-square"></i>Experienced
                            Video Editors
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicePage;
