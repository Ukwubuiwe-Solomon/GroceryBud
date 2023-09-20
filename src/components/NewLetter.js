import React from 'react'

const NewLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow</h1>
            <p>Sign uo to our Newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-4'>
                    <input className='p-3 text-black flex w-full rounded-md' type='email' placeholder='Enter Email' />
                    <button className='py-3 px-6 w-[200px] rounded-md ml-4 font-medium text-black bg-[#00df9a]'>Notify Me</button>
                </div>
                    <p className='py-4'>We care about your Business. Read our <span className='text-[#00df9a] px-2'>Privacy Policy.</span> </p>
            </div>
        </div>
    </div>
  )
}

export default NewLetter