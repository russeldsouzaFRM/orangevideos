import "./styles/ImportanceOfProductionDesign.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const ImportanceOfProductionDesign = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog ImportanceOfProductionDesign">
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
              <h1 className="sec_title">Importance of Production Design</h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    Production design is an integral part of the video-making
                    process. As videos are an audio-visual medium, it is obvious
                    that the audience will remember what they see in the video.
                    The filmmakers must pay equal attention to making the
                    visuals beautiful with the help of proper set design, props,
                    costumes, etc. rather than just focusing on the cameras,
                    lenses and lights.{" "}
                  </p>
                  <p>
                    A well-thought-out narrative and an excellent script aren’t
                    enough to make a video. A video becomes memorable when it is
                    visually striking. This is where production design comes
                    into play.
                  </p>
                  <p>
                    For example, we made a series of videos for Sharekhan, where
                    they wanted to educate their audience about different
                    theories in economics. In the first part of the series, we
                    created a scene where students talk about economics at the
                    tea stall they regularly go to. For this, we created a set
                    with a tea stall, on top of a building, against an exciting
                    backdrop of buildings that can easily pass off as a college
                    campus. The actors who played the characters of students
                    were dressed in college attire and carried college bags and
                    books, whereas the professor was dressed formally.{" "}
                  </p>

                  <h2>
                    Production design immerses you in the world of the video:
                  </h2>

                  <p>
                    Since production design encompasses all the visual aspects
                    of the video, it helps the viewers immerse in the world of
                    the video.
                  </p>
                  <p>
                    For example, we created a video for Symbo Insurance, showing
                    their claims process. We created a narrative that takes
                    place in an eyeglasses store. To create the world of the
                    video, the set designer came up with ideas for a
                    make-believe store. We used props like sunglasses stands,
                    spare eyeglasses, and a cloth to clean them. We even worked
                    on the costumes to ensure that the clothes speak volumes
                    about the characters wearing them.{" "}
                  </p>

                  <p>
                    This helped us create a visually compelling video for Symbo
                    Insurance.
                  </p>

                  <h2>
                    Production Design makes the video more believable and
                    credible:
                  </h2>
                  <p>
                    Through research, references and resourcing, production
                    design helps create a realistic and trustworthy world.
                  </p>

                  <p>
                    Coming back to the video we made for Sharekhan, the tea
                    stall we built was through several references of tea stalls
                    that we visited all our lives. Packets of biscuits, jars
                    filled with snacks, kettles, and a stove, does that sound
                    like a place you’d have visited at least once?
                  </p>

                  <p>
                    We were able to achieve this through research and picking up
                    instances from our own lives to make it look and feel
                    credible and realistic.{" "}
                  </p>

                  <p>
                    Production design works best by mixing the mood, theme and
                    characters of the film. Along with thorough research, one
                    can create visually pleasing videos that will be memorable
                    for the audience.
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

export default ImportanceOfProductionDesign;
