import React from 'react'
import {TbNorthStar} from 'react-icons/tb'
import Link from 'react-scroll/modules/components/Link'
const Header = () => {
  return (
    <div className='header w-screen h-screen bg-no-repeat bg-cover text-white'>
        <ul className=' flex flex-row justify-center w-full text-[18px] pt-9'>
          <li className='mr-5'>
            <button>
              <Link to="/" spy={true} smooth={true} offset={50} duration={3000}>Home</Link>
            </button>
          </li>
          <li className='mr-5'>
            <button>
              <Link to="Marketplace" spy={true} smooth={true} offset={50} duration={3000}>Marketplace</Link>
            </button>
            </li>
          <li className='mr-5'>
            <button>
              <Link to="Trending" spy={true} smooth={true} offset={50} duration={3000}>Trending</Link>
            </button>
            </li>
          <li className='mr-5'>
            <button>
              <Link to="Howto" spy={true} smooth={true} offset={50} duration={3000}>How to</Link>
            </button>
            </li>
          <li className='mr-5'>
            <button>
              <Link to="Footer" spy={true} smooth={true} offset={50} duration={3000}>Footer</Link>
            </button>
            </li>
        </ul>
      <div className='header_title w-1/2 h-1/2 mt-[5rem] ml-40 flex flex-col justify-around'>
        <h1 className='text-2xl font-bold w-2/4'>Fortnite is Bringing NFTs To The Traditional World Of Gaming</h1>
        <p className='text-xl w-2/4'>Moncler Partners With Fortnite on In-Game Outfits, Accessories and More</p>
        <button className='bg-blue-500 w-24 h-12 rounded-lg'>
          <a href="https://www.binance.com/en/nft/collection/mutant-ape-yacht-club-505303452945186817?isBack=1">
            open
          </a>
        </button>
      </div>
      <div className='header_linkbar text-[18px] flex flex-row gap-8 m-24 items-center'>
        <a
          href="https://github.com/amarsanaa1234"
          target="_blank"
          rel="noreferrer"
        >Github</a>
        <TbNorthStar/>
        <a
          href="https://www.instagram.com/maoydn/"
          target="_blank"
          rel="noreferrer"
        >Instagram</a>
        <TbNorthStar/>
        <a
          href="https://www.facebook.com/profile.php?id=100051076660680"
          target="_blank"
          rel="noreferrer"
        >Facebook</a>
      </div>
    </div>
  )
}

export default Header