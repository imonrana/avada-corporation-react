import React from 'react'
import Container from '../Container/Container'
import { MdOutlinePieChartOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

import businessImgOne from "../../assets/business_img_one.png"

import businessImgTwo from "../../assets/business_img_two.png"



const AllServices = () => {
  return (
    <>
    <Container>
        {/* all services title start */}
        <div className='text-center'>
            <h6 className='font-plusJakarta font-semibold text-base text-[#425AAB]'>All-in-one services</h6>
            <h2 className='font-plusJakarta font-semibold text-[37px] leading-[44px] text-[#040922] w-[803px] mx-auto'>As a global corporation we strive for diversity 
            across the globe</h2>
        </div>

        {/* all service card start */}
        <div className='pt-[65px] pb-[110px]  flex'>
            {/* card-one start */}

            <div className='w-[424px] text-center px-[26px]'>
            <MdOutlinePieChartOutline className='text-[60px] text-[#0F2385] mx-auto' />
            <div className='pt-[50px] pb-[45px]'>
            <h6 className='font-plusJakarta font-medium text-[17px] text-black'>finance Management</h6>
            <p className='font-plusJakarta font-medium text-[17px] text-[#363A4D] leading-[28px] mt-10'>Suscipit risus malesuada in nisi. Amet amet in 
            nisl praesent id arcu quisque.</p>
            </div>
           <div className=' w-fit btn-after mx-auto flex justify-center relative after:content-[" "] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#FFE9B3] hover:after:w-full after:transition-all after:duration-700'>
           <button className='font-plusJakarta font-medium text-[17px] text-[#040922]' type="button"><a href="#">Get started today</a></button>
           <FaArrowRight className='text-[30px] text-black ml-2 cursor-pointer' />
           </div>

            </div> 
             {/* card-one start */}

             <div className='w-[424px] text-center px-[26px]'>
            <MdOutlinePieChartOutline className='text-[60px] text-[#0F2385] mx-auto' />
            <div className='pt-[50px] pb-[45px]'>
            <h6 className='font-plusJakarta font-medium text-[17px] text-black'>finance Management</h6>
            <p className='font-plusJakarta font-medium text-[17px] text-[#363A4D] leading-[28px] mt-10'>Suscipit risus malesuada in nisi. Amet amet in 
            nisl praesent id arcu quisque.</p>
            </div>
           <div className=' w-fit mx-auto btn-after flex justify-center relative after:content-[" "] after:absolute after:bottom-0 after:left-0  after:bg-[#FFE9B3] after:w-0 after:h-1  hover:after:w-full after:transition-all  after:duration-500 after:ease-in-out'>
           <button className='font-plusJakarta font-medium text-[17px] text-[#040922]' type="button"><a href="#">Get started today</a></button>
           <FaArrowRight className='text-[30px] text-black ml-2 cursor-pointer' />
           </div>

            </div>

             {/* card-one start */}

             <div className='w-[424px] text-center px-[26px]'>
            <MdOutlinePieChartOutline className='text-[60px] text-[#0F2385] mx-auto' />
            <div className='pt-[50px] pb-[45px]'>
            <h6 className='font-plusJakarta font-medium text-[17px] text-black'>finance Management</h6>
            <p className='font-plusJakarta font-medium text-[17px] text-[#363A4D] leading-[28px] mt-10'>Suscipit risus malesuada in nisi. Amet amet in 
            nisl praesent id arcu quisque.</p>
            </div>
           <div className=' w-fit mx-auto btn-after flex justify-center relative after:content-[" "] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#FFE9B3]  hover:after:w-full after:transition-all  after:duration-500 after:ease-in-out'>
           <button className='font-plusJakarta font-medium text-[17px] text-[#040922]' type="button"><a href="#">Get started today</a></button>
           <FaArrowRight className='text-[30px] text-black ml-2 cursor-pointer' />
           </div>

            </div>
            </div>
            {/* image card start */}

            <div className=' flex justify-between'>
              <figure className='relative w-fit'>
                <img src={businessImgOne} alt="business one" />
               <figcaption className=' bg-[rgb(0,0,0,0.6)] w-full h-full absolute  bottom-0 left-0 ' >
               <div className='font-plusJakarta font-bold text-white absolute bottom-0 left-[44px] '>
                  <h5 className='text-[26px] leading-[36px] w-[295px] pb-[41px] '>Business Planning,
                  Strategy and equation</h5>
                  <p className='text-lg leading-[28px]'>
                  Porttitor viverra sed  nula id. 
                  </p>
                  <button className='py-2 px-3 bg-white ml-[441px]'>
                <FontAwesomeIcon  className='text-[26px] text-black' icon={faArrowRight} />
                </button>
                </div>
                
               </figcaption>
              </figure>


              <figure className='relative w-fit'>
                <img src={businessImgTwo} alt="business two" />
               <figcaption className=' bg-[rgb(0,0,0,0.6)] w-full h-full absolute  bottom-0 left-0 ' >
               <div className='font-plusJakarta font-bold text-white absolute bottom-0 left-[44px] '>
                  <h5 className='text-[26px] leading-[36px] w-[295px] pb-[41px] '>Get Solution from first 
                  Class consultant</h5>
                  <p className='text-lg leading-[28px]'>
                  Porttitor viverra sed  nula id. 
                  </p>
                  <button className='py-2 px-3 bg-white ml-[441px]'>
                <FontAwesomeIcon  className='text-[26px] text-black' icon={faArrowRight} />
                </button>
                </div>
                
               </figcaption>
              </figure>
            </div>
    </Container>



    </>
  )
}

export default AllServices