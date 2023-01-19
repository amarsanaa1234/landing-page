import React from 'react'
import {BiWalletAlt} from 'react-icons/bi'
import {FiFramer} from 'react-icons/fi'
import {BsImageFill} from 'react-icons/bs'
function Information() {
  return (
    <div className='back' id='Howto'>
      <h1 className='title'>HOW TO BECOME MONKEY NFT CREATOR</h1>
      <div className='mt-16 flex gap-8 mb-20'>
        <div className='wallet-box mt-[5rem]'>
          <BiWalletAlt className='wallet-icon'/>
          <h1 className='wallet-title'>Connect your Wallet</h1>
          <p className='wallet-text'>Connect your Wallet, use the pink
              button in the left of the Header.
              Now you can use any feature.</p>
        </div>
        <div className='wallet-box'>
          <FiFramer className='wallet-icon'/>
          <h1 className='wallet-title'>Create Artwork</h1>
          <p className='wallet-text'>Create your NFT collection. Add social
            links, profile and banner image. Set
            a secondary sales fee for your artwork.
            </p>
        </div>
        <div className='wallet-box mt-[5rem]'>
          <BsImageFill className='wallet-icon'/>
          <h1 className='wallet-title'>Upload your NFTs</h1>
          <p className='wallet-text'>Upload. Add a title & description.
            Costumize your NFT’s, properties,
            stats and unlockable content.</p>
        </div>
      </div>
    </div>
  )
}

export default Information