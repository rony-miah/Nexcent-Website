import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import {BsArrowRight} from 'react-icons/bs'

const CommunityUpdates = () => {
  return (
    <div className='max-w-container mx-auto mt-[48px]'>
        <div>
            <h2 className='font-inter text-headingcolor font-semibold text-headingsize text-center'>Caring is the new marketing</h2>
            <p className='w-[628px] font-inter text-paragraphcolor font-normal text-titlesize text-center mx-auto mt-2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className='mt-4 flex'>
            <div className='w-1/3 h-[366px] relative'>
                <img src={image1} alt="" />
                <div className='w-[285px] p-4 bg-[#F5F7FA] rounded-lg absolute bottom-0 right-[56px]'>
                    <p className='font-inter text-paragraphcolor font-semibold text-xl text-center leading-[28px] mt-4'>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <div className='w-full flex justify-center mt-4 p-2 bg-[#F5F7FA]'>
                        <button className='font-inter text-primarycolor font-semibold text-2xl mr-[6px]'>Read more</button>
                        <BsArrowRight className='text-primarycolor text-2xl mt-[4px]'></BsArrowRight>
                    </div>
                </div>
            </div>
            <div className='w-1/3 h-[366px] relative'>
                <img src={image2} alt="" />
                <div className='w-[285px] p-4 bg-[#F5F7FA] rounded-lg absolute bottom-0 right-[56px]'>
                    <p className='font-inter text-paragraphcolor font-semibold text-xl text-center leading-[28px] mt-4'>What are your safeguarding responsibilities and how can you manage them?</p>
                    <div className='w-full flex justify-center mt-4 p-2 bg-[#F5F7FA]'>
                        <button className='font-inter text-primarycolor font-semibold text-2xl mr-[6px]'>Read more</button>
                        <BsArrowRight className='text-primarycolor text-2xl mt-[4px]'></BsArrowRight>
                    </div>
                </div>
            </div>
            <div className='w-1/3 h-[366px] relative'>
                <img src={image3} alt="" />
                <div className='w-[285px] p-4 bg-[#F5F7FA] rounded-lg absolute bottom-0 right-[56px]'>
                    <p className='font-inter text-paragraphcolor font-semibold text-xl text-center leading-[28px] mt-4'>Revamping the Membership Model with Triathlon Australia</p>
                    <div className='w-full flex justify-center mt-4 p-2 bg-[#F5F7FA]'>
                        <button className='font-inter text-primarycolor font-semibold text-2xl mr-[6px]'>Read more</button>
                        <BsArrowRight className='text-primarycolor text-2xl mt-[4px]'></BsArrowRight>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityUpdates