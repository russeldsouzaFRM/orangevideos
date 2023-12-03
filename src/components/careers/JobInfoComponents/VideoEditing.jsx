import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/video-editing.css";
import { motion } from "framer-motion";

const VideoEditing = () => {

    const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
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
                  - Video Editing
                </h4>
                <h2>Video Editing</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 2 */}
      <motion.section
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
        className="commonSection"
      >
        <div className="container">
          <div className="row serviceArea">
            <div className="col-lg-12">
              <h3>Experience: 2 - 3 yrs</h3>
              <h3>
                Skills: Adobe Premiere, After effects, Photoshop and illustrator
                will be added on bonus
              </h3>
              <h3>
                Qualification: Any Bachelor's Degree/ Diploma/ Any Video Editing
                Course
              </h3>

              <h3>Responsibilities:</h3>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Manipulate and edit film
                  pieces in a way that is invisible to the audience
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Take a brief to grasp
                  production team’s needs and specifications
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Review shooting script
                  and raw material to create a shot decision list based on
                  scenes’ value and contribution to continuity
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Trim footage segments
                  and put together the sequence of the film
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Input music, dialogues,
                  graphics and effects
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Create rough and final
                  cuts
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Ensure logical
                  sequencing and smooth running
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Consult with
                  stakeholders from production to post-production process
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Continuously discover
                  and implement new editing technologies and industry’s best
                  practices to maximize efficiency.
                </li>
              </ul>
              <h3>Requirements:</h3>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Proven work experience
                  as a Video Editor
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Solid experience with
                  digital technology and editing software packages (e.g.
                  Premiere, After Effects and Final Cut)
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Demonstrable video
                  editing ability with a strong portfolio
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Thorough knowledge of
                  timing, motivation and continuity
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Familiarity with special
                  effects, 3D and compositing
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Creative mind and
                  storytelling skills
                </li>
                <li>
                  <i className="fa fa-check-square"></i>BS degree in film
                  studies, cinematography or related field
                </li>
              </ul>

              <div>
                <Link className="common_btn" to="/video-editing-apply">
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

export default VideoEditing;
