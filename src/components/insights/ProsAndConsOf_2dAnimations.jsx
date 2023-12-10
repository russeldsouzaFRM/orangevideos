import "./styles/ProsAndConsOf_2dAnimations.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const ProsAndConsOf2dAnimations = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog ProsAndConsOf_2dAnimations">
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

      {/* section 1 */}
      <section className="commonSection blogPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="sec_title">Pros and Cons of 2D Animations</h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    2D vector-based animation is the most common style of
                    animation that represents graphics that are created in
                    2-dimension. They are most popular for use in branding and
                    marketing due to the scalability and ease of distribution.
                    If created well, they are one of the most captivating
                    videos.
                  </p>
                  <p>
                    Here are some advantages and disadvantages of 2D animation
                    videos.
                  </p>

                  <p>
                    <strong>Advantages:</strong>
                  </p>

                  <p>
                    {" "}
                    Quick to Produce: There are many new softwares that aid in
                    faster production of 2D videos.{" "}
                  </p>
                  <p>
                    Reasonable Cost: 2D animation is far more reasonable than
                    3D, live shoot or purchasing stock footage to create a
                    video.
                  </p>

                  <p>
                    Customisable: This is one of the most compelling benefits of
                    2D animation. You can customize the entire video just to
                    your liking, right from colours, elements to be used, etc.
                  </p>

                  <p>
                    Easy to Fix: In case of any errors/changes and edits, it is
                    easier to rectify 2D animations.
                  </p>

                  <p>
                    Tried and Tested: This animation style has been around for
                    years and most vouch for it.
                  </p>

                  <p>
                    Less Complex: Creating a 2D animation video is far less
                    complex than working on 3D animation or live shoots.
                  </p>

                  <p>
                    <strong>Disadvantages:</strong>{" "}
                  </p>
                  <p>
                    Less Dynamic: 2D animations can be less dynamic as compared
                    to 3D. If you want to show a 360-degree view of an element,
                    it is best done in 3D.
                  </p>
                  <p>
                    May Have Higher Cost: When the video length is long and too
                    many elements are to be animated, there could be an
                    additional cost incurred.
                  </p>
                  <p>
                    Expertise: 2D animation videos require someone who can draw
                    and sketch well followed by one who creates great graphics.{" "}
                  </p>
                  <p>
                    Lacks Uniqueness: Most animation videos have some graphic
                    styles that are common in many videos.{" "}
                  </p>
                  <p>
                    Having evaluated the pros and cons of 2D animation videos,
                    we would still suggest they are a good bet and work wonders
                    if well directed. They are great for story telling, social
                    media posts, explainer videos etc.
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

export default ProsAndConsOf2dAnimations;
