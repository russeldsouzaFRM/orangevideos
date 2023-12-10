import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/insights.css";
import { Img } from "react-image";
import Review2020 from "../../assets-new/images/blog/review-2020.jpg";

const blogItems = [
  {
    imageSrc: "../assets-new/images/blog/recce-thumbnail.jpg",
    altText: "Importance of Recce",
    link: "/importance-of-recce",
    title: "Importance of Recce",
  },
  {
    imageSrc: "../assets-new/images/blog/vo-thumbnail.jpg",
    altText: "Voice over and its role in videos",
    link: "/voice-over-and-its-role-in-videos",
    title: "Voice over and its role in videos",
  },
  {
    imageSrc: "../assets-new/images/blog/prod-design-thumbnail.png",
    altText: "Importance of Production Design",
    link: "/importance-of-production-design",
    title: "Importance of Production Design",
  },
  {
    imageSrc: "../assets-new/images/blog/different-types-of-shots-thumb.jpg",
    altText: "Different types of shots",
    link: "/types-of-shots-in-live-shoot-videos",
    title: "Types of Shots in Live Shoot Videos",
  },
  {
    imageSrc: "../assets-new/images/blog/av-breakdown-blog-thumbnail.jpg",
    altText: "AV Breakdown - A process never to skip",
    link: "/av-breakdown-a-process-never-to-skip",
    title: "AV Breakdown - A process never to skip",
  },
  {
    imageSrc: "../assets-new/images/blog/Symbo Blog tumbnail.jpg",
    altText: "Symbo - A Digital Ad Film",
    link: "/symbo-a-digital-ad-film",
    title: "Symbo - A Digital Ad Film",
  },
  {
    imageSrc:
      "../assets-new/images/blog/Our Corporate Video Production Workflow blog thumbnail.jpg",
    altText: "Our Corporate Video Production Workflow",
    link: "/Our-Corporate-Video-Production-Workflow",
    title: "Our Corporate Video Production Workflow",
  },
  {
    imageSrc: "../assets-new/images/blog/corporate-video-thumbnail.jpg",
    altText: "How Much Does A Corporate Video Cost?",
    link: "/How-Much-Does-A-Corporate-Video-Cost",
    title: "How Much Does A Corporate Video Cost?",
  },
  {
    imageSrc: "../assets-new/images/blog/4ds-of-video-production-thumbnail.jpg",
    altText: "4Ds of Video Production",
    link: "/4ds-of-video-production",
    title: "4Ds of Video Production",
  },
  {
    imageSrc:
      "../assets-new/images/blog/5-factors-that-affect-the-price-of-your-video-thumbnail.jpg",
    altText: "5 Factors that Affect the Price of your Video",
    link: "/5-factors-that-affect-the-price-of-your-video",
    title: "5 Factors that Affect the Price of your Video",
  },
  {
    imageSrc: "../assets-new/images/blog/social-media-thumbnail.jpg",
    altText: "The Importance of Video Content on Social Media",
    link: "/the-importance-of-video-content-on-social-media",
    title: "The Importance of Video Content on Social Media",
  },
  {
    imageSrc: "../assets-new/images/blog/pros-and-cons-banner-thumbnail.jpg",
    altText: "Pros and Cons of 2D Animations",
    link: "/pros-and-cons-of-2d-animations",
    title: "Pros and Cons of 2D Animations",
  },
  {
    imageSrc:
      "../assets-new/images/blog/benefits-of-using-stock-footage-in-videos-thmbnail-min.jpg",
    altText: "Benefits of using stock footage in videos",
    link: "/benefits-of-using-stock-footage-in-videos",
    title: "Benefits of using stock footage in videos",
  },
  {
    imageSrc:
      "../assets-new/images/blog/importance-of-storyboarding-blog-thumbnail-min.jpg",
    altText: "The importance of storyboarding",
    link: "/the-importance-of-storyboarding",
    title: "The importance of storyboarding",
  },
  {
    imageSrc: "../assets-new/images/blog/How-we-make-our-videos-thumbnail.jpg",
    altText: "Orange Videos - Process",
    link: "https://www.orangevideos.in/orange-videos-process.pdf",
    title: "Orange Videos - Process",
  },
  {
    imageSrc: "../assets-new/images/blog/avinab-thumb.jpg",
    altText: "Lights, Camera, Action!",
    link: "/lights-camera-action",
    title: "Lights, Camera, Action!",
  },
  {
    imageSrc: "../assets-new/images/blog/7-effective-blog thumbnail.jpg",
    altText: "7 Most Effective Video Styles",
    link: "https://www.orangevideos.in/7-most-effective-video-styles.pdf",
    title: "7 Most Effective Video Styles",
  },
  {
    imageSrc: Review2020,
    altText: "Year in Review - 2020",
    link: "https://www.orangevideos.in/year-in-review-2020.pdf",
    title: "Year in Review - 2020",
  },
  {
    imageSrc: "../assets-new/images/blog/2020-10-30.jpg",
    altText: "Starting Afresh with a New Office",
    link: "/new-office",
    title: "Starting Afresh with a New Office",
  },
  {
    imageSrc: "../assets-new/images/blog/7-elements.jpg",
    altText: "7 elements every video needs",
    link: "https://www.orangevideos.in/7elements.pdf",
    title: "7 elements every video needs",
  },
  {
    imageSrc: "../assets-new/images/blog/explainer-video-old.jpg",
    altText: "Explainer video scripts",
    link: "https://www.orangevideos.in/explainer-video-scripts.pdf",
    title: "Explainer video scripts",
  },
  {
    imageSrc: "../assets-new/images/blog/latest-whiteboards.jpg",
    altText: "Everything about whiteboard videos",
    link: "https://www.orangevideos.in/whiteboardebook.pdf",
    title: "Everything about whiteboard videos",
  },
];

const InsightsPage = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="pageBanner insights-banner InsightsPage">
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
      <section className="commonSection blogPage">
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

          {/* <!--<div className="row">--> */}

          <div className="row">
            {blogItems.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-6 col-md-4"
                style={{ height: "410px" }}
              >
                <div className="latestBlogItem">
                  <div className="lbi_thumb">
                    <Img
                      src={item.imageSrc}
                      alt={item.altText}
                      style={{ height: "300px" }}
                    />
                  </div>
                  <div className="lbi_details">
                    <h2>
                      {item.link.startsWith("http") ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      ) : (
                        <Link to={item.link}>{item.title}</Link>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsPage;
