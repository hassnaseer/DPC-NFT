import React, { useState } from "react"
import {Menu } from 'antd';
import 'antd/dist/antd';
import "./header.css"

// const { Header } = Layout;


const HeaderPage = ()=>{
  const [state, setState] = useState(false);
const sidemenu =()=>{
  if(state){
    setState(false)
  }
  if(!state){
    setState(true)
  }
}
    return (
      <div className="header">
<nav class="navbar navbar-expand-lg navbar-dark p-2 header-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Logo</a>
          <button onClick={sidemenu} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {state ? (
              <div className="header-list-responsive">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fashion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cars</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">NFT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RoadMap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Entra Nella Lisa</a>
              </li>
            </ul>
              </div>
          ):""}
          
<div class="collapse navbar-collapse" id="navbarNav">
              <div className="header-list">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fashion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cars</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">NFT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RoadMap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Entra Nella Lisa</a>
              </li>
            </ul>
              </div>
          </div>
        </div>
      </nav>
      </div>
        
    )
}

export default HeaderPage