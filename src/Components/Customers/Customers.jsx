import React from 'react'
import customersImg from '../../assets/customersImg.png'
import clientlogo1 from '../../assets/clientlogo1.png'
import clientlogo2 from '../../assets/clientlogo2.png'
import clientlogo3 from '../../assets/clientlogo3.png'
import clientlogo4 from '../../assets/clientlogo4.png'
import clientlogo5 from '../../assets/clientlogo5.png'
import clientlogo6 from '../../assets/clientlogo6.png'
import {BsArrowRight} from 'react-icons/bs'

const Customers = () => {
  return (
    <div className='max-w-container mx-auto mt-[48px] py-8'>
        <div className='flex justify-between'>
            <div>
                <img src={customersImg} alt="" />
            </div>
            <div className='w-[748px]'>
                <p className='font-inter text-paragraphcolor font-medium text-titlesize leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h3 className='font-inter text-primarycolor font-semibold text-xl mt-4'>Tim Smith</h3>
                <h6 className='font-inter text-[#89939E] font-normal text-titlesize mt-2'>British Dragon Boat Racing Association</h6>
                <div className='mt-8 flex justify-between'>
                    <div className='flex gap-x-[41px]'>
                        <img src={clientlogo1} alt="" />
                        <img src={clientlogo2} alt="" />
                        <img src={clientlogo3} alt="" />
                        <img src={clientlogo4} alt="" />
                        <img src={clientlogo5} alt="" />
                        <img src={clientlogo6} alt="" />
                    </div>
                    <div className='flex gap-x-2'>
                        <a href='' className='font-inter text-primarycolor font-semibold text-xl my-auto'>Meet all customers</a>
                        <a href="" className='my-auto'><BsArrowRight className='text-primarycolor text-2xl'></BsArrowRight></a>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers