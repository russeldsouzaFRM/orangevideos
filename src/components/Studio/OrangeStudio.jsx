import React, { useEffect } from "react";
import "../styles/studio.css";
import { Link, useLocation } from "react-router-dom";
import Fancybox from "./Fancybox";
import { motion } from "framer-motion";

// const Fancybox = lazy(() => import("./Fancybox"));

const galleryItems = [
  { span: 23, imgSrc: "PXL_20210224_121303119.jpg" },
  { span: 13, imgSrc: "PXL_20210224_121349026.jpg" },
  { span: 14, imgSrc: "PXL_20210224_121503831.jpg" },
  { span: 13, imgSrc: "PXL_20210105_031145221.jpg" },
  { span: 13, imgSrc: "PXL_20210222_104523942.jpg" },
  { span: 13, imgSrc: "PXL_20210222_104618997.jpg" },
  { span: 14, imgSrc: "PXL_20210222_110323768.jpg" },
  { span: 13, imgSrc: "PXL_20210222_111317893.jpg" },
  { span: 15, imgSrc: "PXL_20210222_111414796.jpg" },
  { span: 13, imgSrc: "PXL_20210222_112543816.jpg" },
  { span: 13, imgSrc: "PXL_20210222_115542263.jpg" },
  { span: 14, imgSrc: "turf.jpg" },
  { span: 13, imgSrc: "Untitled-1.jpg" },
  { span: 12, imgSrc: "_MG_0032.jpg" },
  { span: 23, imgSrc: "2.jpg" },
  { span: 23, imgSrc: "3.jpg" },
  { span: 13, imgSrc: "4.jpg" },
  { span: 13, imgSrc: "5.jpg" },
  { span: 13, imgSrc: "7..jpg" },
];

const OrangeStudio = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <motion.section
        initial="hide"
        whileInView="view"
        viewport={{ once: true }}
        variants={{
          view: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
        className="pageBanner studio-banner"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - studio
                </h4>
                <h1>Studio</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* section 2 */}
      <section className="commonSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <motion.div
                initial="hide"
                whileInView="view"
                viewport={{ once: true }}
                variants={{
                  view: { opacity: 1, y: 0 },
                  hide: { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1 }}
                className="col-half"
              >
                <h1 className="red_color">Orange Studios</h1>
                <div className="address">
                  <p>
                    <i
                      className="fa fa-map-marker location-icon"
                      aria-hidden="true"
                    ></i>{" "}
                    &nbsp; Andheri West, Mumbai
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hide"
                whileInView="view"
                viewport={{ once: true }}
                variants={{
                  view: { opacity: 1, y: 0 },
                  hide: { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1 }}
                className="col-lg-12 noPadding"
              >
                <iframe
                  title="Orange Studios Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.15693893698!2d72.8785308348877!3d19.104213200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82de53b913d%3A0x996bfdf6b3e8f35b!2sOrange%20Videos%20%7C%20Corporate%2C%20Explainer%20%26%20Animation%20Videos%20in%20Mumbai!5e0!3m2!1sen!2sin!4v1607434550892!5m2!1sen!2sin"
                  width="100%"
                  height="420px"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </motion.div>
            </div>
            <motion.div
              initial="hide"
              whileInView="view"
              viewport={{ once: true }}
              variants={{
                view: { opacity: 1, y: 0 },
                hide: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1 }}
              className="col-lg-6 col-sm-6 col-md-6"
            >
              <h1>About Us</h1>
              <p>
                Orange Studios provides a versatile studio space for product
                photoshoot, films, web series, classes, workshops or rehearsals.
              </p>
              <p>
                Sitting at the top of Mittal Industrial Estate in Marol is the
                light and airy Orange Studio. The undulating roof and views of
                the skyline creates the perfect environment for any large scale
                shoot or rehearsal. The open to sky studio is a totally unique
                offering, with an expansive 7,590 sq. ft. of shooting space in
                Andheri, very close to the Mumbai airport. The space provides
                unfiltered daylight with panoramic views of the Mumbai metro and
                corporate buildings with glass facades. Facilities include a
                hair, makeup and styling space with direct access to the roof.
              </p>
              <p>
                The studio has 3 spaces: the open to sky space, the office with
                workstations and the edit room. The office space fitted with air
                conditioning and superfast internet, sits right next to the
                editing room for hassle free shoots followed by smooth editing
                sessions. A beautifully functional make up room is attached to
                the studio along with a change room as well as ample wardrobe
                space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="gallery-sec">
        <div className="container">
          {/* <Fancybox
                options={{
                Carousel: {
                    infinite: false,
                },
                }}
            >
                <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/60/1600x1200"
                >
                <img
                    alt=""
                    src="https://lipsum.app/id/60/200x150"
                    width="200"
                    height="150"
                />
                </a>
                <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/61/1600x1200"
                >
                <img
                    alt=""
                    src="https://lipsum.app/id/61/200x150"
                    width="200"
                    height="150"
                />
                </a>
                <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/62/1600x1200"
                >
                <img
                    alt=""
                    src="https://lipsum.app/id/62/200x150"
                    width="200"
                    height="150"
                />
                </a>
                <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/63/1600x1200"
                >
                <img
                    alt=""
                    src="https://lipsum.app/id/63/200x150"
                    width="200"
                    height="150"
                />
                </a>
                <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/64/1600x1200"
                >
                <img
                    alt=""
                    src="https://lipsum.app/id/64/200x150"
                    width="200"
                    height="150"
                />
                </a>
            </Fancybox> */}

          <motion.div
            initial="hide"
            whileInView="view"
            viewport={{ once: true }}
            variants={{
              view: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
            className="col-md-12 text-center"
          >
            <h1>Images</h1>
          </motion.div>
          <div className="col-md-12">
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="gallery" id="gallery">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="gallery-item"
                    style={{ gridRowEnd: `span ${item.span}` }}
                    initial="hide"
                    whileInView="view"
                    viewport={{ once: true }}
                    variants={{
                      view: { opacity: 1, y: 0 },
                      hide: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 1 }}
                  >
                    <div className="content">
                      <a
                        data-fancybox="gallery"
                        href={`assets-new/images/gallery/${item.imgSrc}`}
                      >
                        <img
                          src={`../../assets-new/images/gallery/${item.imgSrc}`}
                          alt=""
                          className="byebye"
                        />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Fancybox>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrangeStudio;
