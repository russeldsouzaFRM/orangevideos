import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const HomeSection6 = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const carouselBrandData = [
    {
      name: "Mega Pipes",
      subHead: "",
      img: "../../assets-new/images/homepage/Mega-Pipes.png",
      description:
        "Working with Orange Videos' entire crew was simply too wonderful. Everything was well planned, from the planning stages to the implementation. Each team executed its tasks flawlessly, and the team members' communication was excellent. They gave their finest ideas at every turn, and the result was a fantastic video showcasing our brand-new business. Keep up the wonderful job, folks!",
    },
    {
      name: "Entropik Tech",
      subHead: "",
      img: "../../assets-new/images/homepage/Entropik.png",
      description:
        "I absolutely loved the team's attitude towards the work assigned. All of them were very cordial and helpful throughout and most importantly, receptive towards the feedback shared. As a point for improvement, I feel the ideation can be better. The suggestions for enhancement were slightly lacking. While the video was a good show, I still feel the photoshoot experience was entirely vice-versa. Nonetheless, keep up the good work, team!",
    },
    {
      name: "Symbo",
      subHead: "",
      img: "../../assets-new/images/homepage/Symbo.png",
      description:
        "We recently collaborated with Orange Videos for a video for our company, Symbo and they did a fabulous job! Everything was conducted timely and in an orderly manner, right from the setup to the post-production. It was a great experience working with them as they helped us achieve our vision with their expertise. They made quite a few revisions to the script and the animation as per our feedback and still delivered the final film as per the deadline decided.",
    },
    {
      name: "Yannick Brewart ",
      subHead: "Assistant Manager Marketing",
      img: "../../assets-new/images/homepage/tata-testimonial.jpg",
      description:
        "Great turnaround from Orange Videos, considering the stringent deadlines!",
    },
    {
      name: "Amrita Deb ",
      subHead: "Marketing Manager",
      img: "../../assets-new/images/homepage/coats-testimonial.jpg",
      description:
        "Wanted to share the feedback on the Down Leakage solution video. It’s really got a lot of appreciation from Global teams. You guys have done a fantastic job!",
    },
    {
      name: "Siddhant Bhandhari ",
      subHead: "Analyst",
      img: "../../assets-new/images/homepage/bpep-testimonial.jpg",
      description:
        "Thank you Amey, Prateek and the entire Orange Videos team for conducting the shoot for us. I think everything was done properly. The costumes, the stylist, the makeup and everything was great! We hope to work with them again and for our portfolio companies as well.",
    },
    {
      name: "Madhava Sripada",
      subHead: "Deputy Manager (Sales)",
      img: "../../assets-new/images/homepage/jmc-testimonial.jpeg",
      description:
        "The team is professional, courteous, and easy to work with. Please feel free to give out my name as a reference, I will happily give you the highest recommendation. I look forward to working with you again soon.",
    },
    {
      name: "Rovina Adenwalla",
      subHead: "Corporate Communications",
      img: "../../assets-new/images/homepage/cms-testimonial.jpeg",
      description:
        "It was a dream working with Orange Videos. They always seemed to be three steps ahead of me, with patience, diligence and excellent punctuality. One of the best product videos that I have created ever, thanks to Orange Videos.",
    },
    {
      name: "Garima Sharma",
      subHead: "Marketing Manager",
      img: "../../assets-new/images/homepage/lorel-testimonial.jpeg",
      description:
        "We were really under the gun with the minimal time we had. Orange Videos did a great job without balking at the timeline and we appreciate their efforts.",
    },
  ];

  const [selectCarousel, setSelectCarousel] = useState(carouselBrandData[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  //   useEffect(() => {
  //     carouselBrandData.map((items, ind) => {
  //       console.log([items.name === "Garima Sharma" ? items : null]);
  //     });
  //   }, []);

  const getCaroData = ({ items, ind }) => {
    setSelectCarousel(items);
    setActiveIndex(ind);
  };

  return (
    <section className="commonSection testimonial_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-5">
            <h4 className="sub_title red_color">our testimonials</h4>
            <h2 className="sec_title white">happy customers</h2>
            <div className="testimoniTab">
              <ul className="testimoniTab">
                <Slider {...settings}>
                  {carouselBrandData.map((items, ind) => {
                    return (
                      <li className="control_item" key={ind}>
                        <a
                          role="button"
                          href="javascript:void(0);"
                          onClick={() => getCaroData({ items, ind })}
                        >
                          <span>
                            <img src={items.img} alt={items.name} />
                          </span>
                          <div className="author_detail">
                            <h5>{items.name}</h5>
                            <h6>{items.subHead}</h6>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </Slider>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-sm-7">
            <div className="testi_con">
              <div className="slick-dots-container">
                {carouselBrandData.map((num, index) => {
                  return (
                    <div
                      className={`slick-dot ${
                        index === activeIndex ? "active" : "notActive"
                      }`}
                      key={index}
                    ></div>
                  );
                })}
              </div>
              <p>{selectCarousel.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
