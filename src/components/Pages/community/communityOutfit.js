import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import swiper1 from "../../../images/_ (11).jpeg"
import swiper2 from "../../../images/_ (4).jpeg"
import swiper3 from "../../../images/Foto 09-02-22, 16 03 15.jpg"
import "./style.css";
import "antd/dist/antd.css";
import nft from "../../../images/nft.png";
// import video from "../../../images/video.mp4"

// import module of timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Community = () => {
  return (
    <>
    <div className="nft-section nft-image pt-5">
    <div className="row mx-0">
          <div className="col-lg-8 p-5">
            <h1>NFT</h1>
            <p>
              Il nostro pass sarà disponibile su Opensea. Nella fase 1 del
              progetto ogni pass sarà listato solo a 0.012 ETH permettendo nella
              pre-sale di aggiudicarsi a basso prezzo il token premiando i
              nostri primi utenti Chiunque possegga un V\pass nel proprio crypto
              wallet ha diritto a ricevere al lancio della fase II un avatar NFT
              unico realizzato in Unreal Engine 4 (in diversi file format)
              permettendo l’implementazione nel Metaverse. La collezione nella
              fase 2 avrà un floor price minimo ad 1 Ethereum ed avrà un numero
              massimo di 10000 avatar disponibili.
            </p>
          </div>
        </div>
      </div>
    
    <div className="whatMembersAreWearing">
      <div className="container nft-section pt-5">
        <div className="row">
          <div className="col-lg-12 nft-heading py-5">
            <span>NFT DISTRIBUTION 10.000k</span>
          </div>
          <div className="col-lg-12 nft-img">
            <img src={nft} />
          </div>
        </div>
      </div>
      {/* timelinesection */}

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-12 Heading">
            <h2>FASI DEL PROGETTO \CLUB\ (ROADMAP)</h2>
          </div>
          <div className="col-lg-12">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#97D33F", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #97D33F" }}
                date="2011 - present"
                iconStyle={{
                  background: "#97D33F",
                  color: "#fff",
                  fontSize: "2px",
                }}
              >
                <div className="row timeline">
                  <div className="col-lg-12">
                    <h2 className="vertical-timeline-element-title">\FASE I</h2>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li>White List</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      I membri di questa lista potranno effettuare il mint
                      anticipatamente, quindi avere accesso a tutti i servizi
                      del club e al gruppo privato Telegram. L’unico modo per
                      entrare nella lista è iscriversi sul sito
                      visionarmilano.it, la lista verrà chiusa senza preavviso a
                      esaurimento posti dedicate per essa (3200)
                    </p>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li> PRE-SALE / PUBBLIC-SALE</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      Questa fase sarà strutturata in tre lanci su Opensea: il
                      primo con un prezzo iniziale di 0.012 ETH, permettendo ai
                      membri più attivi di aggiudicarsi il nostro pass al minor
                      prezzo possibile. Tutti i pass corrispondono a un 3D
                      Avatar causale, grazie alla fase BURN, potrai riscattarlo
                      direttamente sul tuo crypto wallet. (MetaMask, Coinbase
                      Wallet, ecc..)
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#97D33F", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #97D33F" }}
                date="2011 - present"
                iconStyle={{
                  background: "#97D33F",
                  color: "#fff",
                  fontSize: "2px",
                }}
              >
                <div className="row timeline">
                  <div className="col-lg-12">
                    <h2 className="vertical-timeline-element-title">\FASE II</h2>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li>White List</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      I membri di questa lista potranno effettuare il mint
                      anticipatamente, quindi avere accesso a tutti i servizi
                      del club e al gruppo privato Telegram. L’unico modo per
                      entrare nella lista è iscriversi sul sito
                      visionarmilano.it, la lista verrà chiusa senza preavviso a
                      esaurimento posti dedicate per essa (3200)
                    </p>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li> PRE-SALE / PUBBLIC-SALE</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      Questa fase sarà strutturata in tre lanci su Opensea: il
                      primo con un prezzo iniziale di 0.012 ETH, permettendo ai
                      membri più attivi di aggiudicarsi il nostro pass al minor
                      prezzo possibile. Tutti i pass corrispondono a un 3D
                      Avatar causale, grazie alla fase BURN, potrai riscattarlo
                      direttamente sul tuo crypto wallet. (MetaMask, Coinbase
                      Wallet, ecc..)
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#97D33F", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #97D33F" }}
                date="2011 - present"
                iconStyle={{
                  background: "#97D33F",
                  color: "#fff",
                  fontSize: "2px",
                }}
              >
                <div className="row timeline">
                  <div className="col-lg-12">
                    <h2 className="vertical-timeline-element-title">\FASE III</h2>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li>White List</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      I membri di questa lista potranno effettuare il mint
                      anticipatamente, quindi avere accesso a tutti i servizi
                      del club e al gruppo privato Telegram. L’unico modo per
                      entrare nella lista è iscriversi sul sito
                      visionarmilano.it, la lista verrà chiusa senza preavviso a
                      esaurimento posti dedicate per essa (3200)
                    </p>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li> PRE-SALE / PUBBLIC-SALE</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      Questa fase sarà strutturata in tre lanci su Opensea: il
                      primo con un prezzo iniziale di 0.012 ETH, permettendo ai
                      membri più attivi di aggiudicarsi il nostro pass al minor
                      prezzo possibile. Tutti i pass corrispondono a un 3D
                      Avatar causale, grazie alla fase BURN, potrai riscattarlo
                      direttamente sul tuo crypto wallet. (MetaMask, Coinbase
                      Wallet, ecc..)
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#97D33F", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #97D33F" }}
                date="2011 - present"
                iconStyle={{
                  background: "#97D33F",
                  color: "#fff",
                  fontSize: "2px",
                }}
              >
                <div className="row timeline">
                  <div className="col-lg-12">
                    <h2 className="vertical-timeline-element-title">\FASE IV</h2>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li>White List</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      I membri di questa lista potranno effettuare il mint
                      anticipatamente, quindi avere accesso a tutti i servizi
                      del club e al gruppo privato Telegram. L’unico modo per
                      entrare nella lista è iscriversi sul sito
                      visionarmilano.it, la lista verrà chiusa senza preavviso a
                      esaurimento posti dedicate per essa (3200)
                    </p>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <ul>
                      <li> PRE-SALE / PUBBLIC-SALE</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      Questa fase sarà strutturata in tre lanci su Opensea: il
                      primo con un prezzo iniziale di 0.012 ETH, permettendo ai
                      membri più attivi di aggiudicarsi il nostro pass al minor
                      prezzo possibile. Tutti i pass corrispondono a un 3D
                      Avatar causale, grazie alla fase BURN, potrai riscattarlo
                      direttamente sul tuo crypto wallet. (MetaMask, Coinbase
                      Wallet, ecc..)
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>

      {/* end timelime section */}
      <div className="row mx-0 py-5">
        <div className="col-lg-12 upper-div mx-auto">
          <h1> Guarda il trailer del V\club su Instagram </h1>
          <button type="button" class="btn btn-default text-white my-5">
            INSTAGRAM
          </button>
        </div>
        {/* <div className="col-lg-12">
          <video loop autoPlay muted id="video" className="video-section">
        <source
          src={video}
          type="video/mp4"
        />
      </video></div> */}
        <div className="col-lg-12">
           <Swiper
           speed={3000}
           loop={true}
        autoplay={{
          delay: 0.1,
          enabled: true,
        }}
        
        modules={[Autoplay]} slidesPerView={3.5} 
        className="roadmap-swiper">
        <SwiperSlide>
            <img src={swiper1} />
        </SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper1} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper3} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>
        <SwiperSlide><img src={swiper2} /></SwiperSlide>x
      </Swiper>
          </div>
      </div>
      <div className="row mx-0">
        <div className="col-lg-5 mx-auto col-md-6 telegram my-3">
          <div className="bg row">
            <div className="col-lg-12 px-4">
              <h3 className="text-white float-start">
                Join Our Telegram channel
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                nisl, quis quisque malesuada gravida.
              </p>
              <button
                type="button"
                class="btn btn-default text-white float-start"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mx-auto col-md-6 creativo my-3">
          <div className="bg row">
            <div className="col-lg-12 px-4">
              <h3 className="text-white float-start">
                Join Our discord channel
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                nisl, quis quisque malesuada gravida.
              </p>
              <button
                type="button"
                class="btn btn-default text-white float-start"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Community;
