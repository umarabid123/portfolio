import React from 'react'

const Hero = ({text,Cursor}) => {
  return (
    <div>
       <h1 className='text-gray-400 text-[2rem]'>Hi, I am <br /> Muhammad Umar</h1>
       <p className='text-sm text-white'>I am a <span className='text-purple-500'>{text}</span>
       <Cursor /></p>
    </div>
  )
}

export default Hero
