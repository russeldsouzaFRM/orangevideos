import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ApplyForm = () => {
  const currentURL = window.location.href;

  // Split the URL by '/'
  const urlSegments = currentURL.split("/");

  // Get the last segment (excluding empty segments)
  const lastSegment = urlSegments.filter((segment) => segment !== "").pop();

  const url = lastSegment.replace("-apply", "");

  useEffect(() => {
    console.log(url.replace("-", " "));
  }, []);

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
                  - {url.replace("-", " ")}
                </h4>
                <h2>{url.replace("-", " ")}</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="commonSection ContactPage"
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
              <h2 className="sec_title">personal information</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-sm-12 col-md-10 col-md-offset-1">
              <div className="contactFrom" id="careerForm">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_f_name"
                      id="career_f_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_l_name"
                      id="career_l_name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="email"
                      name="career_email"
                      id="career_email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form"
                      type="text"
                      name="career_phone"
                      id="career_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_experience"
                      id="career_experience"
                      placeholder="Experience (ex: X years X months)"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_current_ctc"
                      id="career_current_ctc"
                      placeholder="Current CTC (per annum)"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_expected_ctc"
                      id="career_expected_ctc"
                      placeholder="Expected CTC (per annum)"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_notice_period"
                      id="career_notice_period"
                      placeholder="Notice Period (in Days)"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form required"
                      type="text"
                      name="career_earliest_date"
                      id="career_earliest_date"
                      placeholder="Earliest Date of Joining (in Days)"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.input
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className="input-form"
                      type="file"
                      name="career_resume"
                      id="career_resume"
                    />
                    <span id="document_upload_error"></span>
                  </div>
                  <motion.input
                    initial="hide"
                    whileInView="view"
                    viewport={{ once: true }}
                    variants={{
                      view: { opacity: 1, y: 0 },
                      hide: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 1 }}
                    className="input-form"
                    type="hidden"
                    name="career_apply_for"
                    id="career_apply_for"
                    value="Account Manager"
                  />
                </div>
                <motion.button
                  initial="hide"
                  whileInView="view"
                  viewport={{ once: true }}
                  variants={{
                    view: { opacity: 1, y: 0 },
                    hide: { opacity: 0, y: 100 },
                  }}
                  transition={{ duration: 1 }}
                  className="common_btn red_bg"
                  type="submit"
                  id="career_form_button"
                >
                  <span>Send Message</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ApplyForm;
