import "./styles/OurCorporateVideoProductionWorkflow.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurCorporateVideoProductionWorkflow = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog OurCorporateVideoProductionWorkflow">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center ">
                {/* <!--<h4><a href="#">home</a> - Blog</h4>-->
                            <!--<h2>Benefits of using stock footage in videos</h2>--> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="commonSection blogPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="sec_title">
                Our Corporate Video Production Workflow
              </h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    Creating a successful video within deadlines is possible
                    when you follow a process/workflow. As a{" "}
                    <a href="https://www.orangevideos.in/professional-corporate-film-video-production-agency-mumbai">
                      corporate video production agency
                    </a>
                    , we follow a process to ensure we deliver the best quality
                    output to our clients.
                  </p>
                  <p>
                    The video production process involves a few stages right
                    from conception to its distribution.
                  </p>

                  <p>
                    <strong>Development:</strong>
                  </p>

                  <p>
                    This is the first stage where we plan and conceptualize a
                    script. After approval of the script, we work on the
                    audio-visual breakdown and the storyboard. We set the budget
                    and begin taking auditions and search for appropriate
                    locations.{" "}
                  </p>

                  <p>
                    <strong>Pre-production:</strong>
                  </p>
                  <p>
                    During the pre-production stage, we finalise the cast, shoot
                    date and locations. We line up crew members, work on the
                    sets and costumes. This is a time consuming stage but
                    ensures that everything is in place to avoid chaos and
                    confusion during the next stage.
                  </p>

                  <p>
                    <strong>Production:</strong>
                  </p>
                  <p>
                    Here, we begin the main work keeping in mind the schedule
                    and budget. Our director ensures there is clear
                    communication between the cast and crew and everything goes
                    as planned.
                  </p>

                  <p>
                    <strong>Post-production:</strong>
                  </p>
                  <p>
                    The first draft of the video is drafted after adding sound
                    effects, visual effects, supers etc. The editor begins
                    adding/adjusting footage as per the feedback from the
                    client.
                  </p>

                  <p>
                    <strong>Distribution:</strong>
                  </p>
                  <p>
                    This is the last stage of the production process. The video
                    then goes out either on social media platforms, YouTube, the
                    company website etc.
                  </p>

                  <p>
                    We stringently follow the above steps to keep our video
                    project on track, in terms of quality, deadlines and budget.
                  </p>
                </div>

                <div id="blog-post-gallery"></div>
              </div>
              {/* <!-- /#blog-post-gallery --> */}
            </article>

            {/* <!-- /#blog-post --> */}
            {/* <!-- /.col --> */}
          </section>
        </div>
        {/* <!-- /.row --> */}
      </section>
    </>
  );
};

export default OurCorporateVideoProductionWorkflow;
