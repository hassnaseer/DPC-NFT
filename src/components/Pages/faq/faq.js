import React from "react"
import "./faq.css"
import {PlusOutlined, CloseOutlined } from '@ant-design/icons';

const Faq = ()=>{
    const [showResults, setShowResults] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    const [showResults3, setShowResults3] = React.useState(false)
    const onClick = () => {
        setShowResults(true)
        setShowResults2(false)
        setShowResults3(false)
    } 
    const handleclose =()=>{
        setShowResults(false)
    }
    const onClick2 = () => {
        setShowResults(false)
        setShowResults2(true)
        setShowResults3(false)
    } 
    const onClick3 = () => {
        setShowResults(false)
        setShowResults2(false)
        setShowResults3(true)
    } 
    const handleclose2 =()=>{
        setShowResults2(false)
    }
    const handleclose3 =()=>{
        setShowResults3(false)
    }
    const Results = () => (
        <div id="results" className="search-results">
          Drip is the first high fashion and streetwear service with a monthly subscription.<br />
By signing up for your membership you will have access to an extensive wardrobe of garments, at a fraction of their retail price.<br />
Membership includes:<br />
- access to hundreds of exclusive brand items<br />
- possibility to replace the garments in your possession, once a month<br />
- certified professional washing and sanitation of each garment, after each use<br />
- fast shipping and collection at no additional cost<br />
- full coverage for stains and minor damage<br />
        </div>
      );
      const Results2 = () => (
        <div id="results" className="search-results">
          Drip is for those who love fashion, for those who communicate through their style and for anyone who wants to adopt a “smart” approach to fashion consumption.<br />
Drip is for students, for those who work, for influencers, artists, musicians, photographers, fashion stylists. Drip is for enthusiasts, but also for professionals who make their style a factor of success.<br />
Within the platform there are dozens of different brands, which combine evergreen styles with the avant-garde. You can select from our catalog what is in line with your way of dressing, or go further, experimenting with new garments you have never experienced.<br />
        </div>
      )
      const Results3 = () => (
        <div id="results" className="search-results">
            We want to improve the lifestyle of fashion enthusiasts and professionals, offering the opportunity to benefit every month from a more dynamic wardrobe in step with trends, guaranteeing more variety and accessibility.<br />
We want to reduce consumption, change our approach and extend the life of our garments.<br />
We want to talk about the problems within our industry, hold ourselves accountable for change and maintain an open dialogue.<br />
        </div>
      )
    return(
        <div className="faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                <h1 className="faq-h3">Alcune domandi frequenti</h1>
                    </div>
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick}>What is drip?</span>
                        <div className="icon-plus float-end">
                        { !showResults ? <PlusOutlined onClick={onClick}/> : <CloseOutlined onClick={handleclose} /> }
                        </div>
                    </div>
                    { showResults ? <Results /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick2}>Who is Drip for?</span>
                        <div className="icon-plus float-end">
                        { !showResults2 ? <PlusOutlined onClick={onClick2}/> : <CloseOutlined onClick={handleclose2}/> }
                        </div>
                    </div>
                    { showResults2 ? <Results2 /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick3}>Mission and Values</span>
                        <div className="icon-plus float-end">
                        { !showResults3 ? <PlusOutlined onClick={onClick3}/> : <CloseOutlined onClick={handleclose3}/> }
                        </div>
                    </div>
                    { showResults3 ? <Results3 /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick3}>Mission and Values</span>
                        <div className="icon-plus float-end">
                        { !showResults3 ? <PlusOutlined onClick={onClick3}/> : <CloseOutlined onClick={handleclose3}/> }
                        </div>
                    </div>
                    { showResults3 ? <Results3 /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick3}>Mission and Values</span>
                        <div className="icon-plus float-end">
                        { !showResults3 ? <PlusOutlined onClick={onClick3}/> : <CloseOutlined onClick={handleclose3}/> }
                        </div>
                    </div>
                    { showResults3 ? <Results3 /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick3}>Mission and Values</span>
                        <div className="icon-plus float-end">
                        { !showResults3 ? <PlusOutlined onClick={onClick3}/> : <CloseOutlined onClick={handleclose3}/> }
                        </div>
                    </div>
                    { showResults3 ? <Results3 /> : null }
                </div>
                <div className="row header-question">
                    <div className="col-lg-12 pb-2">
                        <span className="question float-start" onClick={onClick3}>Mission and Values</span>
                        <div className="icon-plus float-end">
                        { !showResults3 ? <PlusOutlined onClick={onClick3}/> : <CloseOutlined onClick={handleclose3}/> }
                        </div>
                    </div>
                    { showResults3 ? <Results3 /> : null }
                </div>
            </div>
           
        </div>
    )
}
export default Faq