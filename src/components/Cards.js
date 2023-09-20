import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='py-[10rem] w-full bg-white px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                    <h1 className='text-2xl font-bold py-8 text-center'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-6'>500 GB Storage</p>
                        <p className='py-2 border-b'>I Granted User</p>
                        <p className='py-2 border-b'>Send up 2 GB</p>
                        <button className='py-2 w-[200px] mx-auto rounded-md my-6 md:mx-0 font-medium text-black bg-[#00df9a]'>Start Trial</button>
                    </div>
                    
            </div>
            
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent bg-white' src={Double} alt='/' />
                    <h1 className='text-2xl font-bold py-8 text-center'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-6'>500 GB Storage</p>
                        <p className='py-2 border-b'>I Granted User</p>
                        <p className='py-2 border-b'>Send up 2 GB</p>
                        <button className='py-2 w-[200px] mx-auto rounded-md my-6 md:mx-0 font-medium bg-black text-[#00df9a]'>Start Trial</button>
                    </div>
                    
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                    <h1 className='text-2xl font-bold py-8 text-center'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-6'>500 GB Storage</p>
                        <p className='py-2 border-b'>I Granted User</p>
                        <p className='py-2 border-b'>Send up 2 GB</p>
                        <button className='py-2 w-[200px] mx-auto rounded-md my-6 md:mx-0 font-medium text-black bg-[#00df9a]'>Start Trial</button>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Cards