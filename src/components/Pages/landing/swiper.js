import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swiper1 from "../../../images/_ (11).jpeg"
import swiper2 from "../../../images/_ (4).jpeg"
import swiper3 from "../../../images/Foto 09-02-22, 16 03 15.jpg"
import swiper4 from "../../../images/Louis Vuitton  Men's Collection.png"
import swiper5 from "../../../images/volt.jpeg"
import swiper6 from "../../../images/nin.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./landing.css"

// import required modules
import { FreeMode, Navigation, Thumbs,Autoplay } from "swiper";

const Swipers =()=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        speed={3000}
        loop={true}
     autoplay={{
       delay: 0.1,
       enabled: true,
     }}
     slidesPerView={3.5}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={swiper1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper6} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={swiper6} />
        </SwiperSlide>
      </Swiper>
      <Swiper
      speed={2500}
   autoplay={{
     delay: 0.1,
     enabled: true,
   }}
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/Vouge+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/wwd+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/fta+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/Vouge+logo.webp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/wwd+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/fta+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/wwd+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/Vouge+logo.webp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/fta+logo.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://drip-rent-images.s3.eu-south-1.amazonaws.com/home/Vouge+logo.webp"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swipers;