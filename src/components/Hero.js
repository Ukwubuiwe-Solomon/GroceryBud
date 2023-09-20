import React from 'react'
import Typed from 'react-typed'


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mb-[-98px] w-full h-screen mx-auto flex flex-col justify-center text-center'>
        <p className='text-[#00df9a] font-bold uppercase md:text-4xl py-4 mt-[-40]'>Get the best user experience from us for your Business.</p>
        <h1 className='capitalize sm:text-xl md:text-5xl text-3xl font-semibold md:py-6'>grow your business with us</h1>

        <div className='flex text-center items-center justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible for your </p>
            <Typed className='md:text-5xl text-gray-500 sm:text-4xl text-xl font-bold md:pl-4 pl-2 'strings={['Business', 'Projects', 'Clients']} typeSpeed={120} backSpeed={140} loop/>
        </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Feel free to reach out to us, for your unique design for your business</p>
            <button className='py-2 w-[200px] mx-auto rounded-md my-6 font-medium text-black bg-[#00df9a]'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero