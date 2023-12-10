import { useEffect } from "react";
import TabComponent from "./TestComponent";
import "../styles/Portfolio.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const PortfolioPage = () => {
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
        className="pageBanner portfolio-banner PortfolioPage"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - portfolio
                </h4>
                <h1>portfolio</h1>
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
        className="commonSection porfolioPage"
      >
        <TabComponent />
      </motion.section>
    </>
  );
};

export default PortfolioPage;
