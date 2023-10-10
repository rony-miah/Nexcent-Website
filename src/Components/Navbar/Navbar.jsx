import React from 'react'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='max-w-container mx-auto '>
        <div className='flex justify-between'>
            <div className='w-1/5 py-[30px]'>
                <a href=""><img src={logo} alt="" /></a>
            </div>
            <div className='w-4/5 flex'>
                <ul className='flex gap-[50px] py-[30px] font-inter text-navitemscolor font-normal text-titlesize'>
                    <li ><a href="" className='hover:text-primarycolor'>Home</a></li>
                    <li><a href="" className='hover:text-primarycolor'>Service</a></li>
                    <li><a href="" className='hover:text-primarycolor'>Feature</a></li>
                    <li><a href="" className='hover:text-primarycolor'>Product</a></li>
                    <li><a href="" className='hover:text-primarycolor'>Testimonial</a></li>
                    <li><a href="" className='hover:text-primarycolor'>FAQ</a></li>
                </ul>
                <div className='flex py-[22px] gap-5 ml-[100px] font-inter text-primarycolor font-medium text-paragraphsize'>
                    <button className='px-5 py-2.5 border border-2 border-primarycolor rounded-md hover:bg-primarycolor hover:text-white'>Login</button>
                    <button className='px-5 py-2.5 border border-2 border-primarycolor rounded-md hover:bg-primarycolor hover:text-white'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar