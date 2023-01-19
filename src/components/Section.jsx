import React from 'react'
import Nft from '../img/nft.png'
const Section = () => {
  return (
    <div className='bg-slate-900 w-screen h-screen text-white flex justify-center items-center' >
        <div className='gap-6 flex items-start justify-center flex-col mx-auto mt-auto mb-auto'>
            <div className='section_dev'>
                <h1 className='section_title'>2k+</h1>
                <p className='section_text'>Digital NFT launched</p>
            </div>
            <div className='section_dev'>
                <h1 className='section_title'>9k+</h1>
                <p className='section_text'>Active User in Meta World</p>
            </div>
            <div className='section_dev'>
                <h1 className='section_title'>1M+</h1>
                <p className='section_text'>Time sold NFTs</p>
            </div>
        </div>
        <div className='w-1/3 mx-auto'>
            <img src={Nft} alt='nft' className='w-9/12'/>
            <h1 className='text-2xl font-bold mt-9'>Collezione Genesi</h1>
            <p className='mt-3 text-base'>“Our team at Epic worked very closely with Moncler and Matthew 
            Williams to bring these in-game designs to life,” Levy said. “The 
            increased amount of freedom in a digital space like Fortnite 
            provided us the opportunity to be highly creative, which resulted
             in new reactive styles for these Outfits that transform from 
             light to dark as players change altitude within the game.” </p>
        </div>
    </div>
  )
}

export default Section