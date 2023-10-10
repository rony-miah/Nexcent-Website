import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='max-w-container mx-auto py-[96px]'>
        <div className='flex space-between'>
            <div className='w-[652px] '>
                <h1 className='w-full font-inter text-headingcolor font-semibold text-[64px] leading-[76px]'>Lessons and insights <span className='font-inter text-primarycolor font-semibold text-[64px]'>from 8 years</span></h1>
                <p className='font-inter text-paragraphcolor font-normal text-titlesize leading-6 mt-4 mb-8'>Where to grow your business as a photographer: site or social media?</p>
                <button className='px-8 py-[14px] text-primarycolor border border-2 border-primarycolor rounded-md hover:bg-primarycolor hover:text-white'>Register</button>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner