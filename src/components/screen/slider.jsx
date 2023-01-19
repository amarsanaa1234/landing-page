import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import group from '../../img/Group.png'
import binance from '../../img/Binance.png'
import plus from '../../img/BitcoinPlus.png'
import badge from '../../img/CovalentBadge.png'
import eth from '../../img/Ethereum.png'
import meta from '../../img/MetaMask.png'
import terra from '../../img/Terra.png'
import sub from '../../img/SolanaBadge.png'

function slider() {

    let data = [
        {
            "id": 1,
            "name": "Okex",
            "image": group
        },
        {
            "id": 2,
            "name": "Binance",
            "image": binance
        },
        {
            "id": 3,
            "name": "BitoinPlus",
            "image": plus
        },
        {
            "id": 4,
            "name": "Covalent",
            "image": badge
        },
        {
            "id": 5,
            "name": "Ethereum",
            "image": eth
        },
        {
            "id": 6,
            "name": "MetaMask",
            "image": meta
        },
        {
            "id": 7,
            "name": "Terra",
            "image": terra
        },
        {
            "id": 8,
            "name": "Solana",
            "image": sub
        },
        {
            "id": 9,
            "name": "Covalent",
            "image": badge
        },
        {
            "id": 10,
            "name": "Okex",
            "image": group
        },
        {
            "id": 11,
            "name": "Covalent",
            "image": badge
        },
        {
            "id": 12,
            "name": "Solana",
            "image": sub
        }
    ]

    let data1 = [
        {
            "id": 1,
            "name": "Covalent",
            "image": badge
        },
        {
            "id": 2,
            "name": "Solana",
            "image": sub
        },
        {
            "id": 3,
            "name": "MetaMask",
            "image": meta
        },
        {
            "id": 4,
            "name": "Okex",
            "image": group
        },
        {
            "id": 5,
            "name": "Terra",
            "image": terra
        },
        {
            "id": 6,
            "name": "BitoinPlus",
            "image": plus
        },
        {
            "id": 7,
            "name": "Ethereum",
            "image": eth
        },
        {
            "id": 8,
            "name": "Solana",
            "image": sub
        },
        {
            "id": 9,
            "name": "Binance",
            "image": binance
        },
        {
            "id": 10,
            "name": "Terra",
            "image": terra
        },
        {
            "id": 11,
            "name": "Ethereum",
            "image": eth
        },
        {
            "id": 12,
            "name": "MetaMask",
            "image": meta
        },
    ]

  return (
    <div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop
        modules={[Autoplay, Pagination]}
        className="w-screen mt-20"
      >
        {data.map((item, id)=>(
            <SwiperSlide key={id} className='slide-slide text-white font-bold text-[20px]'>
                <div className="flex max-w-screen-sm items-center justify-center">
                    <div className="h-36 w-full">
                        <div className=" h-full rounded-md border-blue-400 border-2 w-full backdrop-blur-3xl group_box">
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <span>{item.name}</span>
                        </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop
        modules={[Autoplay, Pagination]}
        className="w-screen mt-5"
      >
        {data1.map((item, id)=>(
            <SwiperSlide key={id} className='slide-slide text-white font-bold text-[20px]'>
                <div className="flex max-w-screen-sm items-center justify-center">
                    <div className="h-36 w-full">
                        <div className=" h-full rounded-md border-blue-400 border-2 w-full backdrop-blur-3xl group_box">
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <span>{item.name}</span>
                        </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default slider