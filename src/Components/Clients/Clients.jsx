import React from 'react'
import clientlogo1 from '../../assets/clientlogo1.png'
import clientlogo2 from '../../assets/clientlogo2.png'
import clientlogo3 from '../../assets/clientlogo3.png'
import clientlogo4 from '../../assets/clientlogo4.png'
import clientlogo5 from '../../assets/clientlogo5.png'
import clientlogo6 from '../../assets/clientlogo6.png'

const Clients = () => {
  return (
    <div className='max-w-container mx-auto py-10'>
        <div className=''>
            <h2 className='font-inter text-headingcolor font-semibold text-headingsize text-center'>Our Clients</h2>
            <p className='font-inter text-paragraphcolor font-normal text-titlesize leading-6 mt-[6px] text-center'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='py-[35px] flex justify-between'>
            <img src={clientlogo1} alt="" />
            <img src={clientlogo2} alt="" />
            <img src={clientlogo3} alt="" />
            <img src={clientlogo4} alt="" />
            <img src={clientlogo5} alt="" />
            <img src={clientlogo6} alt="" />
        </div>
    </div>
  )
}

export default Clients