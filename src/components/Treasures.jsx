import React from 'react'
import nft from '../img/Frame 6(1).png'
import nft1 from '../img/Frame 6(2).png'
import nft2 from '../img/Frame 6(3).png'
import nft3 from '../img/Frame 6(4).png'
import nft4 from '../img/Frame 6(5).png'
import nft5 from '../img/Frame 6(6).png'
import nft6 from '../img/Frame 6(7).png'
import nft7 from '../img/Frame 6(8).png'
import nft8 from '../img/Frame 6(9).png'
import nft9 from '../img/Frame 6(10).png'
import profile1 from '../img/Ellipse 4(1).png'
import profile2 from '../img/Ellipse 4(2).png'
import profile3 from '../img/Ellipse 4(3).png'
import profile4 from '../img/Ellipse 4(4).png'
import profile5 from '../img/Ellipse 4(5).png'
import profile6 from '../img/Ellipse 4(6).png'
import profile7 from '../img/Ellipse 4(7).png'
import profile8 from '../img/Ellipse 4(8).png'
import profile9 from '../img/Ellipse 4(9).png'
import profile from '../img/Ellipse 4.png'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {FaEthereum} from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal';
function Treasures() {

  const [data, setData] = useState([
    {
      "id": 1,
      "title": "Monkey #346",
      "nftName": "Bayl Universe",
      "created": "Limited Edition",
      "price": "19.2 ETH",
      "profile": profile,
      "image": nft,
      "check": false,
      "btnClick": false
    },
    {
      "id": 2,
      "title": "Monkey #448",
      "nftName": "Almond Monkey",
      "created": "Limited Edition",
      "price": "13.1 ETH",
      "profile": profile1,
      "image": nft1,
      "check": false,
      "btnClick": false
    },{
      "id": 3,
      "title": "Monkey #412",
      "nftName": "Arab Classy",
      "created": "Limited Edition",
      "price": "12.3 ETH",
      "profile": profile2,
      "image": nft2,
      "check": false,
      "btnClick": false
    },{
      "id": 4,
      "title": "Monkey #325",
      "nftName": "Diamond Carl",
      "created": "Limited Edition",
      "price": "17.7 ETH",
      "profile": profile3,
      "image": nft3,
      "check": false,
      "btnClick": false
    },{
      "id": 5,
      "title": "Monkey #269",
      "nftName": "Tiger Monkey",
      "created": "Limited Edition",
      "price": "10.5ETH",
      "profile": profile4,
      "image": nft4,
      "check": false,
      "btnClick": false
    },{
      "id": 6,
      "title": "Monkey #504",
      "nftName": "Galactic Timmy",
      "created": "Limited Edition",
      "price": "12.1 ETH",
      "profile": profile5,
      "image": nft5,
      "check": false,
      "btnClick": false
    },{
      "id": 7,
      "title": "Monkey #117",
      "nftName": "Black Bob",
      "created": "Limited Edition",
      "price": "7.3 ETH",
      "profile": profile6,
      "image": nft6,
      "check": false,
      "btnClick": false
    },{
      "id": 8,
      "title": "Monkey #104",
      "nftName": "Tropic Monkey",
      "created": "Limited Edition",
      "price": "6.4 ETH",
      "profile": profile7,
      "image": nft7,
      "check": false,
      "btnClick": false
    },{
      "id": 9,
      "title": "Monkey #302",
      "nftName": "Colorful Angel",
      "created": "Limited Edition",
      "price": "6.8ETH",
      "profile": profile8,
      "image": nft8,
      "check": false,
      "btnClick": false
    },{
      "id": 10,
      "title": "Monkey #226",
      "nftName": "Hell Monkey",
      "created": "Limited Edition",
      "price": "12.6 ETH",
      "profile": profile9,
      "image": nft9,
      "check": false,
      "btnClick": false
    },
  ])

  const checkIcon = (id) => {
    setData(
      data.map(m=>{
          if(m.id === id){
              return {
                  ...m,
                  check: !m.check
              }
          }
          return m
      })
  )
  }
  const BtnClick = (id) => {
    setData(
      data.map(m=>{
        if(m.id === id){
          return{
            ...m,
            btnClick: !m.btnClick
          }
        }
        return m
      })
    )
  }

  return (
    <div className='treasures text-white w-screen h-full bg-cover flex justify-center items-center flex-col' id='Trending'>
    <h1 className='title'>TRENDING AUCTIONS</h1>
    <p className='w-[40%] m-10'>Discover one of the most popular NFT creations picked for you. Place your bid and
bi the first to have these treasures. All of the artworks are limited selections.</p>
      <div className='frame'>
        {data.map((index, id)=>(
          <div key={id} className='w-[250px] h-[410px] rounded-lg bg-gradient-to-tl from-indigo-500 p-3'>
            <div className='profile flex justify-around items-center mb-1'>              
              <div className='flex items-center'>
                <img src={index.profile} alt="" />
                <p className='text-[14px] font-semibold ml-2'>{index.title}</p>
              </div>
              <div className=''>
                <button onClick={() => {checkIcon(index.id)}}>
                { index.check ? <BsHeartFill/>
                  : <BsHeart/>
                }
                </button>
              </div>
            </div>
            <div className='nft_image'>
              <img src={index.image} alt="" />
            </div>
            <div className='nft_title'>
              <p className='text-[18px] font-bold'>{index.nftName}</p>
              <p className='text-[14px] text-gray-100'>{index.created}</p>
            </div>
            <div className='flex gap-3 justify-center items-center'> 
              <FaEthereum className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
               from-[#E025CE] via-[#4AED52]to-[#E025CE] text-[30px]'/>
              <div>
                <p className='text-gray-200'>price</p>
                <p className='font-semibold text-[12.27]'>{index.price}</p>
              </div>
              <button className='price_btn' onClick={() => {BtnClick(index.id)}}>Place a Bid</button>
            </div>
          </div>
        ))}
      </div>
      {data.map((index, id)=>(
        <div>
          {
              index.btnClick ? <Modal index={index} onClose={() => BtnClick(index.id)}/> : ''
          }
        </div>
      ))}
    </div>
  )
}

export default Treasures