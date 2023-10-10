import React from 'react'
import unlockImg from '../../assets/unlock-img.png'

const Unlock = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className='mt-[42px] flex justify-between'>
            <div>
              <img src={unlockImg} alt="" />
            </div>
            <div className='py-[82px]'>
                <h4 className='w-[600px] font-inter text-headingcolor font-semibold text-headingsize leading-11'>The unseen of spending three years at Pixelgrade</h4>
                <p className='w-[667px] font-inter text-paragraphcolor font-normal text-titlesize leading-5 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='px-8 py-[14px] text-primarycolor border border-2 border-primarycolor rounded-md hover:bg-primarycolor hover:text-white mt-8'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Unlock