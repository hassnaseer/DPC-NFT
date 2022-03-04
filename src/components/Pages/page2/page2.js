import React from "react"
import { Card } from 'antd';
import 'antd/dist/antd.css';
import image1 from "../../../images/tiktok1.png"
import image2 from "../../../images/tiktok2.png"
import image3 from "../../../images/tiktok3.png"
import image4 from "../../../images/tiktok4.png"

import "./page2.css"

const LandingPage = ()=>{
  return (
      <div className="howItWorks">
         <div className="container py-4">
             <h1 className="mb-0 text-center"> Alcune domandi frequenti</h1>
             <div className="row" style={{marginTop:"-10px"}}>
                 <div className="col-md-3 px-1 cardmb">
                 <Card
                hoverable
                className="div-card"
            >
                <img  src={image1}/>
                </Card>
                 </div>
                 <div className="col-md-3 px-1 cardmb">
                 <Card
                hoverable
                className="div-card"
            >
            <img  src={image2}/>
                </Card>
                 </div>
                 <div className="col-md-3 px-1 cardmb">
                 <Card
                hoverable
                className="div-card"
            >
                <img  src={image3}/>
                </Card>
                 </div>
                 <div className="col-md-3 px-1 cardmb">
                 <Card
                hoverable
                className="div-card"
            >
                <img  src={image4}/>
                </Card>
                 </div>
             </div>
         </div>
      </div>
  )
}

export default LandingPage
