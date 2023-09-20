import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] py-16 px-4 mx-auto text-gray-300 grid lg:grid-cols-3 gap-8'>
        <div>
        <h1 className="text-[#00df9a] font-bold w-full text-3xl">REACT.</h1>
        <p className='py-4'>Your are free to reach out to us. And we will be glad you did, and come to your help.</p>
        <div className='flex justify-between my-6 md:w-[75%]'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        </div>
        <div className='lg:col-span-2 justify-between flex'>
            <div>
            <h6 className='text-gray-400 font-medium'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insight</li>
                <li className='py-2 text-sm'>Analytics</li>
            </ul>
            </div>
            <div>
            <h6 className='text-gray-400 font-medium'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
            </div>
            <div>
            <h6 className='text-gray-400 font-medium'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Job</li>
                <li className='py-2 text-sm'>Careers</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
            </div>
            <div>
            <h6 className='text-gray-400 font-medium'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
               
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer