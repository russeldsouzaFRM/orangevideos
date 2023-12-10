import "./styles/5FactorsThatAffectThePriceOfYourVideo.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const FiveFactorsThatAffectThePriceOfYourVideo = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog FiveFactorsThatAffectThePriceOfYourVideo">
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
              <h2 className="sec_title">
                5 Factors that Affect the Price of your Video
              </h2>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    Factors that affect the cost of a video are endless. Sharing
                    some common basic ones:
                  </p>

                  <p>
                    <strong>Type of video:</strong>
                  </p>

                  <p>
                    {" "}
                    This is one of the most important factors that determines
                    the cost of a video. A 3D video would cost more than a 2D
                    animation video. A 2D video with more characters would cost
                    less than a 2D video with lesser characters. Live action
                    videos have different cost factors involved like location,
                    equipment needed, etc.
                  </p>

                  <p>
                    <strong>Length of the video:</strong>
                  </p>
                  <p>
                    {" "}
                    The calculation here is simple. A longer video will have a
                    higher cost than a shorter one. A two-minute video literally
                    has twice as many scenes as a one minute video.
                  </p>

                  <p>
                    <strong>Illustration Style:</strong>
                  </p>
                  <p>
                    A video using vector shapes and images takes less time and
                    effort than a video that requires drawing and designing a
                    character.
                  </p>

                  <p>
                    <strong>Voice-Over Artist:</strong>
                  </p>
                  <p>
                    {" "}
                    Voice artists charge according to their versatility and
                    experience. Also, the cost differs depending on the length
                    of the script. A video that demands more than one voice
                    artist, will incur a higher cost.
                  </p>

                  <p>
                    <strong>Timelines:</strong>
                  </p>
                  <p>
                    A video requirement that is urgent and requires burning the
                    midnight oil will cost more than a video which has
                    reasonable and fair timelines.
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

export default FiveFactorsThatAffectThePriceOfYourVideo;
