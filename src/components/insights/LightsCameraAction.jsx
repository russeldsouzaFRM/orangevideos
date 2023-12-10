import { Link } from "react-router-dom"
import "./styles/LightsCameraAction.css"
import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react'

const LightsCameraAction = () => {

const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
        {/* section 1 */}
    <section className="pageBanner insights-banner-blog LightsCameraAction">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner_content text-center ">
                            <h4><Link to="/">home</Link> - Blog</h4>
                            <h2 className="LightsCameraAction">Lights, Camera, Action!</h2>
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
                        <h1 className="sec_title">Orange Videos Presents<br /> Avinab Saha - The Business Development Manager</h1>
                    </div>
                </div>
                <section id="blog-post">
                    <article>
                        <div className="article-body">
                            <div className="post-content">
                                <p>Orange Videos team grew stronger with the addition of a new Business Development Manager in January 2021 – Avinab Saha. Avinab hails from the city of joy, Kolkata. He pursued Engineering in Kolkata and moved to Mumbai soon after, in 2016. His consistent efforts to bag new projects for Orange Videos have been successful and speak volumes about his quality work.</p>
                                <p>We got a chance to have a conversation with Avinab, to know more about him and his journey so far.</p>
                                <p>Before joining Orange Videos, Avinab worked in Business Development for another video-production agency. His experience and customer-centric approach have been a boon for growing OV’s business. "I enjoy my job, and have been learning every day with lots of exposure. I see great potential for my career while working with the Orange Videos team", he said.</p>
                                <p>When asked about what drew him to the city of dreams, he quipped - "Coming to Mumbai was always on my mind as the city has many job opportunities to grow one’s career. I have really enjoyed my time thus far in Mumbai. One may be alone in the city, but not lonely given the random conversations between strangers, with rickshaw walas, and the presence of people even at odd times in the night." Avinab truly believes that the city never sleeps and the persistent hard-working attitude of the city motivates him.</p>
                                <p>However, he also mentioned the struggles he faced to get the right kind of job and find a nice neighborhood to live in. Nonetheless, he is now happy to be in a much better place – a good home and an office with colleagues who welcome him with a warm heart. "What I love about working with Orange videos is the freedom to work independently, but within the deadlines. With the guidance and support of my colleagues, I am able to overcome all my challenges at work", he said.</p>
                                <p>Last year in March 2020, a Covid induced lockdown was imposed nationwide, and many people were stuck in Mumbai due to work. It was a daunting experience for everyone. Avinab shared that he too was alone in his Mumbai flat with no roommates and no help.<br />
                                ‘‘2 months of lockdown in Mumbai was one of the toughest times I have ever faced in life", he added. However, during the lockdown, he also got to polish his cooking skills. Besides, technology helped him stay virtually connected with his family and cousins through long video calls. Also playing games and watching content online also helped him stay engaged.</p>
                                <p>Avinab is a simple soul and a modest person, who gets inspired and motivated by people around him. ‘’Any hardworking person inspires me. Be it a shopkeeper running his shop or be it an international athlete’’ he added.  Given his love for dancing and acting, performing before an audience comes naturally to him. He is also die-hard fan of Bollywood movies and especially enjoys watching Priyadarshan's movies.</p>
                                <p>Avinab is hardworking and brave in his own way and knows what wants in his life. He believes in making efforts and strives to achieve success and live his dream life in Mumbai.</p>

                            </div>
                        
                            <div id="blog-post-gallery">
                            </div>                        
                        </div>
                        {/* <!-- /#blog-post-gallery --> */}
                    </article>
                
                {/* <!-- /#blog-post -->
                <!-- /.col --> */}
            </section></div>
            {/* <!-- /.row --> */}
       </section>
    </>
  )
}

export default LightsCameraAction