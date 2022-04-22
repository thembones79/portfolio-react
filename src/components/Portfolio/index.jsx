import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import "swiper/css";

const Portfolio = () => (
  <div className="portfolio">
    <span className="portfolio__title">Recent Projects</span>
    <span className="portfolio__subtitle">Portfolio</span>
    <Swiper
      spaceBetween={3}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
      <SwiperSlide>
        <img src={sidebar} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ecommerce} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hoc} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={musicapp} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Portfolio;
