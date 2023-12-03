import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Videographers = () => {
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
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - <Link to="/careers">careers</Link>{" "}
                  - Videographers
                </h4>
                <h2>Videographers</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 2 */}
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
          <div className="row serviceArea">
            <div className="col-lg-12">
              {/* <!-- <h3>Experience: 2 - 3 yrs</h3>
                        <h3>Skills: Adobe Premiere, After effects, Photoshop and illustrator will be added on bonus</h3>
                        <h3>Qualification: Any Bachelor's Degree/ Diploma/ Any Video Editing Course</h3> --> */}
              <p className="sec_desc color_aaa">
                We are looking for an organised and creative Videographer to
                work with our creative team to plan, film and edit video content
                according to client briefs. We expect our Videographer’s
                responsibilities to include ensuring that the necessary filming
                equipment is available for use, directing other camera operators
                on set and editing film footage.
              </p>
              <p className="sec_desc color_aaa">
                To succeed as a Videographer you must be able to understand
                client briefs and work creatively to produce the desired
                product. A good Videographer should stay up to date with
                industry trends and tools that will make projects more
                marketable.
              </p>
              <h3>Responsibilities:</h3>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Film videos on set or on
                  location.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Ensure that equipment
                  for a shoot is present and working.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Plan the shoot with the
                  creative team and the client.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Edit footage in
                  post-production.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Direct other camera
                  operators so that the needed footage is acquired.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Monitor quality control
                  at every stage of production
                </li>
              </ul>
              <h3>Requirements:</h3>
              <p className="sec_desc">
                Higher education degree plus some on-the-job experience
                preferred
              </p>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Proficiency with editing
                  software such as PhotoShop.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Excellent interpersonal
                  skills.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Proficiency with camera
                  equipment.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Knowledge of
                  professional audio and/or video tape editing and
                  post-production procedures, techniques, and standards.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Demonstrated ability to
                  learn and adapt to new production systems and workflows.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Experience with virtual
                  reality videography
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Animation design skills
                  are a plus
                </li>
              </ul>

              <div className="">
                <Link className="common_btn" to="/videographers-apply">
                  <span>apply now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Videographers;
