import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper1 from "../../../images/swiper1.png"
import swiper2 from "../../../images/swiper2.png"
import swiper3 from "../../../images/swiper3.png"

import 'antd/dist/antd.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./landing.css";


export default function App() {

  return (
    <>
    <div className="first-dive">
      <div className="div-center">
      <h2>
      Nibh placerat feugiat non id elit
      </h2>
      <p className="py-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sapien consequat eget neque. Etiam risus, lacinia vulputate vel sit. Enim habitant suspendisse eget
      </p>
      <span className="pt-2"> CALL TO ACTION</span>
      </div>
    </div>
    <div className="div-Club">
      <div className="row mx-0 club-mid">
        <div className="col-lg-7  px-5">
        <div className="Heading">v/club</div>
        <p>Il club nasce per decentralizzare una deflazione sulle auto e vestiti consentendo a un numero limitato di persone ,
           tramite asset NFT, di avere accesso esclusivo a:</p>
           <ul>
             <li>sconti fino al 70% sui brand più famosi del mondo</li>
               <li>
               aste internazionali d'auto di lusso e non
               </li>
                 <li>asset finanziari e contenuti nel web 3.0</li>
           </ul>
           <span className="float-start">
           RICHIEDI L'ACCESSO
           </span>
        </div>
       
      </div>
    </div> 
    <div className="product-page">
           <Swiper watchSlidesProgress={true} slidesPerView={3.5} className="mySwiper full-swiper">
        <SwiperSlide>
            <img src={swiper1} />
        </SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
      </Swiper>
      <div className="swiper-mid px-5">
        <h1>FASHION</h1>
        <p>Grazie alla collaborazione con Visionari Milano proponiamo ai nostri utenti le migliori marche del mondo,
            offrendo la membership V.I.P nel sito ufficiale visionarimilano.it </p>
            <p>
            potrai accedere ai cataloghi esclusivi venduti allo stesso prezzo a cui il retailer le acquista. </p>
            <span >
            FIND OUT MORE
           </span>
      </div>
      </div>  
      <div className="cars-div">
      <div className="row mx-0 cars-mid">
        <div className="col-lg-5"></div>
        <div className="col-lg-7  px-5">
        <div className="Heading">CARS</div>
        <p>I membri del V\club potranno accedere al canale privato Discord, 

potendo partecipare alle aste dei veicoli sequestrati dalle forze dell’ordine che si svolgono quotidianemente negli 
Emirati Arabi, concludendo affari in modo decentralizzato attraverso NFT tagliando fuori tassazioni e dazi.</p>
           <span className="float-start">
           Scopri di più 
           </span>
        </div>
       
      </div>
    </div>   
    </>
  );
}
