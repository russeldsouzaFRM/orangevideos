import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react'

const CorporatePhotoshootsAgencyMumbai = () => {
const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner insights-banner-blog CorporatePhotoshootsAgencyMumbai">
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
                        <h1 className="sec_title">Photoshoots</h1>
                    </div>
                </div>
                <section id="blog-post">
                    <article>
                        <div className="article-body">
                            <div className="post-content">
                            
                                <p><strong>What is product photography?</strong></p>
                                
                                <p>These days <a href="https://www.orangevideos.in/portfolio">product photography</a> is also known as e-commerce photography as the photos and videos are taken with an intent to use them on websites and on social media to drive sales. If you are planning to sell your products online then good quality photography is a non-negotiable. Pictures and videos enhance the appeal of your products and persuade casual browsers to become interested customers. </p>
                                
                                <p><strong>Why is product photography important?</strong></p>
                                <p>The best ecommerce websites not only have great products, but also great photos of their products. With the proliferation of online shopping, the choice of products available to customers is vast - meaning photos that best illustrate what you’re selling are the ones that capture their interest the most. Product photography extends far beyond showing what a product looks like. Considered photos show products in a context, helping customers see how exactly these would fit into their lives and surroundings. Vivid product imagery helps boost the brand and what it stands for. It brings out the best features and USPs of the products, driving attention to details that would otherwise be difficult to point to.</p>
                                    
                                <p><strong>Types of product photography</strong></p>
                                <p>Product photos are shot in a variety of styles and serve different purposes. Some are for everyday use while others are for special purposes only.  It is important to understand how each type of product photo is shot and what purpose it serves.</p>
                               
                                 <p><strong>The individual shot.</strong></p>
                                <p>The individual shot is the lone product shot. It is the most common type of product photo where the attention is on a single product. It is used on websites, on product pages, on ecommerce websites, in product catalogs and other marketing collateral. Usually shot against a white background, this photo provides a clean, simple look and brings the focus on the product.</p>
                               
                                 <p><strong>Group shots</strong></p>
                                <p>Group shots showcase multiple products together. These shots are good to give a sense of a family of products, a collection or a range. Group shots are used to display variety and give the customer a sense of the complete range and depth of a brand’s portfolio. </p>
                               
                                 <p><strong>Lifestyle shots</strong></p>
                                <p>Lifestyle shots give a context to the products and show them in a setting that is instantly familiar to the audience - either in their everyday lives or in a glamorous setting. Such images are used in social media, website, emailers and digital ads. </p>
                               
                                 <p><strong>Scale shots</strong></p>
                                <p>A common issue with online shopping is that one is left guessing about the actual size and dimensions of the products. Product descriptions do mention the dimensions and other such details. But products with fine design like jewellery, electronics and even furniture is better shown with everyday objects next to them to provide a sense of proportion with items of everyday use.</p>
                               
                                 <p><strong>Packaging shots</strong></p>
                                <p>Also called pack shots. Customers do judge the products by the packs they arrive in. Product pack shots provide a look into the beautiful packaging design that makes products appealing. Electronics, cosmetics, food items - all are showcased through pack shots that customers relate to instantly.</p>
                               
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
  );
};

export default CorporatePhotoshootsAgencyMumbai;
