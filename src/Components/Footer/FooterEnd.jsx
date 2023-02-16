import React from 'react';
import footerlogo from '../../../src/assets/footerlogo.png'

const FooterEnd = () => {
    return (
        <div className="flex footer-end justify-around">
            <div className="lg:basis-9/12 lg:h-36 social-container bg-[#0D0D0D] flex justify-around">
                <div className='logo my-auto'>
                    <img src={footerlogo} alt="" className='lg:w-40' />
                </div>
                <div className="menu lg:my-auto">
                    <ul className='flex menu-links text-white lg:justify-between lg:items-center my-auto text-xs'>
                        <li className='px-8'>Best Fruits</li>
                        <li className='px-8'>Social Media</li>
                        <li className='px-8'>More For You</li>
                        <li className='px-8'>Your Shop</li>
                    </ul>
                </div>
            </div>
            <div className='lg:basis-3/12 lg:h-36 lg:bg-black flex items-center justify-center copyright'>
                <p className='text-white text-xs copyright-text'>
                The Copyright 2022 guide covers 14 jurisdictions. 
                </p>
            </div>
        </div>
    )
}

export default FooterEnd