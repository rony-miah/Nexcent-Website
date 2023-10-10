import React from 'react'
import communityicon1 from '../../assets/communityicon1.png'
import communityicon2 from '../../assets/communityicon2.png'
import communityicon3 from '../../assets/communityicon3.png'

const Community = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className='mb-4'>
            <h2 className='w-[542px] mx-auto font-inter text-headingcolor font-semibold text-headingsize text-center leading-11'>Manage your entire community in a single system</h2>
            <p className='font-inter text-paragraphcolor font-normal text-titlesize leading-6 mt-2 text-center'>Who is Nextcent suitable for?</p>
        </div>
        <div className='w-full gap-[127px] flex justify-between'>
            <div className='px-8 py-6'>
                <img src={communityicon1} alt="" className='mx-auto text-center' />
                <h3 className='w-[267px] font-inter text-headingcolor font-bold text-[28px] text-center leading-[36px] mt-4 mb-2'>Membership Organisations</h3>
                <p className='w-[251px] font-inter text-paragraphcolor font-normal text-paragraphsize leading-5 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='px-8 py-6 mx-auto'>
                <img src={communityicon2} alt="" className='mx-auto text-center' />
                <h3 className='w-[251px] font-inter text-headingcolor font-bold text-[28px] text-center leading-[36px] mt-4 mb-2'>National Associations</h3>
                <p className='w-[240px] font-inter text-paragraphcolor font-normal text-paragraphsize leading-5 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='px-8 py-6 mx-auto'>
                <img src={communityicon3} alt="" className='mx-auto text-center' />
                <h3 className='w-[231px] font-inter text-headingcolor font-bold text-[28px] text-center leading-[36px] mt-4 mb-2'>Clubs And Groups</h3>
                <p className='w-[251px] font-inter text-paragraphcolor font-normal text-paragraphsize leading-5 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
  )
}

export default Community