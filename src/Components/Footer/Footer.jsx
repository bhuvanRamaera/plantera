
import Button from '@mui/material/Button';

import React from 'react';
import './footer.css'
import Icons from './Icons';
import SideBar from './SideBar';

import FooterEnd from './FooterEnd';

const Footer = () => {
  return (
    <>
      <div className="main-container lg:w-[100%] mt-20">
        <div className='footer flex bg-center bg-cover'>
          <div class="lg:basis-9/12 subscibe lg:h-48 flex justify-around items-center">
            <div className='subscribe-text mr-8'>
              <h2 className='lg:text-4xl text-white font-bold'>
                Subscribe <br />
                To <br />
                Newsletter
              </h2>
            </div>
            <div className="join">
              <input type="text" className='input px-3' placeholder='Enter Your Email' />
              <button className='footer-btn'>Subscribe</button>
            </div>
          </div>
          <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center lg:items-start">
            <p className='text-white lg:text-xl lg:ml-10 social-text'>Social Media</p>
            <Icons />
          </div>
        </div>
        <>
      
       <SideBar />
      
       <FooterEnd/>
       </>

      </div>
    </>
  )
}

export default Footer