import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/careers.css";
import { useEffect } from "react";

const CareersPage = () => {
  // just comment below object if you want to remove and add if you want to add more job listings it will be displayed in the section using map function
  const careerData = [
    {
      careerName: "Account Manager",
      applyLink: "/account-manager-apply",
      moreInfoLink: "/account-manager",
    },
    {
      careerName: "Video Editing",
      applyLink: "/video-editing-apply",
      moreInfoLink: "/video-editing",
    },
    {
      careerName: "Videographers",
      applyLink: "/videographers-apply",
      moreInfoLink: "/videographers",
    },
  ];

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* section 1 */}
      <motion.section
        className="pageBanner careers-banner"
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
            i
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - careers
                </h4>
                <h1>careers</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 2 */}
      <section className="commonSection-custom" id="join-us">
        <motion.div
          className="container"
          initial="hide"
          whileInView="view"
          viewport={{ once: true }}
          variants={{
            view: { opacity: 1, y: 0 },
            hide: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 1 }}
        >
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="sub_title red_color">
                are you focused, hardworking, and fun?{" "}
              </h4>
              <h2 className="sec_title">join us!</h2>
              <p className="sec_desc color_aaa">
                Come as you Are. Excel in what you love. At the core, we believe
                in our people. In their abilities and their strengths. We
                welcome our associates to come as they are and help them excel
                in what they love. Our culture is defined by a celebration of
                the diversity of experiences and work styles. We are a global
                melting pot of eclectic ideas and cultures.
              </p>
            </div>
          </div>
        </motion.div>

        {careerData.map((crr, ind) => {
          return (
            <motion.div
              className="featured job-container"
              key={ind}
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
                  <div className="job-list d-flex align-items-center">
                    <div className="col-lg-8">
                      <div className="job-title">
                        <h2>
                          {crr.careerName}
                          <span className="red_color"></span>
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="job-detials d-flex">
                        <div className="job-apply-btn">
                          <Link className="common_btn" to={crr.applyLink}>
                            <span>Apply Now</span>
                          </Link>
                        </div>
                        <div className="job-info-btn">
                          <Link className="common_btn" to={crr.moreInfoLink}>
                            <span>more info</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
};

export default CareersPage;
