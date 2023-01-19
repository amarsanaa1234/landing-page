import React from 'react'
import {FaEthereum} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
const Modal = ({index, onClose}) => {
    return (
    <div onClick={onClose} className='bg-black w-screen h-screen fixed text-white'>
        <div onClick={(e) => {e.stopPropagation()}} className='layout_frame'>
            <img src={index.image} alt="nft image" className='rounded-2xl w-[250px] h-[250px] object-cover'/>
            <div className='w-full'>
                <button onClick={onClose} className='fixed top-[8px] right-[8px]'><AiFillCloseCircle/></button>
                <div className='flex flex-col justify-center items-center mt-12 p-4 '>
                    <p className='font-bold text-[25px]'>{index.title}</p>
                    <div className='flex gap-3 justify-center items-center'> 
                        <FaEthereum className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                        from-[#E025CE] via-[#4AED52]to-[#E025CE] text-[30px]'/>
                        <div>
                            <p className='text-gray-200'>price</p>
                            <p className='font-semibold text-[12.27]'>{index.price}</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-4 flex-col'>
                    <button className='bg-yellow-300 w-40 h-12 rounded-lg'>
                        <span className='font-bold'>Buy now</span>
                    </button>
                    <p>This NFT is a third-party listing:
                    - To complete the transaction, you will need to pay a gas fee and wait for the blockchain confirmation which normally takes around 10 minutes; and
                    - You are responsible for verifying the identity, legitimacy, and authenticity of this NFT.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal