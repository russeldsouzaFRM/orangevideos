import Slider from "react-slick";

const AboutTeams = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <div className="team_slider slick-initialized slick-slider slick-dotted"> */}
      <div className="slick-list draggable" style={{ padding: "0px 40px" }}>
        <Slider {...settings}>
          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/prateek_profile.jpg"
                alt=""
              />
            </div>
            {/* <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=dyDzTRbokA0"
                tabindex="-1"
              >
                <i className="fa fa-play"></i>
              </a> */}
            <div className="detail_TM">
              <h5>Prateek Tewari</h5>
              <h6>Production Lead</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/shreyashi.jpg"
                alt=""
              />
            </div>
            {/* <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=QAVWyUy0jF0"
                tabindex="-1"
              >
                <i className="fa fa-play"></i>
              </a> */}

            <div className="detail_TM">
              <h5>Shreyashi Debnath</h5>
              <h6>Art Director</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/pradu_profile.jpg"
                alt=""
              />
              <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=BMEFLNf8_Vw"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <div className="detail_TM">
              <h5>Pradyumna Chopde</h5>
              <h6>Graphic Designer</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/abhishek-kollat-v2.jpg"
                alt=""
              />
            </div>
            {/* <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=GalyeiTohOI"
                tabindex="0"
              >
                <i className="fa fa-play"></i>
              </a> */}
            <div className="detail_TM">
              <h5>Abhishek Kollat</h5>
              <h6>Video Editor</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/akash_profile.jpg"
                alt=""
              />
            </div>
            <div className="detail_TM">
              <h5>Akash Patel</h5>
              <h6>Motion Graphic Designer / Animator</h6>
            </div>
            {/* <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=QAVWyUy0jF0"
                tabindex="-1"
              >
                <i className="fa fa-play"></i>
              </a> */}
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/rachana_profile1.jpg"
                alt=""
              />
              <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=QAVWyUy0jF0"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <div className="detail_TM">
              <h5>Rachna Dadlani</h5>
              <h6>Content Head</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/amey_profile.jpg"
                alt=""
              />
              <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=GalyeiTohOI"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <div className="detail_TM">
              <h5>Amey Asuti</h5>
              <h6>Founder</h6>
            </div>
          </div>

          <div className="singleTM">
            <div className="tm_img singlefolio mb-0">
              <img
                src="../assets-new/images/about/team/Abishek_profile.png"
                alt=""
              />
            </div>
            {/* <a
                className="popup-youtube video_popup video_popup_custom"
                href="https://www.youtube.com/watch?v=QAVWyUy0jF0"
                tabindex="-1"
              >
                <i className="fa fa-play"></i>
              </a> */}
            <div className="detail_TM">
              <h5>Abhishek Chaturvedi</h5>
              <h6>Video Editor</h6>
            </div>
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </>
  );
};

export default AboutTeams;
