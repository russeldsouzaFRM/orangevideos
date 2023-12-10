import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const VideoStrategy = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog VideoStrategy">
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
      <section class="commonSection blogPage">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 class="sec_title">Video Strategy</h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div class="article-body">
                <div class="post-content">
                  <p>
                    Today, brands can no longer get by using just written
                    content and images. To interest and engage consumers, it is
                    important to include live streaming, interactive 360 videos,
                    augmented reality, and more
                  </p>
                  <p>
                    Video is the most important piece of the modern marketing
                    mix. After all, it’s how people today are spending their
                    time: watching online{" "}
                    <a href="https://www.orangevideos.in/the-importance-of-video-content-on-social-media">
                      video content
                    </a>
                    . 80% of businesses use video as a marketing tool and 8 in
                    10 people have been convinced to buy a product or service by
                    watching a brand’s video.
                  </p>

                  <h3>
                    <strong>How to plan your brand’s video strategy?</strong>
                  </h3>

                  <p>
                    Your video marketing strategy will ultimately be what guides
                    you - your budget, your timelines, your production
                    processes, your conversion metrics, and more. At Orange
                    Videos, we suggest an easy framework to begin the thought
                    process.
                  </p>

                  <ul>
                    <li>1) Begin with your video goals.</li>
                    <li>2) Identify your target audience. </li>
                    <li>3) Figure out the story you want to tell. </li>
                    <li>4) Be creative.</li>
                    <li>5) Create a timeline.</li>
                    <li>6) Maintain a realistic budget.</li>
                  </ul>

                  <p>Let’s look at each one of these in detail.</p>

                  <h3>
                    <strong>What is the goal?</strong>
                  </h3>
                  <p>
                    A typical marketing funnel has 5 stages and videos can be
                    used in each of these stages. However, you need to develop
                    your video content strategy to specifically target your
                    customer in each of these stages. The goals you set for your
                    video marketing should consider where your audience falls in
                    the funnel.
                  </p>
                  <p>
                    Videos can be used for brand awareness at the top of the
                    funnel, for providing use cases and social proof in the
                    middle and to demonstrate product working at the bottom of
                    the funnel.
                  </p>

                  <div style={{ textAlign: "center" }}>
                    <p>
                      <img
                        src="assets-new/images/services/funnel.png"
                        style={{ width: "55%" }}
                        alt=""
                      />
                    </p>
                    <br />
                  </div>
                  {/* <!--<p><img src="assets-new/images/services/ov-funnel.png"></p>--> */}

                  <h3>
                    <strong>Who is your target audience?</strong>
                  </h3>
                  <p>
                    All successful marketing campaigns start with the same
                    question – who are you targeting? It then follows what kind
                    of content will resonate with them and where (channels) that
                    they are most likely to be on.
                  </p>
                  <p>
                    The good news is that most products ad services are brought
                    to life with an ideal buyer persona in mind. However, it
                    makes sense to refine and answer specifics about what your
                    video will say - the key message and the desired call to
                    action, how will it say it - the style and the tone of the
                    video and where will it be seen - the distribution to reach
                    out to the audience where they are most likely to watch it,
                    engage with it and then take action on it.
                  </p>

                  <h3>
                    <strong>What’s your story?</strong>
                  </h3>
                  <p>
                    Products and services are bought as much for their emotional
                    benefits as they are for their functional benefits. Every
                    product is a reaction to a problem and aspires to solve the
                    problem for the user. The classic video storytelling
                    framework works on the problem-solution structure. Here, a
                    protagonist with a goal is the customer demographic you are
                    targeting. The conflict is the customer’s pain point - where
                    he / she is getting stuck and looking for a resolution. The
                    solution is your product and the reasons to buy are the
                    product’s features and benefits.{" "}
                  </p>

                  <h3>
                    <strong>What are the creative requirements?</strong>
                  </h3>
                  <p>
                    Are you going to create an animated video or a live-action
                    video? The most important thing to choose is the style of
                    the video. There are multiple treatment options available in
                    both these broad styles. You must think about the creative
                    roadblocks that might arise.
                  </p>

                  <h3>
                    <strong>What’s your timeline?</strong>
                  </h3>
                  <p>
                    Video projects usually take longer than expected. That’s
                    because there are multiple steps involved in converting your
                    vision into reality. Concept, script, graphics, storyboards,
                    animations, music, voiceover - all need to go through
                    multiple stages of approvals and work well together.
                  </p>
                  <p>
                    For planning a video, consider 3 timelines - video strategy,
                    video production and video distribution.
                  </p>
                  <p style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src="../../assets-new/images/services/time_2.png"
                      alt=""
                    />
                  </p>

                  <h3>
                    <strong>What’s the budget?</strong>
                  </h3>
                  <p>
                    This is perhaps the toughest question to answer. Without a
                    proper budget, it is difficult to ascertain what can be
                    delivered. Do remember a few cost factors - animation videos
                    are priced by the duration of the video, whereas the major
                    cost in a live action video is the number of shoot days and
                    the length of the edit.{" "}
                  </p>
                  <p>
                    A low budget might be good to engage a freelancer, whereas
                    an experienced agency like Orange Videos could be engaged
                    for a larger requirement - corporate video film, brand
                    videos, digital commercials and high quality animation
                    explainer videos.
                  </p>
                  <p>
                    To know more about the cost factors in making a video,
                    please <Link to="/contact">get in touch </Link>
                    with us.
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

export default VideoStrategy;
