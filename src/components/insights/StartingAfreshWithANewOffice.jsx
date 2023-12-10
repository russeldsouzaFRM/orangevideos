import { Link } from "react-router-dom";
import "./styles/StartingAfreshWithANewOffice.css";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const StartingAfreshWithANewOffice = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog StartingAfreshWithANewOffice">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center ">
                <h4>
                  <Link to="/">home</Link> - Blog
                </h4>
                <h2 className="StartingAfreshWithANewOffice">New Office</h2>
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
              <h2 className="sec_title">Starting Afresh with a New Office</h2>
            </div>
          </div>
          <section id="blog-post">
            <article>
              <div className="article-body">
                <div className="post-content">
                  <p>
                    The un-lockdown phase has transformed the experience of work
                    life. Coming back to the office, a lot more has changed
                    besides the breakthrough of monotony. With less traffic on
                    the roads and switching to private commutes as a part of
                    safety, there’s now room for leisure activities, coming back
                    home. Travelling to the office is a lot less stressful now
                    and we, at Futuready Media took this opportunity to make it
                    something to look up to as well by moving into a brand-new
                    office! With the new year approaching, we leveled-up to
                    generate better and brighter ideas for our clients by
                    growing the space for our growing team!
                  </p>
                  <p>
                    Our new office got pampered with a welcoming puja and a
                    renewed enthusiasm from our side to drive our agency towards
                    prosperity and success. The new office reflects our agency
                    perfectly - it's elegant, bright, spacious, and well
                    accommodated with a lounge to unwind or brainstorm ideas,
                    potted plants and eye-catchy paintings, a coffee machine to
                    let the aroma of coffee mingle around us, and of course, a
                    bottle of sanitizer on the working desk to kick-out germs!
                    We also have a large terrace area where we bond and
                    de-stress by playing football, trying out hoverboarding or
                    just conversing with our close colleagues. An open space
                    leads to an open mind a.k.a better ideas!
                  </p>
                  <p>
                    Keeping the safety of our teammates in mind and also making
                    the change more gradual for them, each of us began visiting
                    the office only once a week. Let's get to know their
                    experience coming back to the office, that too a new one.{" "}
                  </p>
                  <p>
                    Smita Sahu, our Content Manager shares, "During the lockdown
                    phase, I had gotten quite comfortable working from home. I
                    hesitated to step out, but with my supportive colleagues
                    around, I quickly gelled into the new setup and began
                    looking forward to the office days."
                  </p>
                  <p>
                    Karen, our Creative Head exclaims, "Getting a chance to
                    personalize our new office was something really exciting for
                    me. I actively participated in it and thoroughly enjoyed it
                    as well."
                  </p>
                  <p>
                    Somshekhar mentions, "Coming back to the office, that too a
                    new one, perfect! I got a much-needed kickstart in my work
                    life which positively impacted other areas of my life too.
                    The modern space is a perfect fit for our agency!"
                  </p>
                  <p>
                    Prateek says, "I welcomed the change wholeheartedly and
                    adapted quickly. Honestly, I was missing the morning hustle
                    to the office and the group brainstorming sessions!"
                  </p>
                  <p>
                    Rachna recollects, "The transition into the new office was
                    overwhelming but also refreshing. I would like to use this
                    chance to appreciate the coffee machine that's there - a cup
                    of coffee sets the day!"
                  </p>
                  <p>
                    With this little sneak-peek into our new office, we welcome
                    you to the place where we blend creativity with technology
                    to revolutionize digital marketing for brands.
                  </p>
                </div>

                <div id="blog-post-gallery">
                  {/* <!--      <div className="article-share-links">-->
                          <!--          <h4 className="visible-xs">Share this</h4>-->
                          <!--          <ul className="list-unstyled clearfix">-->
                          <!--              <li className="hidden-xs">-->
                          <!--                  <h4>Share this</h4>-->
                          <!--              </li>-->
                          <!--              <li className="space hidden-xs"></li>-->
                          <!--              <li>-->
                          <!--                  <a className="link share-popup linkedin" href="#" target="_blank"><span className="sr-only">Share on LinkedIn</span><i className="fa fa-linkedin"></i></a>-->
                          <!--              </li>-->
                          <!--              <li>-->
                          <!--                  <a className="link share-popup facebook" href="#" target="_blank"><span className="sr-only">Share on Facebook</span><i className="fa fa-facebook"></i></a>-->
                          <!--              </li>-->
                          <!--              <li>-->
                          <!--                  <a className="link share-popup twitter" href="#" target="_blank"><span className="sr-only">Share on Twitter</span><i className="fa fa-twitter"></i></a>-->
                          <!--              </li>-->
                          <!--              <li>-->
                          <!--                  <a className="link googleplus" href="#" onclick="javascript:window.open(this.href,-->
                          <!--'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><span className="sr-only">Share on Google Plus</span><i className="fa fa-google-plus"></i></a>-->
                          <!--              </li>-->
                          <!--              <li>-->
                          <!--                  <a className="link" href="mailto:yourfriend@email.com?subject=Trolling with Dad&amp;body=Hey, check out this article on the Little Giant Design website: %0D%0A/news/trolling-with-dad/" target="_blank"><i className="fa fa-envelope-o"></i></a>-->
                          <!--              </li>-->
                          <!--          </ul>-->
                          <!--      </div>--> */}
                </div>

                {/* <!--<div id="subscribe-container" className="text-center">-->
                            <!--    <h3>Design, Marketing &amp; Technology news, Monthly (ish)</h3>-->
                        
                            <!--    <h4 id="newsletter-form-success" style="display:none;">Thanks! You've been-->
                            <!--                                subscribed.</h4>-->
                            <!--    <h4 id="newsletter-form-error" style="display:none;">Oops, there was an error.</h4>-->
                        
                            <!--    <form id="NewsletterForm" className="parsley-tooltips" data-parsley-validate="" novalidate="">-->
                            <!--        <input type="email" name="Email" id="Email" className="form-control" placeholder="jeffrey@littlegiant.co.nz" data-parsley-trigger="change" data-parsley-error-message="This is required" required="" data-parsley-id="1576">-->
                            <!--        <ul className="parsley-errors-list" id="parsley-id-1576"></ul>-->
                            <!--        <button className="btn btn-red" type="submit" id="NewsletterFormSubmit">-->
                            <!--            Subscribe-->
                            <!--            <div className="loading">-->
                            <!--                <div></div>-->
                            <!--                <div></div>-->
                            <!--                <div></div>-->
                            <!--                <div></div>-->
                            <!--                <div></div>-->
                            <!--            </div>-->
                                        
                            <!--        </button>-->
                            <!--    </form>-->
                            <!--    <p>It only takes one click to unsubscribe.</p>-->
                            <!--</div>-->
                        
                            <!--<div id="author-card">-->
                        
                            <!--    <div className="author-image">-->
                            <!--        <img className="author" src="/assets/Uploads/Erik1.jpg">-->
                            <!--    </div>-->
                        
                            <!--    <div className="author-details">-->
                            <!--        <a className="author-name" rel="author" target="_blank" href="#">Erik Hay</a>-->
                        
                            <!--        <p>-->
                            <!--            Erik held creative leadership roles at Saatchi &amp; Saatchi London, Publicis Melbourne and Clemenger BBDO Wellington before a two-year stint running a 14 strong team at Weta Workshop. As Creative Director, Erik brings to Little Giant extensive experience in crafting original and innovative concepts for a range of brands including Tourism Victoria, NZTA, NZ Post, Cadbury, Virgin Mobile, Paramount Pictures and Adidas.-->
                            <!--        </p>-->
                        
                            <!--    </div>-->
                            <!--</div>--> */}
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

export default StartingAfreshWithANewOffice;
