import React, { useEffect, useState } from "react";
import "../styles/about.css";
import { Link, useLocation } from "react-router-dom";
import AboutTeams from "./AboutTeams";

const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleVideoPopup = () => {
    setShowPopup(showPopup ? false : true);
  };

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style = showPopup ? "overflow: hidden" : "overflow: auto";
  }, [showPopup]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner about-us-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - about
                </h4>
                <h1>about us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="commonSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <h4 className="sub_title red_color">get to know us</h4>
              <h2 className="sec_title">
                we know you’re
                <br />
                curious why orange videos?
              </h2>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="agency_img1">
                <img
                  src="../assets-new/images/about/aboutus-530x464.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="agency_img2">
                <img
                  src="../assets-new/images/about/about-us-820x444.jpg"
                  alt=""
                />
              </div>
              <div className="compay_date">
                <h5>established</h5>
                <h2>2016</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="commonSection team featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="sub_title red_color">meet the team</h4>
              <h2 className="sec_title">video experts</h2>
              <p className="sec_desc">
                We are committed to providing our customers with exceptional
                service while
                <br />
                offering our employees the best training.
              </p>
            </div>
          </div>
        </div>
        <AboutTeams />
      </section>

      {/* section 4 */}
      <section
        className="commonSection our_work"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="videoWrap_2">
          <img
            src="../assets-new/images/about/about-us-showreel.jpg"
            alt=""
          />
          <div className="play_video">
            {/* <!--<h4 className="sub_title mb-3" >Over showreel</h4>--> */}
            <a
              className="video_popup"
              href="javascript:void(0);"
              onClick={handleVideoPopup}
            >
              <i className="fa fa-play"></i>
            </a>

            <h2>Watch Reel</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6"></div>
            <div className="col-lg-6 col-sm-6">
              <div className="ab_detail_wrap">
                <h4 className="sub_title red_color">our approach</h4>
                <h2 className="sec_title">
                  big production house capabilities,boutique studio advantages
                </h2>
                <p className="sec_desc">
                  We meet{" "}
                  <span style={{ color: "#ff950d" }}>
                    <b>DEADLINES</b>
                  </span>
                  .<br />
                  We exceed{" "}
                  <span style={{ color: "#ff950d" }}>
                    <b>EXPECTATIONS</b>
                  </span>
                  .<br />
                  We keep people happy by doing the{" "}
                  <span style={{ color: "#ff950d" }}>
                    <b>LITTLE THINGS RIGHT</b>
                  </span>{" "}
                  and the{" "}
                  <span style={{ color: "#ff950d" }}>
                    <b>BIG THINGS BETTER</b>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* below is the yt video popup */}
      {showPopup ? (
        <div className="popup-vid-cotainer">
          {/* <a href="https://www.youtube.com/watch?v=JGV05ck7U0g"></a> */}
          <div className="dv-popup-vid">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JGV05ck7U0g?si=km9l5m9js8Bafxkg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="dv-close">
              <i
                className="fa-solid fa-xmark close-ico"
                onClick={handleVideoPopup}
              ></i>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AboutPage;
