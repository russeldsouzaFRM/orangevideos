import "./styles/TheImportanceOfStoryboarding.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const TheImportanceOfStoryboarding = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog TheImportanceOfStoryboarding">
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
              <h2 className="sec_title">The importance of storyboarding</h2>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    A storyboard is a set of images/illustrations organized in a
                    sequence for pre-visualising a motion picture/animation. It
                    is a very important part of the pre-production process
                    because it clearly conveys how the story will flow, and
                    allows you to see potential problems, ultimately saving you
                    time and money{" "}
                  </p>
                  <p>We’d like to share the importance of storyboarding:</p>

                  <p>
                    <strong>Concept Feasibility:</strong> A storyboard helps
                    identify whether a concept will work or not. A storyboard
                    helps the client or the course owner validate whether the
                    concept is working or not, and determine the direction the
                    course is going to take.{" "}
                  </p>

                  <p>
                    <strong>Aligning Dialogues and Visuals:</strong> This is a
                    great stage to align your narrative and visuals. You can
                    have a clear picture of what visuals appear frame by frame
                    as per the narrative.
                  </p>

                  <p>
                    <strong>Identify Errors:</strong> It is at the storyboarding
                    stage that you can best identify errors. You can incorporate
                    new ideas, slides etc and fill in gaps wherever needed.
                  </p>

                  <p>
                    <strong>Saves Time:</strong> All of the scenes are put
                    together well before the animation/shoot starts. Any changes
                    that need to be made can and should be made beforehand -
                    this helps in maintaining project deadlines.
                  </p>

                  <p>
                    <strong>Effective Budget Utilization:</strong> When the
                    animation is complex, it takes a lot of time and money to
                    develop the final product. Getting approval on the
                    storyboard from the client is the right way forward. The
                    storyboard helps to envision what the final product will
                    look like.
                  </p>

                  <p>
                    <strong>Speeds up production/animation:</strong> Once the
                    storyboard is good to go, the entire production/animation
                    process is smoother and faster. Also, you can expect minimal
                    edits in the final product.
                  </p>

                  <p>
                    So, to keep your video projects on track, never miss out on
                    the storyboarding stage.
                  </p>
                </div>

                <div id="blog-post-gallery"></div>
              </div>
              {/* <!-- /#blog-post-gallery --> */}
            </article>

            {/* <!-- /#blog-post -->
                <!-- /.col --> */}
          </section>
        </div>
        {/* <!-- /.row --> */}
      </section>
    </>
  );
};

export default TheImportanceOfStoryboarding;
