import React from "react"
import { Card } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'antd/dist/antd.css';
import image3 from "../../../images/Louis Vuitton  Men's Collection.png"
import image2 from "../../../images/_ (4).jpeg"
import image1 from "../../../images/_ (11).jpeg"

//style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "./page3.css"

const LandingPage = ()=>{
    const { Meta } = Card;
  return (
      <div className="main-div row mx-0 py-5">
          <div className="col-lg-4 side-heading p-5">
              <h2>
              FEATURED IN THE V\CLUB PROJECT
              </h2>
          </div>
          <div className="col-lg-8 px-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className="cardmb"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
            <Card
                hoverable
                className="div-card"
            >
                <img src={image1} className="img"/>
                <span className="float-start mt-4">Visionari Milano</span>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
                hoverable
                className="div-card"
            >
                <img src={image2} className="img" />
                <span className="float-start mt-4">Visionari Milano</span>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
                hoverable
                className="div-card"
            >
                 <img src={image1} className="img"/>
                <span className="float-start mt-4">Visionari Milano</span>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
                hoverable
                className="div-card"
            >
                 <img src={image2} className="img"/>
                <span className="float-start mt-4">Visionari Milano</span>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card
                hoverable
                className="div-card"
            >
                <img src={image1} className="img"/>
                <span className="float-start mt-4">Visionari Milano</span>
            </Card>
            </SwiperSlide>
            </Swiper>
          </div>
      </div>
  )
}

export default LandingPage
