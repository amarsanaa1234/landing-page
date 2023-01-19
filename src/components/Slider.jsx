import React from 'react'
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import nft from '../img/Subtract.png'
import user from '../img/Ellipse 304.png'
function Slider() {
  return (
    <div className='back'>
        <h1 className='title'>POPULAR CREATORS</h1>
        <div className='mt-16'>
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
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              loop
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper w-screen mb-20"
            >
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slider_slide'>
                <div className="swiper-slide tranding-slide mt-2">
                  <div className="tranding-slide-img flex justify-center ">
                    <img src={nft} alt="Tranding"/>
                  </div>
                  <div className="tranding-slide-content">
                    <img src={user} alt="use" className='absolute bottom-[-32px] left-[126px]'/>
                  </div>
                  <div className="tranding-slide-content-bottom flex flex-col justify-center items-center mt-[50px]">
                      <h2 className="food-name text-[20px] font-bold">
                        Vanessa Hurt
                      </h2>
                      <span className='w-48 text-center'>I am a professional digital art creator</span>
                      <div className='mt-5 flex gap-5'>
                        <button className='w-20 h-8 rounded-lg bg-white text-black'>Follow</button>
                        <button className='w-20 h-8 rounded-lg border-2 border-black'>Message</button>
                      </div>
                      <div className='flex justify-center gap-6 mt-6'>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Art works</span>
                          <p>220</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Followers</span>
                          <p>1150</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                          <span>Following</span>
                          <p>150</p>
                        </div>
                      </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Slider