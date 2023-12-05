import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavPopup = ({ clickFunc, showPopup }) => {
  useEffect(() => {
    const body = document.body;
    body.className = showPopup ? "show-overlay-nav" : "";
  }, [showPopup]);
  return (
    <>
      <div
        className={`popup popup__menu ${
          showPopup ? "viewPopup" : "closePopup"
        }`}
      >
        <a
          href="avascript:void(0);"
          id="close-popup"
          className="close-popup"
          rel="noreferrer"
          onClick={clickFunc}
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link to="/" onClick={clickFunc}>
                  <img
                    src="../assets-new/images/logo (1).svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <div className="dl-menu__wrap dl-menuwrapper">
                  <ul className="dl-menu dl-menuopen">
                    <li className="">
                      <Link to="/about-us" onClick={clickFunc}>
                        about
                      </Link>
                      {/* <!--<ul className="dl-submenu">
                                            <li><a href="blog.html">Blog v1</a></li>
                                            <li><a href="blog2.html">Blog v2</a></li>
                                            <li><a href="blog3.html">Blog v3</a></li>
                                            <li><a href="blog_single.html">Blog Single</a></li>
                                        </ul>--> */}
                    </li>
                    <li className="">
                      <Link to="/" onClick={clickFunc}>
                        home
                      </Link>
                      {/* <!--<ul className="dl-submenu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index2.html">Home 02</a></li>
                                            <li><a href="index3.html">Home 03</a></li>
                                        </ul>--> */}
                    </li>
                    {/* <!--<li><a href="./about-us.php">About</a></li>--> */}
                    <li className="">
                      <Link to="/video-services" onClick={clickFunc}>
                        services
                      </Link>
                      {/* <!--<ul className="dl-submenu">
                                            <li><a href="services.html">Service</a></li>
                                            <li><a href="service_detail.html">Service Detail</a></li>
                                        </ul>--> */}
                    </li>
                    <li className="">
                      <Link to="/portfolio" onClick={clickFunc}>
                        portfolio
                      </Link>
                      {/* <!--<ul className="dl-submenu">
                                            <li><a href="portfolio.html">Portfolio v1</a></li>
                                            <li><a href="portfolio2.html">Portfolio v2</a></li>
                                            <li><a href="portfolio_detail.html">Portfolio Detail</a></li>
                                        </ul>--> */}
                    </li>

                    <li>
                      <a
                        href="https://www.orangevideos.in/process.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        our process
                      </a>
                    </li>
                    <li>
                      <Link to="/studio" onClick={clickFunc}>
                        Orange Studios
                      </Link>
                    </li>
                    <li>
                      <a href="./clients.php" onClick={clickFunc}>
                        clients
                      </a>
                    </li>
                    <li>
                      <a href="./insights.php" onClick={clickFunc}>
                        insights
                      </a>
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <Link to="/careers" onClick={clickFunc}>
                        <span className="">careers </span>
                      </Link>
                      <Link
                        className="career-a"
                        to="/careers"
                        onClick={clickFunc}
                      >
                        <span className="apply-now">Apply</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 text-left">
              <ul className="footer__contacts text-left">
                <li>
                  Phone:{" "}
                  <a style={{ color: "inherit" }} href="tel:+919867409221">
                    +91 98674 09221
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    style={{ color: "inherit" }}
                    href="mailto:sales@orangevideos.in"
                  >
                    sales@orangevideos.in
                  </a>
                </li>
                {/* <!--<li>Address: C-208, Mittal Estate, Andheri-Kurla Road, Andheri (E), Mumbai 400059</li>--> */}
                <li>
                  102, Town Center 2,
                  <br />
                  Andheri Kurla Road, Marol,
                  <br />
                  Andheri East, Mumbai - 400059
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-xs-12">
              <div className="popUp_social text-right">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/orange_videos/?next=%2F"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/orangevideosofficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Orange_Videos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCTfxtQyIJyvlpwKrvLsRj7w/videos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-youtube"></i>YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/13413575/admin/feed/posts/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPopup;
