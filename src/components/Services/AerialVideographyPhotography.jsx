import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const AerialVideographyPhotography = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog AerialVideographyPhotography">
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
                Aerial Videography &amp; Photography
              </h1>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    Aerial photography (or airborne imagery) is the taking of
                    photographs from aircraft and helicopters or other airborne
                    devices like drones. When taking motion pictures, it is also
                    known as aerial videography.
                  </p>
                  <p>
                    At Orange Videos, we take breathtaking drone photos and
                    videos, capturing the most captivating landscapes,
                    properties and events that are otherwise difficult to
                    witness. Our drone cinematographers are experts in a wide
                    variety of techniques and have vast experience of working in
                    myriad scenarios: tourism, real estate, industrial
                    walkthroughs, event coverage and so on.
                  </p>
                  <p>
                    Drones help us discover amazing views and new perspectives.{" "}
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

export default AerialVideographyPhotography;
