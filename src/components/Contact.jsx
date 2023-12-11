import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/contact-us.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    contact_org_name: "",
    contact_designation: "",
    contact_service: "",
    contact_budget: "",
    contact_deadline: "",
    contact_message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the red border when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "contact_phone" && !formData[key]) {
        validationErrors[key] = "This field is required";
      }
    });
    setErrors(validationErrors);

    // If there are validation errors, don't submit the form
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Proceed with sending the email
    const templateParams = { ...formData };

    // Add your emailjs service ID and template ID
    const serviceId = "service_icqahja";
    const templateId = "template_wgucybf";
    const userId = "DXImp6D1uUTedrn-Z";

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("Email sent successfully:", response);
        // Clear the form after successful submission
        setFormData({
          contact_name: "",
          contact_email: "",
          contact_phone: "",
          contact_org_name: "",
          contact_designation: "",
          contact_service: "",
          contact_budget: "",
          contact_deadline: "",
          contact_message: "",
        });
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
  };

  return (
    <>
      {/* section 1 */}
      <motion.section
        className="pageBanner contact-us-banner"
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
                  <Link to="/">home</Link> - contact
                </h4>
                <h1>Contact us</h1>
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
        className="commonSection ContactPage"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="sub_title">Contact with us</h4>
              <h2 className="sec_title">we would love to hear from you!</h2>
              <p className="sec_desc">
                Tell us a bit about your project needs (timeline, budget, etc.)
                and we will get back to you within 24 hours.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-sm-12 col-md-10 col-md-offset-1">
              <form
                onSubmit={handleSubmit}
                className="contactForm"
                id="contactForm"
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
                      className={`input-form ${
                        errors.contact_name && "validate-input"
                      }`}
                      type="text"
                      name="contact_name"
                      id="contact_name"
                      placeholder="Your Name"
                      value={formData.contact_name}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_name && (
                      <p className="error-message">{errors.contact_name}</p>
                    )} */}
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
                      className={`input-form ${
                        errors.contact_email && "validate-input"
                      }`}
                      type="email"
                      name="contact_email"
                      id="contact_email"
                      placeholder="Email Address"
                      value={formData.contact_email}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_email && (
                      <p className="error-message">{errors.contact_email}</p>
                    )} */}
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
                      className={`input-form ${
                        errors.contact_phone && "validate-input"
                      }`}
                      type="text"
                      name="contact_phone"
                      id="contact_phone"
                      placeholder="Mobile Number"
                      value={formData.contact_phone}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_phone && (
                      <p className="error-message">{errors.contact_phone}</p>
                    )} */}
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
                      className={`input-form ${
                        errors.contact_org_name && "validate-input"
                      }`}
                      type="text"
                      name="contact_org_name"
                      id="contact_org_name"
                      placeholder="Organisation’s Name"
                      value={formData.contact_org_name}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_org_name && (
                      <p className="error-message">{errors.contact_org_name}</p>
                    )} */}
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.select
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className={`input-form ${
                        errors.contact_designation && "validate-input"
                      }`}
                      name="contact_designation"
                      id="contact_designation"
                      value={formData.contact_designation}
                      onChange={handleChange}
                    >
                      <option value="0">Your Designation</option>
                      <option value="CEO / C-Level / Founder / VP">
                        CEO / C-Level / Founder / VP
                      </option>
                      <option value="Marketing Manager / Marketing Director">
                        Marketing Manager / Marketing Director
                      </option>
                      <option value="Operation Manager">
                        Operation Manager
                      </option>
                      <option value="Procurement Manager">
                        Procurement Manager
                      </option>
                      <option value="Production Manager">
                        Production Manager
                      </option>
                      <option value="Other Marketing Position">
                        Other Marketing Position
                      </option>
                      <option value="Student">Student</option>
                      <option value="Other">Other</option>
                    </motion.select>
                    {/* {errors.contact_designation && (
                      <p className="error-message">{errors.contact_designation}</p>
                    )} */}
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <motion.select
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className={`input-form ${
                        errors.contact_service && "validate-input"
                      }`}
                      name="contact_service"
                      id="contact_service"
                      value={formData.contact_service}
                      onChange={handleChange}
                    >
                      <option value="0">Select Service</option>
                      <option value="Corporate Videos">Corporate Videos</option>
                      <option value="Explainer Videos">Explainer Videos</option>
                      <option value="Animation Videos">Animation Videos</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Whiteboard Videos">
                        Whiteboard Videos
                      </option>
                      <option value="Product Videos">Product Videos</option>
                      <option value="Photoshoots">Photoshoots</option>
                      <option value="Other">Other</option>
                    </motion.select>
                    {/* {errors.contact_service && (
                      <p className="error-message">{errors.contact_service}</p>
                    )} */}
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
                      className={`input-form ${
                        errors.contact_budget && "validate-input"
                      }`}
                      type="number"
                      name="contact_budget"
                      id="contact_budget"
                      placeholder="Budget"
                      value={formData.contact_budget}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_budget && (
                      <p className="error-message">{errors.contact_budget}</p>
                    )} */}
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
                      className={`input-form ${
                        errors.contact_deadline && "validate-input"
                      }`}
                      type="text"
                      name="contact_deadline"
                      id="contact_deadline"
                      placeholder="Deadline(in days)"
                      value={formData.contact_deadline}
                      onChange={handleChange}
                    />
                    {/* {errors.contact_deadline && (
                      <p className="error-message">{errors.contact_deadline}</p>
                    )} */}
                  </div>
                  <div className="col-lg-6 col-sm-6"></div>
                  <div className="col-lg-12 col-sm-12">
                    <motion.textarea
                      initial="hide"
                      whileInView="view"
                      viewport={{ once: true }}
                      variants={{
                        view: { opacity: 1, y: 0 },
                        hide: { opacity: 0, y: 100 },
                      }}
                      transition={{ duration: 1 }}
                      className={`input-form ${
                        errors.contact_message && "validate-input"
                      }`}
                      type="text"
                      name="contact_message"
                      id="contact_message"
                      value={formData.contact_message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about you, what style of video you are looking for, length and turnaround time you need so we can reach out with more info."
                    ></motion.textarea>
                    {/* {errors.contact_message && (
                      <p className="error-message">{errors.contact_message}</p>
                    )} */}
                  </div>
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
                  id="career_form_button"
                  type="submit"
                >
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="commonSection client_2 featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="sec_title">our offices</h2>
              <p className="sec_desc">
                Orange Videos is based in Mumbai, India. Our in-house team is
                made up of creative professionals that work closely with more
                than 100 creatives all around the globe to create out-of-the-box
                video content, customized for your needs.
              </p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-6 col-sm-6 col-md-3">
              <div className="singleClient_2">
                <h3>Mumbai</h3>
                {/* <!--<p>C-208, 2nd Floor, Building 5,</p>-->
                            <!--<p>Mittal Estate, Andheri-Kurla Road,</p>-->
                            <!--<p>Andheri East, Mumbai 400059</p>--> */}

                <p>102, Town Center 2,</p>
                <p>Andheri Kurla Road, Marol,</p>
                <p>Andheri East, Mumbai - 400059</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-3">
              <div className="singleClient_2 h-100">
                {/* <!--<h3>Delhi</h3>-->
                            <!--<p>91 Springboard, Plot No. 23, HSIDC </p>-->
                            <!--<p>Maruti Industrial Area, Sector 18,  </p>-->
                            <!--<p>Gurgaon, Haryana 122015. </p>--> */}
                <h3>Bangalore</h3>
                {/* <!-- <p>Church Street,<br> Bangalore 560001</p> --> */}

                <p>Akshay Tech Park</p>
                <p>Plot No. 72 &amp; 73, Vijayanagar</p>
                <p>EPIP Zone, Whitefield, Bengaluru 560066</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
