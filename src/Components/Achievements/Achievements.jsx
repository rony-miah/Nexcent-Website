import React from 'react'
import membersIcon from '../../assets/membersIcon.png'
import clubsIcon from '../../assets/clubsIcon.png'
import eventsIcon from '../../assets/eventsIcon.png'
import paymentsIcon from '../../assets/paymentsIcon.png'

const Achievements = () => {
  return (
    <div className='max-w-container mx-auto mt-[48px]'>
        <div className='py-[64px] flex justify-between'>
            <div className='mt-5'>
                <h3 className='w-[408px] font-inter text-headingcolor font-semibold text-headingsize leading-11'>Helping a local <span className='font-inter text-primarycolor font-semibold text-headingsize leading-11'>business reinvent itself</span></h3>
                <p className='font-inter text-paragraphcolor font-normal text-titlesize mt-2'>We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className='flex gap-[40px]'>
                    <div className='flex'>
                        <img src={membersIcon} alt="" className='my-[6px]'/>
                        <div className='ml-4'>
                            <h5 className='font-inter text-headingcolor font-bold text-[28px]'>2,245,341</h5>
                            <p className='font-inter text-paragraphcolor font-normal text-titlesize'>Members</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={clubsIcon} alt="" className='my-[6px]'/>
                        <div className='ml-4'>
                            <h5 className='font-inter text-headingcolor font-bold text-[28px]'>46,328</h5>
                            <p className='font-inter text-paragraphcolor font-normal text-titlesize'>Clubs</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-[40px] gap-[70px]'>
                    <div className='flex'>
                        <img src={eventsIcon} alt="" className='my-[6px]'/>
                        <div className='ml-4'>
                            <h5 className='font-inter text-headingcolor font-bold text-[28px]'>828,867</h5>
                            <p className='font-inter text-paragraphcolor font-normal text-titlesize'>Event Bookings</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={paymentsIcon} alt="" className='my-[6px]'/>
                        <div className='ml-4'>
                            <h5 className='font-inter text-headingcolor font-bold text-[28px]'>1,926,436</h5>
                            <p className='font-inter text-paragraphcolor font-normal text-titlesize'>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements