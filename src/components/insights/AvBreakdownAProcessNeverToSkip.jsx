import "./styles/AvBreakdownAProcessNeverToSkip.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const AvBreakdownAProcessNeverToSkip = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog AvBreakdownAProcessNeverToSkip">
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
                AV Breakdown - A process never to skip
              </h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    Many companies these days opt for videos as they have become
                    an essential tool for marketing. They want to engage their
                    target audiences with great visuals that tell the story of
                    their brand with exceptional audio.
                  </p>
                  <p>
                    To make a good film for a brand, writing just the script
                    isn’t enough. One must be able to convey the kind of visuals
                    that will accompany the dialogue or the voiceover.
                    Obviously, the viewers view both the streams simultaneously,
                    but making a detailed distinction between what we hear and
                    what we see, makes it easier for the makers to plan out the
                    shots.{" "}
                  </p>
                  <p>That’s where the audio visual breakdown comes in! </p>
                  <p>
                    The idea is simple. The script writer divides the page into
                    two columns, Audio and Visual and they write the visuals
                    that accompany the audio that they think would look good.
                  </p>
                  <p>This is what a basic AV breakdown looks like:</p>

                  <table>
                    <tbody>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Audio</th>
                        <th>Visual</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          Orange Videos is a{" "}
                          <a href="https://www.orangevideos.in/product-video-makers-mumbai">
                            video production agency in Mumbai
                          </a>
                        </td>
                        <td>
                          Aerial shot of Mumbai city with Orange Videos’ logo
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          We make tons of explainer, corporate, and animated
                          videos
                        </td>
                        <td>Orange Videos’ reel plays</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>And this is how we make our AV Breakdowns</td>
                        <td>Shot of an AV Breakdown on the screen</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    This format isn’t necessary, but advisable. It helps the
                    scriptwriter to convey their thoughts on the visuals, pace,
                    and tone to the Director. This format of writing is
                    important in scriptwriting more than any other forms of
                    writing, because it breaks down the script into two halves,
                    making it easier for everyone to be on the same page, quite
                    literally!
                  </p>

                  <p>
                    Keeping in mind that videos are primarily a visual medium,
                    and it is a great format to tell stories, it is important to
                    convey as much information about the visuals as possible to
                    the client and the team to avoid any miscommunication.
                  </p>

                  <p>
                    Once the script is green-lit, the scriptwriter wants to make
                    sure that everyone says yes to the same script. Everyone
                    from the client to the director should be visualizing the
                    script as it is originally intended. It all comes down to
                    the fact that if you are not specific, it will be extremely
                    easy for the entire crew to go off-course.{" "}
                  </p>

                  <p>
                    AV Breakdowns are a quick cheat sheet to making a film. It
                    is the stage in the pre-production where the film comes
                    together for everyone. Now that the pre-production is solid,
                    the team can concentrate on translating this breakdown to
                    screen.{" "}
                  </p>

                  <p>
                    This pre-production stage of work is absolutely worth
                    spending time on and getting a buy-in from internal and
                    external stakeholders of the video.{" "}
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

export default AvBreakdownAProcessNeverToSkip;
