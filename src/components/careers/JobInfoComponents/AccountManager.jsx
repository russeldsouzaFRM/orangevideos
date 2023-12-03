import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/careers.css";
import "../../styles/account-manager.css";
import { motion } from "framer-motion";

const AccountManager = () => {
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
        className="pageBanner careers-banner"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <Link to="/">home</Link> - <Link to="/careers">careers</Link>{" "}
                  - Account Manager
                </h4>
                <h2>Account Manager</h2>
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
              <h3>Qualification: Any Graduate / Post graduate</h3>
              <h3>Experience: 1 - 2 years</h3>
              <h3>Salary: 25k gross</h3>
              {/* <!--<h3>Skills: Adobe Premiere, After effects, Photoshop and illustrator will be added on bonus</h3>-->
                        <!--<p className="sec_desc color_aaa">-->
                        <!--    We are looking for an organised and creative Videographer to work with our creative team to plan, film and edit video content according to client briefs. We expect our Videographer’s responsibilities to include ensuring that the necessary filming equipment is available for use, directing other camera operators on set and editing film footage.-->
                        <!--</p>-->
                        <!--<p className="sec_desc color_aaa">-->
                        <!--    To succeed as a Videographer you must be able to understand client briefs and work creatively to produce the desired product. A good Videographer should stay up to date with industry trends and tools that will make projects more marketable.-->
                        <!--</p>--> */}
              <h3>Responsibilities:</h3>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Work proactively to
                  provide the client with the internal team.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Coordinate with the team
                  and manage resources to get the results and deliverables for
                  the client duly fulfilled as per deadlines.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Receives client
                  briefings, and analyzes the input of client together with
                  background knowledge, followed by content curation to produce
                  the final document to the creative team.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Provides creative
                  personnel with well-documented input and support data as
                  required; ensures that advertising strategies are clearly
                  defined, approved by clients, and understood by the creative
                  team.
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Writing and
                  conceptualizing project creative briefs
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Should be a self-starter
                  and capable of operating on minimal management
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Ensures prompt
                  collection of account receivables and ensures that they don- t
                  exceeds the given limits.
                </li>
              </ul>
              <h3>Skills:</h3>
              <ul className="mb-3">
                <li>
                  <i className="fa fa-check-square"></i>Content Writing Skill is
                  a must
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Ambitious and Team
                  Player
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Multitasker
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Strong Communication and
                  Marketing Skills
                </li>
                <li>
                  <i className="fa fa-check-square"></i>Proactive and Energetic
                </li>
              </ul>

              <div className="">
                <Link className="common_btn" to="/account-manager-apply">
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

export default AccountManager;
