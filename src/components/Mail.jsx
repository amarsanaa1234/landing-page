import React from 'react'

function Mail() {
  return (
    <div className='mail_back flex justify-center items-center' id='test1'>
        <div className='w-2/3 h-2/3 flex justify-center flex-col items-center border-2 rounded-xl gap-4 backdrop-blur-xl border-fuchsia-700'>
            <h1 className='text-[38px] font-bold'>Never Miss a Drop</h1>
            <p className='text-[20px] text-center w-[30rem]'>Sign up your Email Adress and never miss anything.
                We will update you once per week!</p>
            <div className='flex gap-3'>
                <input type="text" placeholder='Email adress'  className='border-2 rounded-lg border-white w-[15rem] h-[3rem] bg-[rgba(0,0,0,0)] p-4'/>
                <button className='w-[10rem] h-[3rem] text-white bg-[#BD24E6] rounded-lg'>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Mail