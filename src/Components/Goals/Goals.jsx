import React from 'react'
import Container from '../Container/Container'
import goalsImg from "../../assets/Goals_img.png"
import { FaCheck } from "react-icons/fa";

const Goals = () => {
  return (
    <section className=' bg-goalsBg bg-cover bg-center bg-no-repeat my-[140px]'>
        <Container>
            <div className='pt-[120px]'>
            <figure className='flex justify-between'>
                <img src={goalsImg} alt="goals_img" className='max-w-[648px]' />
                <figcaption className='mt-[118px] w-[486px]'>
                    <div className='space-y-[36px]'>
                    <p className='py-[5px] px-3 text-xl text-[#000000] font-plusJakarta font-semibold inline-block bg-[#FFE9B3]'>Best solutions</p>
                    <h2 className=']font-plusJakarta font-semibold text-[42px] text-[#040922] w-[404px]'>Real-life strategy to 
                    reach your goals.</h2>
                    <p className='font-plusJakarta font-medium text-[17px] text-[#454C4C] tracking-[5%]'>Scelerisque dignissim in leo at magna donec mi metus ipsum
                    luctus nam elit sociis luctus et aliquam libero.</p>
                    </div>
                    <hr className='my-[60px] border-[#000000] ' />
                    <ul className=' font-plusJakarta font-medium text-[16px] text-[#000000] space-y-[44px] w-[441px]'>
                        <li className='flex items-center gap-x-[13px]'> <span className='text-[24px] text-[#0029F4]'><FaCheck /></span> Praesent sapien massa, convallis a pellentesque nec, 
                        egestas non nisi. Sed porttitor lectus nibh.</li>
                        <li className='flex items-center gap-x-[13px] '> <span className='text-[24px] text-[#0029F4]'><FaCheck /></span> Cras ultricies ligula sed magna dictum porta. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </figcaption>
            </figure>

            
            </div>
            
        </Container>


    </section>
  )
}

export default Goals