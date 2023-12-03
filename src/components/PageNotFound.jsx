import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section id="404-container">
        <div className="container">
          <div className="logo_404">
            <a href="https://www.orangevideos.in/">
              <img
                src="https://www.orangevideos.in/assets/img/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="title_404">
            <div>404</div>
            Oops! Page not found!
          </div>
          <div className="content_404">
            Either Something Get Wrong or the Page Doesn't Exist Anymore.
          </div>
          <div className="module_button btn_center">
            <a className="btn_size" href="https://www.orangevideos.in/">
              <span>take me home</span>
            </a>
          </div>
          <div className="social_wrapper">
            <div className="social_inner">
              <ul className="social">
                {/* <!--<li><a className="twitter" target="_blank" href="https://twitter.com/FutureadyMedia" title="Twitter"> -->
	            	<!--Twitter</a></li>--> */}
                <li>
                  <a
                    className="facebook"
                    target="_blank"
                    href="https://www.facebook.com/orangevideosofficial"
                    title="Facebook"
                    rel="noreferrer"
                  >
                    {" "}
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    target="_blank"
                    href="https://www.instagram.com/orange_videos/"
                    title="Instagram"
                    rel="noreferrer"
                  >
                    {" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCTfxtQyIJyvlpwKrvLsRj7w/videos"
                    title="Youtube"
                    rel="noreferrer"
                  >
                    {" "}
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
