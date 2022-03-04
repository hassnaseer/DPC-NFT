import React from 'react';
import "./footer.css"
import {FacebookFilled,TwitterCircleFilled,InstagramFilled,LinkedinFilled } from '@ant-design/icons';

const Footer = ()=> {
return(
    <footer className='footer style-footer'>
        <div className='row mx-5 pt-5'>
            <div className='col-lg-12'>
            <div className="my-5">
            <FacebookFilled className="icon mr-2"/>
            <TwitterCircleFilled className="icon"/>
            <InstagramFilled className="icon"/>
            <LinkedinFilled className="icon"/>
              </div>
              <ul className='d-flex foot-items justify-content-center mb-5'>
                <li className='text-white mx-2'>Fashion</li>
                <li className='text-white mx-2'>NFT</li>
                <li className='text-white mx-2'>Cars</li>
                <li className='text-white mx-2'>RoadMap</li>
                <li className='text-white mx-2'>Entra nella lista</li>
              </ul>
              <span className='text-white'>
              Copyright© 2021. All Rights Reserved
              </span>
            </div>
        </div>
    </footer>
)
}
export default Footer