import React from 'react'
import calenderImg from '../../assets/calenderImg.png'

const Calender = () => {
  return (
    <div className='max-w-container mx-auto mt-[48px]'>
        <div className='flex justify-between'>
            <div>
                <img src={calenderImg} alt="" />
            </div>
            <div className='py-[63px]'>
                <h4 className='w-[600px] font-inter text-headingcolor font-semibold text-headingsize leading-11'>How to design your site footer like we did</h4>
                <p className='w-[682px] font-inter text-paragraphcolor font-normal text-titlesize leading-5 mt-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className='px-8 py-[14px] text-primarycolor border border-2 border-primarycolor rounded-md hover:bg-primarycolor hover:text-white mt-8'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Calender