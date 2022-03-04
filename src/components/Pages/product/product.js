import React from "react"
import { Card } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import {RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import swiper1 from "../../../images/tiktok1.png"
//style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "./product.css"

const LandingPage = ()=>{
    const { Meta } = Card;
  return (
      <div className="product-page py-5">
           <Swiper watchSlidesProgress={true} slidesPerView={3.5} className="mySwiper full-swiper">
        <SwiperSlide>
            <img src={swiper1} />
        </SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
      </Swiper>
      </div>
  )
}

export default LandingPage
