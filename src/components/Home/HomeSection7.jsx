import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeSection7 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const Content1 = () => {
    return (
      <div>
        <div className="col-lg-7 col-sm-7 col-md-7">
          <div className="wh_choose">
            <p>
              Orange Videos started as a Mumbai-based video production company.
              Now we work across India after opening our offices in Bangalore
              &amp; Delhi NCR.
            </p>

            <ul>
              <li>
                <i className="fa fa-check-square"></i>We have shot documentary
                films in rural Maharashtra covering 600 kilometers in 4 days
              </li>
              <li>
                <i className="fa fa-check-square"></i>Captured factory locations
                in Nagpur, Mohali, Mehsana, Baddi
              </li>
              <li>
                <i className="fa fa-check-square"></i>Shot leisure travel
                properties in Goa and Kerala
              </li>
              <li>
                <i className="fa fa-check-square"></i>Filmed live events and
                corporate functions in almost every major city of India
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 col-md-5">
          <div className="chose_img">
            <img
              src="../../assets-new/images/WEBP/pan-india-operations.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  const Content2 = () => {
    return (
      <div>
        <div className="col-lg-5 col-sm-5 col-md-5">
          <div className="chose_img">
            <img
              src="../../assets-new/images/WEBP/unique-approach.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-7 col-sm-7 col-md-7">
          <div className="wh_choose">
            <p>
              At Orange Videos, we specialize in creating fully customized video
              content for companies of all sizes. One of the ways we’ve achieved
              this is by crafting videos that actually resonate with the target
              audience, and by creating beautiful designs that are on-point and
              aligned with our client's brand.
            </p>
            <p>
              <b>Our Values </b>
            </p>
            <ul>
              <li>
                <i className="fa fa-check-square"></i>Originality
              </li>
              <li>
                <i className="fa fa-check-square"></i>Quality
              </li>
              <li>
                <i className="fa fa-check-square"></i>Transparency
              </li>
              <li>
                <i className="fa fa-check-square"></i>
                Customer-centricity
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const Content3 = () => {
    return (
      <div>
        <div className="col-lg-7 col-sm-7 col-md-7">
          <div className="wh_choose">
            <p>
              A team of dedicated video makers. No matter the scope, every
              project is customized, and we provide the best team/crew for your
              specific video. We are a professional team with over 8 years of
              experience.
            </p>
            <h4>
              <b>Committed Project Manager</b>
            </h4>
            <p>
              A project specialist will always be available if you have
              questions, concerns, or tough deadlines. He’ll hear you out and
              make sure the rest of the team is following your directions.
            </p>
            <h4>
              <b>Dedicated Creative Producer</b>
            </h4>
            <p>
              The creative producer understands your guidelines, marketing
              strategy, previous works, and video references. This producer will
              develop an approach for your main visual communication and make
              sure it stays cohesive throughout the project.
            </p>
            <h4>
              <b>Professional Production Crew</b>
            </h4>
            <p>
              Our production crew will pick the perfect set of film specialists
              and gear to maximize the quality of the production, while staying
              within your budget.
            </p>
            <h4>
              <b>Experienced Video Editors</b>
            </h4>
            <p>
              Our editors will determine the most suitable style for your video.
              They will make sure we’re on the same page by providing post
              production edits and comments.
            </p>
            {/* <!--<ul>-->
                                        <!--    <li><i className="fa fa-check-square"></i><b>Committed Project Manager</b> - A project specialist will always be available if you have questions, concerns, or tough deadlines. He’ll hear you out and make sure the rest of the team is following your directions.</li>-->
                                        <!--    <li><i className="fa fa-check-square"></i><b>Dedicated Creative Producer</b> - The creative producer understands your guidelines, marketing strategy, previous works, and video references. This producer will develop an approach for your main visual communication and make sure it stays cohesive throughout the project.</li>-->
                                        <!--    <li><i className="fa fa-check-square"></i><b>Professional Production Crew</b> - Our production crew will pick the perfect set of film specialists and gear to maximize the quality of the production, while staying within your budget.</li>-->
                                        <!--    <li><i className="fa fa-check-square"></i><b>Experienced Video Editors</b> - Our editors will determine the most suitable style for your video. They will make sure we’re on the same page by providing post production edits and comments.</li>-->
                                        <!--</ul>--> */}
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 col-md-5">
          <div className="chose_img">
            <img
              src="../../assets-new/images/WEBP/dedicated-crew.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    { title: "Pan India Operations", content: <Content1 /> },
    { title: "Unique Approach", content: <Content2 /> },
    { title: "Dedicated Crew", content: <Content3 /> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="commonSection chooseUs dark-grey-background">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title red_color">many reasons</h4>
            <h2 className="sec_title">why choose us</h2>
            <p className="sec_desc">
              We're the corporate video production company you've been looking
              for!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="tabs-container">
              <ul className="tabs-list chooseUs_title">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`tabs-list-item ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <a
                      role="button"
                      href="/"
                      onClick={(e) => e.preventDefault()}
                    >
                      {tab.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tabs-content">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={index}
                    animate={{ opacity: activeTab === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: activeTab === index ? "block" : "none" }}
                  >
                    {tab.content}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection7;
