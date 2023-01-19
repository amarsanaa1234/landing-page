import React, { useState } from 'react'
import nft from '../img/nft1.png'
import nft1 from '../img/nft2.png'
import nft2 from '../img/nft3.png'
import nft3 from '../img/nft4.png'
import {SiEthereum} from 'react-icons/si'

const Trending = () => {

  let data2 =[
    {
      "id": 8,
      "title": "Monkey #01",
      "created": "By Stefan Brown",
      "price": "18.3 ETH",
      "image": nft3
      },
      {
      "id": 7,
      "title": "Monkey #25",
      "created": "By Chris Kostov",
      "price": "12.6 ETH",
      "image": nft2
      },
      {
      "id": 6,
      "title": "Monkey #55",
      "created": "By Laura Petrova",
      "price": "17.8 ETH",
      "image": nft1
      },
      {
      "id": 5,
      "title": "Monkey #43",
      "created": "By Gloria Milt",
      "price": "12.1 ETH",
      "image": nft
      }
  ]

  let data = [
    {
      "id": 1,
      "title": "Monkey #43",
      "created": "By Gloria Milt",
      "price": "12.1 ETH",
      "image": nft
    },
    {
    "id": 2,
    "title": "Monkey #55",
    "created": "By Laura Petrova",
    "price": "17.8 ETH",
    "image": nft1
    },
    {
    "id": 3,
    "title": "Monkey #25",
    "created": "By Chris Kostov",
    "price": "12.6 ETH",
    "image": nft2
    },
    {
    "id": 4,
    "title": "Monkey #01",
    "created": "By Stefan Brown",
    "price": "18.3 ETH",
    "image": nft3
    }
  ]

  const [state, setState] = useState(false)

  return (
    <div className='trending w-screen bg-cover flex justify-center items-center flex-col bg-bottom' id='Marketplace'>
      <h1 className='title'>TRENDING AUCTIONS</h1>
      <div className='flex justify-center gap-[60px] items-center w-full flex-wrap mt-32'>
        {data.map((index,id)=>(
          <div key={id} className='trending_section '>
            <div className="flex h-full w-full items-center justify-center bg-gray-800 flex-col ">
              <div className='h-[380px] w-full 
              bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
               from-gray-200 via-gray-400 to-gray-600'>
                <img src={index.image} className='' />
              </div>
              <div className='w-full bg-zinc-600 h-[30rem] flex'>
                <div className='w-full h-full flex flex-col justify-around items-center'>
                  <div>
                    <p className='font-bold text-[18px]'>{index.title}</p>
                    <span className='text-[16px] text-gray-400'>{index.created}</span>
                  </div>
                  <div className='flex'>
                    <SiEthereum className='text-2xl'/>
                    <p className='text-[18px] font-bold'>{index.price}</p>
                  </div>
                </div>
                <div className='w-full h-full flex flex-col justify-around items-center'>
                  <span className='w-24 h-7 rounded-md border-white border-2 flex justify-center items-center text-[14px] font-bold'>7h:4m:8s</span>
                  <button className='price_btn'>Place a Bid</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {data2.map((index,id)=>(
          state ?
          <div key={id} className='trending_section '>
            <div className="flex h-full w-full items-center justify-center bg-gray-800 flex-col ">
              <div className='h-[380px] w-full 
              bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
               from-gray-200 via-gray-400 to-gray-600'>
                <img src={index.image} className='' />
              </div>
              <div className='w-full bg-zinc-600 h-[30rem] flex'>
                <div className='w-full h-full flex flex-col justify-around items-center'>
                  <div>
                    <p className='font-bold text-[18px]'>{index.title}</p>
                    <span className='text-[16px] text-gray-400'>{index.created}</span>
                  </div>
                  <div className='flex'>
                    <SiEthereum className='text-2xl'/>
                    <p className='text-[18px] font-bold'>{index.price}</p>
                  </div>
                </div>
                <div className='w-full h-full flex flex-col justify-around items-center'>
                  <span className='w-24 h-7 rounded-md border-white border-2 flex justify-center items-center text-[14px] font-bold'>7h:4m:8s</span>
                  <button className='w-24 h-9 rounded-md bg-[#00031A] text-[14px] font-bold'>Place a Bid</button>
                </div>
              </div>
            </div>
          </div> : ''
        ))}
      </div>
        <button className='readBtn' onClick={()=>{setState(!state)}}>read more</button>
    </div>
  )
}

export default Trending