const Footer = () => {
  return (
    <>
      <footer className="footer_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-md-5">
              <aside className="widget aboutwidget">
                <a href="/">
                  <img
                    src="https://www.orangevideos.in/assets-new/images/logo.svg"
                    alt=""
                  />
                </a>
                <p>
                  We're a video production agency helping businesses and brands
                  achieve their goals with video. Elevate your brand with our
                  fully customized video production services.
                </p>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <aside className="widget contact_widgets">
                <h3 className="widget_title">contact</h3>
                {/* <!--<p>-->
                            <!--    C-208, Building no.5, Mittal Estate, Andheri-Kurla Road<br>-->
                            <!--    Andheri (E), Mumbai 400059-->
                            <!--</p>-->
                            <p style="font-weight: bold;color: white;margin-bottom: 5px !important">Mumbai</p>
                            <!-- <p style="margin-bottom: 20px !important">610, Peninsula Plaza,<br/>Fun Republic Road, Off Veera Desai Road,<br/>Andheri West, Mumbai 400053.</p> --> */}
                <p style={{ marginBottom: "20px !important" }}>
                  102, Town Center 2, Andheri Kurla Road, Marol, Andheri East,
                  Mumbai - 400059
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    marginBbottom: "5px !important",
                  }}
                >
                  Bangalore
                </p>
                <p style={{ marginBottom: "10px !important" }}>
                  Akshay Tech Park, Plot No. 72 &amp; 73, Vijayanagar, EPIP
                  Zone, Whitefield, Bengaluru 560066
                </p>
                <p>
                  Phone: <a href="tel:98674 09221">98674 09221</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:sales@orangevideos.in">
                    sales@orangevideos.in
                  </a>
                </p>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-2 col-md-3">
              <aside className="widget social_widget">
                <h3 className="widget_title">social</h3>
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
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 text-left mobile-center">
              <div className="copyright">© copyright 2023 </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-right mobile-center">
              <div className="copyright">A part of 2020 Media Collective</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
