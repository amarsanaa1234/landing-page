import React from 'react'
import {GrFacebookOption, GrPinterest,GrYoutube,} from 'react-icons/gr'
import {FaTiktok,FaDiscord} from 'react-icons/fa'
function Footer() {
  return (
    <div className='backdrop-blur-xl w-screen text-white h-[450px] mt-40' id='Footer'>
        <div className='bg-gradient-to-r from-fuchsia-900 to-indigo-800 h-[3px] w-screen'></div>
        <div className='flex flex-col mt-32 text-[20px]'>
            <div className='flex gap-4 justify-evenly mb-20'>
                <div className='w-2/5 h-[12rem] flex flex-col gap-4'>
                    <p className='font-extrabold text-transparent text-[24px] bg-clip-text bg-gradient-to-r from-[#E025CE] via-[#4AED52] to-[#4AED52]'>MONKEYNFT</p>
                    <span className='text-[20px]'>The largest NFT Marketplace. Unique and
                        authentic digital creations. Made possible
                        by blockchain technology.</span>
                    <div className='flex w-[11.5rem] justify-around'>
                        <div className='footer_icons'><GrFacebookOption/></div>
                        <div className='footer_icons'><GrPinterest/></div>
                        <div className='footer_icons'><GrYoutube/></div>
                        <div className='footer_icons'><FaTiktok/></div>
                        <div className='footer_icons'><FaDiscord/></div>
                    </div>
                </div>  
                <div className='footer_menu'>
                    <h1 className='footer-title'>My Account</h1>
                    <span>Profile</span>
                    <span>Collections</span>
                    <span>Favourites</span>
                    <span>Settings</span>
                </div>
                <div className='footer_menu'>
                    <h1 className='footer-title'>Marketplace</h1>
                    <span>Explore</span>
                    <span>All NFT</span>
                    <span>Collectible</span>
                    <span>All World</span>
                </div>
                <div className='footer_menu'>
                    <h1 className='footer-title'>Resources</h1>
                    <span>Help Center</span>
                    <span>Partners</span>
                    <span>Blog</span>
                    <span>Newsletter</span>
                </div>
                <div className='footer_menu'>
                    <h1 className='footer-title'>Company</h1>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Support</span>
                    <span>Rankings</span>
                </div>
            </div>
            <div className='flex justify-around items-end'>
                <p>2022 © Copyright DMONKEY. All Rights Reserved</p>
                <div className='flex justify-around w-1/4'>
                    <p>Terms Of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer