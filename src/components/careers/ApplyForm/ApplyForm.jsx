import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import EmailForm from "./EmailForm";
import axios from "axios";

const ApplyForm = () => {
  const currentURL = window.location.href;

  // Split the URL by '/'
  const urlSegments = currentURL.split("/");

  // Get the last segment (excluding empty segments)
  const lastSegment = urlSegments.filter((segment) => segment !== "").pop();

  const url = lastSegment.replace("-apply", "");

  useEffect(() => {
    console.log(url.replace("-", " "));
    console.log(typeof url);
  }, []);

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({
    career_f_name: "",
    career_l_name: "",
    career_email: "",
    career_phone: "",
    career_experience: "",
    career_current_ctc: "",
    career_expected_ctc: "",
    career_notice_period: "",
    career_earliest_date: "",
    career_resume: null,
    career_apply_for: url.replace("-", " "),
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      career_resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    const errors = {};
    if (!formData.career_f_name.trim()) {
      errors.career_f_name = "First Name is required";
    }

    if (!formData.career_l_name.trim()) {
      errors.career_l_name = "Last Name is required";
    }

    if (!formData.career_email.trim()) {
      errors.career_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.career_email)) {
      errors.career_email = "Invalid email format";
    }

    // ... (Validation logic for other fields)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear previous errors if any
    setFormErrors({});

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3001/send-email",
        form
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
    }
  };

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
              <form
                className="contactFrom"
                id="careerForm"
                onSubmit={handleSubmit}
              >
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_f_name"
                      id="career_f_name"
                      placeholder="First Name"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_l_name"
                      id="career_l_name"
                      placeholder="Last Name"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="email"
                      name="career_email"
                      id="career_email"
                      placeholder="Email Address"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_phone"
                      id="career_phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_experience"
                      id="career_experience"
                      placeholder="Experience (ex: X years X months)"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_current_ctc"
                      id="career_current_ctc"
                      placeholder="Current CTC (per annum)"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_expected_ctc"
                      id="career_expected_ctc"
                      placeholder="Expected CTC (per annum)"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_notice_period"
                      id="career_notice_period"
                      placeholder="Notice Period (in Days)"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="text"
                      name="career_earliest_date"
                      id="career_earliest_date"
                      placeholder="Earliest Date of Joining (in Days)"
                      onChange={handleChange}
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
                      className={`input-form required ${
                        formErrors.career_f_name ? "error-border" : ""
                      }`}
                      type="file"
                      name="career_resume"
                      id="career_resume"
                      onChange={handleFileChange}
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
                    className={`input-form required ${
                      formErrors.career_f_name ? "error-border" : ""
                    }`}
                    type="hidden"
                    name="career_apply_for"
                    id="career_apply_for"
                    value={url}
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
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ApplyForm;
