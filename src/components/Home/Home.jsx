import { Link } from "react-router-dom";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import { motion } from "framer-motion";
import BannerVideo from "../../assets-new/videos/ov-banner_compressed.mp4";

const Home = () => {
  return (
    <>
      {/* section 1 */}
      <section
        style={{
          minHeight: "100vh",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#000",
        }}
        className="mobile-section"
      >
        <div className="container-fluid container-fluid-custom">
          <div className="overlay-bg"></div>
          <video
            src={BannerVideo}
            autoPlay
            muted
            loop
            id="myVideo"
            preload="auto"
            poster="../../assets-new/images/homepage-banner-video-poster.jpg"
          >
            <source src={BannerVideo} type="video/mp4" />
          </video>
          <div className="container custom-text">
            <motion.div
              className="row"
              initial="hide"
              whileInView="view"
              viewport={{ once: true }}
              variants={{
                view: { opacity: 1, y: 0 },
                hide: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1 }}
            >
              <div className="col-lg-12">
                <div className="banner_content text-left mb-3 mb-m-3">
                  <h4>Welcome to Orange Videos</h4>
                  <h2 style={{ color: "#ff950d" }}>
                    corporate
                    <br />
                    video
                    <br />
                    production
                  </h2>
                </div>
                <Link to="/video-services" className="common_btn red_bg">
                  <span>DISCOVER MORE</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="commonSection ready-top">
        <div className="container">
          <motion.div
            className="row"
            initial="hide"
            whileInView="view"
            viewport={{ once: true }}
            variants={{
              view: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
          >
            <div className="col-lg-9 col-sm-8 col-md-9 mobile-center">
              <h2 className="sec_title white">
                let's get your project started!
              </h2>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 text-right mobile-center">
              <Link className="common_btn bg-white-button" to="/contact">
                <span>let’s talk</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 3 */}
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
              <Link to="/video-strategy" className="icon_box_1 text-center">
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/video-strategy.svg"
                    />
                    <h3>video strategy</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/video-strategy-white.svg"
                    />
                    <h3>video strategy</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/professional-corporate-film-video-production-agency-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/corporate-video.svg"
                    />
                    <h3>corporate videos</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/corporate-video-white.svg"
                    />
                    <h3>corporate videos</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/product-video-makers-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/product-videos.svg"
                    />
                    <h3>product videos</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/product-videos-white.svg"
                    />
                    <h3>product videos</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/aerial-videography-photography"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/aerial-photography.svg"
                    />
                    <h3>aerial videography &amp; photography</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/aerial-photography-white.svg"
                    />
                    <h3>aerial videography &amp; photography</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/2d-3d-animation-video-production-agency-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/2d-3d-animateion.svg"
                    />
                    <h3>2d &amp; 3d animation</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/2d-3d-animateion-white.svg"
                    />
                    <h3>2d &amp; 3d animation</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/explainer-video-production-company-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/explainer-video.svg"
                    />
                    <h3>explainer videos</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/explainer-video-white.svg"
                    />
                    <h3>explainer videos</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/digital-ad-film-making-agency-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/digital-ad-films.svg"
                    />
                    <h3>digital ad films</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/digital-ad-filmswhite.svg"
                    />
                    <h3>digital ad films</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link
                to="/corporate-photoshoots-agency-mumbai"
                className="icon_box_1 text-center"
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/grey/photoshoot.svg"
                    />
                    <h3>photoshoots</h3>
                  </div>
                  <div className="back">
                    <img
                      alt="ov-img"
                      src="../assets-new/images/icons/white/photoshoot-white.svg"
                    />
                    <h3>photoshoots</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 4 */}
      <motion.section
        className="commonSection featured"
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
            <div className="col-lg-5 col-sm-12  col-md-5">
              <div className="features_content">
                <h4 className="sub_title red_color">our approach</h4>
                <h2 className="sec_title">Unleash the power of video</h2>
                <p className="sec_desc">
                  Effective video comes in three parts. And we do it all.
                </p>
                <div className="singleFeature">
                  <div className="f_count">01</div>
                  <h3>Strategy</h3>
                  <p>
                    We'll craft you a perfect video strategy with the right
                    targeting, tactics and messaging to help reach your goals.
                  </p>
                </div>
                <div className="singleFeature">
                  <div className="f_count">02</div>
                  <h3>Production</h3>
                  <p>
                    Like a fine suit, we tailor-make video to meet your
                    objectives.
                  </p>
                </div>
                <div className="singleFeature">
                  <div className="f_count">03</div>
                  <h3>Marketing</h3>
                  <p>
                    We'll distribute your video content to hit your targets and
                    help you get the most out of your budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 col-md-7 noPaddingRight">
              <div className="features_img">
                <img src="../assets-new/images/WEBP/our-approach.webp" alt="" />
                <div className="img_details">
                  <h4>
                    We connect brands and people through customized video
                    content.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 5 */}
      <motion.section
        className="commonSection porfolio"
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
              <h4 className="sub_title red_color">our portfolio</h4>
              <h2 className="sec_title">work showcase</h2>
              <p className="sec_desc">
                In this video portfolio, you'll find some of the best corporate
                videos we've created over the past couple of years.
                <br />
                Our secret recipe? Passion, a brand-oriented focus, and
                out-of-the-box thinking!{" "}
                <Link to="/contact">
                  <span
                    style={{
                      borderBottom: "1px solid #ff950d",
                      color: "#ff950d",
                    }}
                  >
                    Give us a try
                  </span>
                </Link>{" "}
                and see for yourself!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img src="../assets-new/images/WEBP/BPEP-new.webp" alt="" />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=43Z7IIvuSCg"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    corporate videos
                  </a>
                  <h4>
                    <Link to="/portfolio">BARING PRIVATE EQUITY</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img
                  src="../assets-new/images/portfolio/corporate-video/fsc-new.jpg"
                  alt=""
                  loading="lazy"
                />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=2DgXiAacGKk"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    corporate videos
                  </a>
                  <h4>
                    <Link to="/portfolio">fsc</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img
                  src="../assets-new/images/WEBP/total-new.webp"
                  alt=""
                  loading="lazy"
                />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=2CujfgDAf3c"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    corporate videos
                  </a>
                  <h4>
                    <Link to="/portfolio">TOTAL (TCAP)</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img
                  src="../assets-new/images/portfolio/corporate-video/little-guru.jpg"
                  alt=""
                />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=Co6-8Fzk6xE"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    Graphic Animation
                  </a>
                  <h4>
                    <Link to="/portfolio">Little Guru</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img src="../assets-new/images/WEBP/anunta-new.webp" alt="" />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=YayTPXoSSio"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    2d animation
                  </a>
                  <h4>
                    <Link to="/portfolio">Anunta</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="singlefolio">
                <img src="../assets-new/images/WEBP/medtronic.webp" alt="" />
                <a
                  className="video_popup video_popup_custom"
                  href="https://www.youtube.com/watch?v=tKekjL76IAs"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="folioHover">
                  <a className="cate" href="/">
                    whiteboard
                  </a>
                  <h4>
                    <Link to="/portfolio">medtronic</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-12 text-center">
                <Link className="common_btn" to="/portfolio">
                  <span>view more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 6 */}
      <motion.div
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <HomeSection6 />
      </motion.div>

      {/* section 7 */}
      <HomeSection7 />

      {/* section 8 */}
      <motion.section
        className="commonSection blog"
        id="blog-sec"
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
              <h4 className="sub_title red_color">our resources</h4>
              <h2 className="sec_title">latest insights</h2>
              <p className="sec_desc">
                The importance of video in the digital marketing world is hard
                to overestimate. But, how much do you really know about video
                marketing? In this section, we share our knowledge on how video
                can help you achieve your marketing objectives and more. All for
                FREE.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-6 col-md-4"
              style={{ height: "410px" }}
            >
              <div className="latestBlogItem">
                <div className="lbi_thumb">
                  <img
                    src="../assets-new/images/blog/vo-thumbnail.jpg"
                    alt=" Voice over and its role in videos"
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="lbi_details">
                  <h2>
                    <Link to="/voice-over-and-its-role-in-videos">
                      Voice over and its role in videos
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-md-4"
              style={{ height: "410px" }}
            >
              <div className="latestBlogItem">
                <div className="lbi_thumb">
                  <img
                    src="../assets-new/images/WEBP/prod-design-thumbnail.webp"
                    alt="Importance of Production Design"
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="lbi_details">
                  <h2>
                    <Link to="/importance-of-production-design">
                      Importance of Production Design
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-md-4"
              style={{ height: "410px" }}
            >
              <div className="latestBlogItem">
                <div className="lbi_thumb">
                  <img
                    src="../assets-new/images/WEBP/different-types-of-shots-thumb.webp"
                    alt="Types of Shots in Live Shoot Videos"
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="lbi_details">
                  <h2>
                    <Link to="/types-of-shots-in-live-shoot-videos">
                      Types of Shots in Live Shoot Videos
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-12 text-center">
                <Link className="common_btn" to="/insights">
                  <span>explore more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 9 */}
      <motion.section
        className="commonSection client"
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
              <h4 className="sub_title red_color">our clients</h4>
              <h2 className="sec_title">they trust us</h2>
              <p className="sec_desc">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ display: "none" }}>
              <div className="client_slider owl-carousel owl-theme owl-hidden owl-loaded">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-32.5px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                      width: "260px",
                    }}
                  >
                    <div
                      className="owl-item"
                      style={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/3.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/4.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/5.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/6.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/7.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      sstyle={{ width: "2.5px", marginRight: "30px" }}
                    >
                      <div className="singleClient">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/assets-new/images/client/coloured/8.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-controls">
                  <div className="owl-nav">
                    <div className="owl-prev" style={{ display: "none" }}>
                      prev
                    </div>
                    <div className="owl-next" style={{ display: "none" }}>
                      next
                    </div>
                  </div>
                  <div className="owl-dots">
                    <div className="owl-dot active">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 desktop-logo">
              <img
                src="../assets-new/images/client/client-logo-desktop feb 2023.jpg"
                className="img-fluid"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="col-12 mobile-logo text-center">
              <img
                src="../assets-new/images/WEBP/mobile_logo_1.webp"
                className="img-fluid"
                alt=""
              />
              <img
                src="../assets-new/images/WEBP/mobile_logo_2.webp"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 10 */}
      <motion.section
        className="commonSection ready"
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
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 col-sm-8 col-md-8">
              <h2 className="sec_title white">
                What makes our video production company unique?
              </h2>
              <p></p>
              <h3 className="white">Your questions answered.</h3>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 text-right">
              <a
                className="common_btn bg-white-button"
                href="https://www.orangevideos.in/credentials-deck.pdf"
                target="_blank" rel="noreferrer"
              >
                <span>DOWNLOAD CREDENTIALS DECK</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
