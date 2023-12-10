import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const data = [
//   { id: 1, category: "Fruits", name: "Apple" },
//   { id: 2, category: "Fruits", name: "Orange" },
//   { id: 3, category: "Vegetables", name: "Carrot" },
//   { id: 4, category: "Vegetables", name: "Potato" },
// ];

const data = [
  {
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc: "../../assets-new/images/portfolio/corporate-video/FSC_2023.jpg",
    name: "FSC",
    id: "1",
    yt: "https://www.youtube.com/embed/2DgXiAacGKk?si=gYfXVleznE1nvPSf",
  },
  {
    category: "animation",
    id: "2",
    cateType: "3d animation",
    imgSrc: "../../assets-new/images/portfolio/2d-animations/IDEX_2023.jpg",
    name: "Idex",
    yt: "https://www.youtube.com/embed/Vom5zM9Q_nU?si=7DI1v0D9KNDY7E39",
  },
  {
    id: "3",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc: "../../assets-new/images/portfolio/photoshoot/sapna_mats_2023.jpg",
    name: "Sapana Mats",
    yt: "https://www.youtube.com/embed/pi2Kl2tqudg?si=EMADB6Yzwk9pyqx9",
  },
  {
    id: "4",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc: "../../assets-new/images/portfolio/photoshoot/Nutralogicx_2023.jpg",
    name: "Nutralogicx",
    yt: "https://www.youtube.com/embed/CxfoE7GQslI?si=yUlHxgQUmUDoYovc",
  },
  {
    id: "5",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Baring_Private_Equity_2023.jpg",
    name: "Baring Private Equity",
    yt: "https://www.youtube.com/embed/wN12nGZx0zg?si=Y6FwqxRByyedu5GC",
  },
  {
    id: "6",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc:
      "../../assets-new/images/portfolio/photoshoot/Burans_Essence_2023.jpg",
    name: "Burans Essence",
    yt: "https://www.youtube.com/embed/RTzoBNSxax8?si=yFAgQhlhbZOxlqFq",
  },
  {
    id: "7",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc:
      "../../assets-new/images/portfolio/photoshoot/Cosmic_Bytes_2023.jpg",
    name: "Cosmic Byte",
    yt: "https://www.youtube.com/embed/wNlDQUloQyE?si=szGGmCmeNbQkZ9aS",
  },
  {
    category: "Product Videos",
    id: "8",
    cateType: "Product Videos",
    imgSrc:
      "../../assets-new/images/portfolio/photoshoot/Malabar Glod _ Diamond 2023.jpg",
    name: "Malabar Gold & Diamonds",
    yt: "https://www.youtube.com/embed/X0Mo1ZpL-Q8?si=kyduX1Zyo1fkfP2R",
  },
  {
    id: "9",
    category: "Product Videos",
    cateType: "Product Videos",
    imgSrc: "../../assets-new/images/portfolio/photoshoot/Allwin_2023.jpg",
    name: "Allwin",
    yt: "https://www.youtube.com/embed/Jcx1Nj84DjI?si=4ftZT1Br7PNDfw4D",
  },
  {
    id: "10",
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc: "../../assets-new/images/portfolio/photoshoot/Agilon_2023.jpg",
    name: "Agilon Health",
    yt: "https://www.youtube.com/embed/ybMwEmh93kI?si=nXqENNki3bart-To",
  },
  {
    category: "photoshoot",
    cateType: "photoshoot",
    imgSrc:
      "../../assets-new/images/portfolio/photoshoot/Supreme_Toys_2023.jpg",
    name: "Supreme Toys",
    yt: "https://www.youtube.com/embed/g-JPWsp8vcU?si=ni-ziFJFYQVoYHg4",
    id: "11",
  },
  {
    id: "12",
    category: "2d animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/2d-animations/Acutiy Knowledge Patner_2023.jpg",
    name: "Acuity Knowledge Partner",
    yt: "https://www.youtube.com/embed/RrV5eZj3lYs?si=03__1hWJQRPw5mvC",
  },
  {
    id: "13",
    cateType: "animation",
    category: "2d animation",
    imgSrc: "../../assets-new/images/portfolio/2d-animations/Enoviq_2023.jpg",
    name: "Enoviq",
    yt: "https://www.youtube.com/embed/TmNX1LkM0CE?si=aaK2hlY7IQMlcvqv",
  },
  {
    id: "14",
    category: "2d animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Cosmic Bytes_2023.jpg",
    name: "Cosmic byte",
    yt: "https://www.youtube.com/embed/Vz9a09yXJrE?si=aTM6LFNaPtpBB-lN",
  },
  {
    id: "15",
    category: "2d animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Advanz Pharma_2023.jpg",
    name: "Advanz pharma",
    yt: "https://www.youtube.com/embed/t5d9hM6M2j8?si=EG8ClDBsJAJgRxuW",
  },
  {
    id: "16",
    category: "2d animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/charak pharma_2023.jpg",
    name: "Charak pharma",
    yt: "https://www.youtube.com/embed/tAxu5OiqG2I?si=xW0TjC75wroDyt5Q",
  },
  {
    id: "17",
    category: "Graphic Animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Little_guru_2023.jpg",
    name: "Little pundit",
    yt: "https://www.youtube.com/embed/Co6-8Fzk6xE?si=EZZicU9jqsdlHKhq",
  },
  {
    id: "18",
    category: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Monarch Network_2023.jpg",
    name: "Monarch Networth",
    yt: "https://www.youtube.com/embed/jLjNZ-JRd1c?si=mBahBufQlbOiepqn",
  },
  {
    id: "19",
    category: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/rebel foods_2023.jpg",
    name: "Rebel foods",
    yt: "https://www.youtube.com/embed/HRgK9jUl4PI?si=YVWVMXbIBx7-Vh2Q",
  },
  {
    id: "20",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Schindler_2023.jpg",
    name: "Schindler",
    yt: "https://www.youtube.com/embed/9-N0mxL6GxY?si=Uw44OfuOhTt2rwYv",
  },
  {
    id: "21",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Suntech Realty_2023.jpg",
    name: "Suntech Realty",
    yt: "https://www.youtube.com/embed/vuN8kFCLHjY?si=Kz0cdDhnp2cGEIcF",
  },
  {
    id: "22",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/Emmbi Industries_2023.jpg",
    name: "Emmbi Industries",
    yt: "https://www.youtube.com/embed/KoeJQeHNubI?si=zuzuozd5iQL58MBs",
  },
  {
    id: "23",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc:
      "../../assets-new/images/portfolio/corporate-video/JMC Projects_2023.jpg",
    name: "JMC Projects",
    yt: "https://www.youtube.com/embed/Q1bBGhY62T4?si=phY6g0SozLEtI8J3",
  },
  {
    category: "2d animation",
    cateType: "animation",
    id: "24",
    imgSrc:
      "../../assets-new/images/portfolio/2d-animations/Econ Shipping_2023.jpg",
    name: "Econ Shipping",
    yt: "https://www.youtube.com/embed/qtELAQYDWjs?si=MwiBBboe8Tcxtvfw",
  },
  {
    id: "25",
    cateType: "animation",
    category: "2d animation",
    imgSrc: "../../assets-new/images/portfolio/2d-animations/Iball_2023.jpg",
    name: "Iball",
    yt: "https://www.youtube.com/embed/QD1vOiHz0Y4?si=lXHzI96zupwCdmyV",
  },
  {
    id: "26",
    category: "2d animation",
    cateType: "animation",
    imgSrc: "../../assets-new/images/portfolio/2d-animations/Anunta_2023.jpg",
    name: "Anunta",
    yt: "https://www.youtube.com/embed/YayTPXoSSio?si=f2Hixhr7pKaO6ZyH",
  },
  {
    category: "2d animation",
    id: "27",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/2d-animations/Malabar Glod _ Diamond_2023.jpg",
    name: "Malabar Gold",
    yt: "https://www.youtube.com/embed/OqZ94MeOgNQ?si=GW11b6TXccJQXR66",
  },
  {
    category: "2d animation",
    id: "28",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/2d-animations/Printstop_2023.jpg",
    name: "Printstop",
    yt: "https://www.youtube.com/embed/GFNvGQlEb8w?si=wKxwgXHWyq1R2IBR",
  },
  {
    category: "Product Videos",
    cateType: "Product Videos",
    id: "29",
    imgSrc: "../../assets-new/images/portfolio/product-video/Nilkamal_2023.jpg",
    name: "Nilkamal",
    yt: "https://www.youtube.com/embed/Dzql3uB8eaU?si=ic1FFjQAwMWHWQcN",
  },
  {
    id: "30",
    category: "Graphic Animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/graphic-animation/Tata Trust_2023.jpg",
    name: "Tata Trusts",
    yt: "https://www.youtube.com/embed/9qa6jgqvkNk?si=xUq1ph8oU1bRWf7I",
  },
  {
    id: "31",
    category: "Graphic Animation",
    cateType: "animation",
    imgSrc:
      "../../assets-new/images/portfolio/graphic-animation/Murgency_2023.jpg",
    name: "MUrgency",
    yt: "https://www.youtube.com/embed/XNfvilMuCqk?si=jjfI_5Sel-gbN33C",
  },
  {
    id: "32",
    category: "whiteboard",
    cateType: "animation",
    imgSrc: "../../assets-new/images/portfolio/whiteboard/Medtronic_2023.jpg",
    name: "medtronic",
    yt: "https://www.youtube.com/embed/tKekjL76IAs?si=hRLDpGWU8UuAm-Q5",
  },
  {
    id: "33",
    category: "2D Animation",
    cateType: "animation",
    imgSrc: "../../assets-new/images/portfolio/BainBridge_2023.jpg",
    name: "BainBridge",
    yt: "https://www.youtube.com/embed/AAqTiaSOomw?si=lRUjVneVhoi3ns5H",
  },
  {
    id: "34",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc: "../../assets-new/images/portfolio/entropik_2023.jpg",
    name: "entropik",
    yt: "https://www.youtube.com/embed/BLHUYNRv6LY?si=utxI5jabnyGIQ8vp",
  },
  {
    id: "35",
    category: "Testimonial videos",
    cateType: "Testimonial videos",
    imgSrc: "../../assets-new/images/portfolio/Freshpik (Razorpay)_2023.jpg",
    name: "Freshpik",
    yt: "https://www.youtube.com/embed/opUBeEfXfHc?si=4GPBuy5dWxE5kDz_",
  },
  {
    category: "2D Animation",
    id: "36",
    cateType: "animation",
    imgSrc: "../../assets-new/images/portfolio/Inventus_2023.jpg",
    name: "Inventus",
    yt: "https://www.youtube.com/embed/WAje-PBPvJw?si=4Y_NWpSoh_Nhp5WD",
  },
  {
    id: "37",
    category: "2D Animation",
    cateType: "animation",
    imgSrc: "../../assets-new/images/portfolio/Opslyft_2023.jpg",
    name: "Opslyft",
    yt: "https://www.youtube.com/embed/1ge6v5O3n9k?si=LGKM-MetTpV-NpKC",
  },
  {
    id: "38",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc: "../../assets-new/images/portfolio/Shankara Buildpro_2023.jpg",
    name: "Shankara Buildpro",
    yt: "https://www.youtube.com/embed/Ey-SKkY6o_Q?si=_lb2J0dBYkDr5Y_5",
  },
  {
    id: "39",
    category: "Corporate Videos",
    cateType: "Corporate Videos",
    imgSrc: "../../assets-new/images/portfolio/Mega Pipes_2023.jpg",
    name: "Mega Pipes",
    yt: "https://www.youtube.com/embed/Ooh4Wu4IwUs?si=3x_SbZQ3b6nfZlSq",
  },
  {
    id: "40",
    category: "Testimonial Videos",
    cateType: "Testimonial Videos",
    imgSrc:
      "../../assets-new/images/portfolio/photoshoot/Agilon Health_2023.jpg",
    name: "Agilon Health",
    yt: "https://www.youtube.com/embed/ybMwEmh93kI?si=eDdHaeCXBfYIHIHD",
  },
  {
    id: "41",
    category: "Testimonial Videos",
    cateType: "Testimonial Videos",
    imgSrc: "../../assets-new/images/portfolio/Netsmartz_2023.jpg",
    name: "Netsmartz",
    yt: "https://www.youtube.com/embed/WP671rxYjTo?si=XdS-Ft66WfCUKEgY",
  },
];

const TabComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const handleTabChange = (cateType) => {
    setSelectedCategory(cateType);
    if (cateType === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.cateType === cateType));
    }
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupVid, setShowPopupVid] = useState("");

  useEffect(() => {
    document.body.style.overflowY = showPopup ? "hidden" : "auto";
  }, [showPopup]);
  const handlePopup = () => {
    setShowPopup(showPopup ? "false" : "true");
  };

  return (
    <>
      {/* popup container */}
      {showPopup ? (
        <div className="popup-container">
          <div className="pop-content">
            <i
              className="fa-solid fa-xmark close-btn"
              onClick={() => setShowPopup(false)}
            ></i>
            <iframe
              width="700"
              height="400"
              src={showPopupVid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : null}

      <div>
        <div className="container">
          <div className="col-lg-12">
            <div className="folio_mixing">
              <ul className="tabs">
                <li className={`${selectedCategory === "All" ? "active" : ""}`}>
                  <span onClick={() => handleTabChange("All")}>All</span>
                </li>
                <li
                  className={`${
                    selectedCategory === "Corporate Videos" ? "active" : ""
                  }`}
                >
                  <span onClick={() => handleTabChange("Corporate Videos")}>
                    Corporate Videos
                  </span>
                </li>
                <li
                  className={`${
                    selectedCategory === "animation" ? "active" : ""
                  }`}
                >
                  <span onClick={() => handleTabChange("animation")}>
                    animation
                  </span>
                </li>
                <li
                  className={`${
                    selectedCategory === "Product Videos" ? "active" : ""
                  }`}
                >
                  <span onClick={() => handleTabChange("Product Videos")}>
                    Product Videos
                  </span>
                </li>
                <li
                  className={`${
                    selectedCategory === "photoshoot" ? "active" : ""
                  }`}
                >
                  <span onClick={() => handleTabChange("photoshoot")}>
                    photoshoot
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <AnimatePresence className="custom">
              {filteredData.map((item, ind) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className="col-lg-4 col-sm-6 col-md-4 corporate mix_all tab-content-box"
                  // style={"display: inline-block; opacity: 1;"}
                >
                  <div className="singlefolio">
                    <img src={item.imgSrc} alt="" />
                    <a
                      className="video_popup video_popup_custom"
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePopup();
                        setShowPopupVid(item.yt);
                      }}
                    >
                      <i className="fa fa-play"></i>
                    </a>
                    <div className="folioHover">
                      {/* <!--<a className="video_popup" href="https://www.youtube.com/watch?v=A7ZkZazfvao"><i className="fa fa-play"></i></a>--> */}
                      <a
                        className="cate"
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.category}
                      </a>
                      <h4>
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          {item.name}
                        </a>
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabComponent;
