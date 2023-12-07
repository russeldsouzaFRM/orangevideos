import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/insights.css";
import { Img } from "react-image";

const InsightsPage = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="pageBanner insights-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center ">
                <h4>
                  <Link to="/">home</Link> - Insights
                </h4>
                <h1>Insights</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section class="commonSection blogPage">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h4 class="sub_title red_color">our resources</h4>
              <h2 class="sec_title">latest insights</h2>
              <p class="sec_desc">
                The importance of video in the digital marketing world is hard
                to overestimate. But, how much do you really know about video
                marketing? In this section, we share our knowledge on how video
                can help you achieve your marketing objectives and more. All for
                FREE.
              </p>
            </div>
          </div>

          {/* <!--<div class="row">--> */}

          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/recce-thumbnail.jpg"
                    alt="Importance of Recce"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <Link to="/importance-of-recce">Importance of Recce</Link>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/vo-thumbnail.jpg"
                    alt="Voice over and its role in videos"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <Link to="/voice-over-and-its-role-in-videos">
                      Voice over and its role in videos
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/prod-design-thumbnail.png"
                    alt="Different types of shots"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <Link to="/importance-of-production-design">
                      Importance of Production Design
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/different-types-of-shots-thumb.jpg"
                    alt="Different types of shots"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <Link to="/types-of-shots-in-live-shoot-videos">
                      Types of Shots in Live Shoot Videos
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/av-breakdown-blog-thumbnail.jpg"
                    alt="AV Breakdown"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <Link to="/av-breakdown-a-process-never-to-skip">
                      AV Breakdown - A process never to skip
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* not done */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/Symbo Blog tumbnail.jpg"
                    alt="Symbo - BTS"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a href="symbo-a-digital-ad-film.php" target="_blank">
                      Symbo - A Digital Ad Film
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/Our Corporate Video Production Workflow blog thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="Our-Corporate-Video-Production-Workflow.php"
                      target="_blank"
                    >
                      Our Corporate Video Production Workflow
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/corporate-video-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="How-Much-Does-A-Corporate-Video-Cost.php"
                      target="_blank"
                    >
                      How Much Does A Corporate Video Cost?
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            {/* <!--14-02-22--> */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/4ds-of-video-production-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a href="4ds-of-video-production" target="_blank">
                      4Ds of Video Production
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/5-factors-that-affect-the-price-of-your-video-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="5-factors-that-affect-the-price-of-your-video"
                      target="_blank"
                    >
                      {" "}
                      5 Factors that Affect the Price of your Video
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            {/* <!--14-02-22-->
                    <!--25-01-22--> */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/social-media-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="the-importance-of-video-content-on-social-media"
                      target="_blank"
                    >
                      The Importance of Video Content on Social Media
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/pros-and-cons-banner-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a href="pros-and-cons-of-2d-animations" target="_blank">
                      Pros and Cons of 2D Animations
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            {/* <!--25-01-22-->
                    <!--21-12 start--> */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/benefits-of-using-stock-footage-in-videos-thmbnail-min.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="benefits-of-using-stock-footage-in-videos"
                      target="_blank"
                    >
                      Benefits of using stock footage in videos
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/importance-of-storyboarding-blog-thumbnail-min.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a href="the-importance-of-storyboarding" target="_blank">
                      The importance of storyboarding
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            {/* <!--21-12 end--> */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/How-we-make-our-videos-thumbnail.jpg"
                    alt="Orange Videos - Process"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="https://www.orangevideos.in/orange-videos-process.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Orange Videos - Process
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/avinab-thumb.jpg"
                    alt="Lights, Camera, Action!"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a href="lights-camera-action.php" target="_blank">
                      Lights, Camera, Action!
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/7-effective-blog thumbnail.jpg"
                    alt="7 Most Effective Video Styles"
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="https://www.orangevideos.in/7-most-effective-video-styles.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      7 Most Effective Video Styles
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem mb-83">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/review-2020-blog.jpg"
                    alt=""
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="https://www.orangevideos.in/year-in-review-2020.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Year in Review - 2020
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            {/* <!-- <div class="col-lg-4 col-sm-6 col-md-4" style={{height:"410px"}}>
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets-new/images/blog/shubham.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                               <!-- <h2><a href="https://www.orangevideos.in/introducing-shubham-chandra.php" target='_blank'>Introducing Shubham Chandra</a></h2>
                               
                          <!--  </div>
                        </div>
                    </div>--> */}
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img src="../assets-new/images/blog/2020-10-30.jpg" alt="" />
                </div>
                <div class="lbi_details">
                  {/* <!--<a href="#" class="lbid_date">26 NOV</a>--> */}
                  <h2>
                    <a
                      href="https://www.orangevideos.in/new-office.php"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Starting Afresh with a New Office
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img src="../assets-new/images/blog/7-elements.jpg" alt="" />
                </div>
                <div class="lbi_details">
                  {/* <!--<a href="#" class="lbid_date">26 NOV</a>--> */}
                  <h2>
                    <a
                      href="https://www.orangevideos.in/7elements.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      7 elements every video needs
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/explainer-video-old.jpg"
                    alt=""
                  />
                  {/* <Img
                    src="../assets-new/images/blog/latest-whiteboards.jpg"
                    alt=""
                  /> */}
                </div>
                <div class="lbi_details">
                  {/* <!--<a href="#" class="lbid_date">20 NOV</a>--> */}
                  <h2>
                    <a
                      href="https://www.orangevideos.in/explainer-video-scripts.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explainer video
                      <br />
                      scripts
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4" style={{ height: "410px" }}>
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <Img
                    src="../assets-new/images/blog/latest-whiteboards.jpg"
                    alt=""
                  />
                </div>
                <div class="lbi_details">
                  <h2>
                    <a
                      href="https://www.orangevideos.in/whiteboardebook.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Everthing about whiteboard videos
                    </a>
                  </h2>
                  {/* <!--<a class="learnM" href="insights.php">Learn More</a>--> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--<div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/1.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">26 NOV</a>
                                <h2><a href="blog_single.html">basic rules of running web  agency business</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/2.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">20 NOV</a>
                                <h2><a href="blog_single.html">Become the best sale marketer</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/3.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">16 NOV</a>
                                <h2><a href="blog_single.html">Introducing latest mopaly features</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/4.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">10 NOV</a>
                                <h2><a href="blog_single.html">a deep understanding of our audience</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/5.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">9 NOV</a>
                                <h2><a href="blog_single.html">We build and activate brands insight</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="latestBlogItem">
                            <div class="lbi_thumb">
                                <Img src="../assets/images/blog/6.jpg" alt="" />
                            </div>
                            <div class="lbi_details">
                                <a href="#" class="lbid_date">7 NOV</a>
                                <h2><a href="blog_single.html">experiences that connect with people</a></h2>
                                <a class="learnM" href="blog_single.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>--> */}
        </div>
      </section>
    </>
  );
};

export default InsightsPage;
