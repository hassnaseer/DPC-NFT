import React from "react"
import "./style.css"
import 'antd/dist/antd.css';
import nft from "../../../images/nft.png"
import timeline from "../../../images/timeline.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import module of timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Community =()=>{
    return(
        <div className="whatMembersAreWearing">
            <div className="container nft-section pt-5" >
                 <div className="row">
                <div className="col-lg-8">
                    <h1>NFT</h1>
                    <p>
                    Il nostro pass sarà disponibile su Opensea.

Nella fase 1 del progetto ogni pass sarà listato solo a 0.012 ETH 
permettendo nella pre-sale di aggiudicarsi a basso prezzo il token 
premiando i nostri primi utenti 
Chiunque possegga un V\pass nel proprio crypto wallet ha diritto a ricevere al lancio della fase II un avatar NFT unico realizzato in Unreal Engine 4 (in diversi file format) permettendo l’implementazione nel Metaverse. 
La collezione nella fase 2 avrà un floor price minimo ad 1 Ethereum ed avrà un numero massimo di 10000 avatar disponibili.

                    </p>
                </div>
                <div className="col-lg-12 nft-heading py-5">
                <span>nft distribution 10.000k</span>
                </div>
                <div className="col-lg-12 nft-img">
                    <img src={nft} />
                </div>
            </div>
            </div>
           {/* timelinesection */}

           <div className="container">
            <div className="row py-5">
                <div className="col-lg-12">
                  <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize:"2px" }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize:"2px" }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize:"2px" }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize:"2px" }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
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
            </div>
                <div className="row mx-0">
                    <div className="col-lg-5 mx-auto col-md-6 telegram my-3" >
                        <div className="bg row">
                        <div className="col-lg-12 px-4">
                            <h3 className="text-white float-start">
                            Join Our Telegram channel
                            </h3>
                            <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nisl, quis quisque malesuada gravida.
                            </p>
                            <button type="button" class="btn btn-default text-white float-start">
                                Join Now
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto col-md-6 creativo my-3" >
                        <div className="bg row">
                            <div className="col-lg-12 px-4">
                            <h3 className="text-white float-start">
                            Join Our discord channel
                            </h3>
                            <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nisl, quis quisque malesuada gravida.
                            </p>
                            <button type="button" class="btn btn-default text-white float-start">
                                Join Now
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Community