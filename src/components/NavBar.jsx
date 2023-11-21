import { useEffect, useState } from "react";
import NavPopup from "./NavPopup";

const NavBar = () => {
  const [changeScrollClassName, setChangeScrollClassName] = useState("");
  useEffect(() => {
    const winScroll = () => {
      if (document.documentElement.scrollTop > 10) {
        setChangeScrollClassName("fixedHeader animated flipInX");
      } else {
        setChangeScrollClassName("");
      }
    };
    window.addEventListener("scroll", winScroll);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(showPopup ? false : true);

  };

  return (
    <>
      <header className={`header_01 ${changeScrollClassName}`} id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-sm-3 col-md-3">
              <div className="logo">
                <a href="./">
                  <img
                    src="https://www.orangevideos.in/assets-new/images/logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-7 col-md-7">
              <nav className="mainmenu text-center">
                <ul>
                  {/* <!--<li className="menu-item-has-children">-->
                                <!--    <a href="./">home</a>-->
                                    <!--<ul className="sub-menu">
                                <!--        <li><a href="index.html">Home 01</a></li>-->
                                <!--        <li><a href="index2.html">Home 02</a></li>-->
                                <!--        <li><a href="index3.html">Home 03</a></li>-->
                                <!--    </ul>-->
                                <!--</li>--> */}
                  <li className="">
                    <a href="./about-us.php">about</a>
                  </li>
                  <li className="">
                    <a href="./video-services.php">services</a>
                  </li>
                  <li className="">
                    <a href="./portfolio.php">portfolio</a>
                    {/* <!--<ul className="sub-menu">
                                        <li><a href="portfolio.html">Portfolio v1</a></li>
                                        <li><a href="portfolio2.html">Portfolio v2</a></li>
                                        <li><a href="portfolio_detail.html">Portfolio Detail</a></li>
                                    </ul>--> */}
                  </li>
                  <li className="d-inline-flex align-items-center">
                    <a href="./careers.php">
                      <span className="">careers </span>
                    </a>
                    <a className="career-a" href="./careers.php#join-us">
                      <span className="apply-now">Apply</span>{" "}
                    </a>
                    {/* <!--<ul className="sub-menu">
                                        <li><a href="blog.html">Blog v1</a></li>
                                        <li><a href="blog2.html">Blog v2</a></li>
                                        <li><a href="blog3.html">Blog v3</a></li>
                                        <li><a href="blog_single.html">Blog Single</a></li>
                                    </ul>--> */}
                  </li>
                  <li>
                    <a href="./contact-us.php">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2">
              <div className="navigator text-right" onClick={handlePopup}>
                {/* <!--<a className="search searchToggler" href="javascript:void(0);"><i className="mei-magnifying-glass"></i></a>--> */}
                <a
                  href="javascript:void(0);"
                  className="menu mobilemenu hidden-sm hidden-md hidden-lg hidden-xs"
                >
                  <i className="fa-solid fa-bars mei-menu"></i>
                </a>
                <a
                  id="open-overlay-nav"
                  className="menu hamburger"
                  href="javascript:void(0);"
                >
                  <i className="fa-solid fa-bars mei-menu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <NavPopup clickFunc={handlePopup} showPopup={showPopup} />
      {/* {showPopup ? (
      ) : null} */}
    </>
  );
};

export default NavBar;
