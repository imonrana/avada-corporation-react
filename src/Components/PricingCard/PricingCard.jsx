import React from 'react'
import Container from '../Container/Container'

const PricingCard = () => {
  return (
    <section>

        <Container>
             {/* pricing card title start */}

             <header className='text-center font-plusJakarta font-semibold space-y-[53px] mb-[88px]'>
                <h6 className='text-base text-[#425AAB]'>Flexible pricing options</h6>
                <h2 className='text-[37px] text-[#040922] leading-[44px] w-[603px]  mx-auto'>We deliver world-class consulting
                services</h2>
             </header>

             {/* pricing card start */}

             <div className='mb-5  flex justify-normal gap-x-[24px]'>
                <article className=' flex-1 px-[39px] py-[42px] border-[1px] border-[#D9D9D9]  font-plusJakarta text-center '>
                    <div>
                    <h3 className='font-semibold text-[13px] text-black'>Starter</h3>
                    <p className='font-semibold text-[37px]  text-black mt-[29px] mb-[13px]'>Free</p>
                    <p className='font-semibold text-[13px] text-[#425AA4]'>always</p>
                    <button className=' mt-10 mb-[32px] py-[17px] px-[64px] bg-[#3269FF] rounded-[20px] font-semibold text-base text-white hover:bg-cardBtnGradient transition-all duration-700 ease-linear'>
                        <a  href="#"> Get Started</a>
                        </button>
                    <p className='text-[17px] font-medium text-black'>Donec sollicitudin
                    molestie malesuada.</p>
                    </div>
                    <hr className='border-black my-10' />
                    <div>
                        <h5 className='font-semibold text-base leading-[28px] text-black mb-[30px]'>What’s Included</h5>
                        <p className='font-medium text-sm text-black leading-[23px] w-[136px] mx-auto'>
                        Up to 5 users Unlimited projects Free image hosting 50+ integrations
                        </p>
                    </div>
                </article>

                <article className=' flex-1 px-[39px] mt-[-52px] py-[42px] border-[1px] border-[#D9D9D9] font-plusJakarta text-center relative '>
                    <div>
                        <div className='absolute top-0 left-0 w-full '>
                        <p className='py-[14px] px-[87px] bg-[rgba(174,158,208,0.58)] rounded-[20px] text-xl font-semibold text-[#9B77E7]'> Most popular</p>
                        </div>
                    <h3 className='font-semibold text-[13px] text-black mt-[52px]'>Freelancer</h3>
                    <p className='font-semibold text-[37px]  text-black mt-[29px] mb-[13px]'>$12</p>
                    <p className='font-semibold text-[13px] text-[#425AA4]'>per month</p>
                    <button className=' mt-10 mb-[32px] py-[17px] px-[50px] bg-[#AE9ED0] rounded-[20px] font-semibold text-base text-white hover:bg-cardBtnGradient transition-all duration-700 ease-linear'>
                        <a  href="#">Start 15-day trial</a>
                        </button>
                    <p className='text-[17px] font-medium text-black'>
                    Vestibulum commo neque elit integer tempus sed.
                    </p>
                    </div>
                    <hr className='border-black my-10' />
                    <div>
                        <h5 className='font-semibold text-base leading-[28px] text-black mb-[30px]'>What’s Included</h5>
                        <p className='font-medium text-sm text-black leading-[23px] w-[136px] mx-auto'>
                        Up to 5 users Unlimited projects Free image hosting 50+ integrations
                        </p>
                    </div>
                </article>

                <article className=' flex-1 px-[39px] py-[42px] border-[1px] border-[#D9D9D9] font-plusJakarta text-center '>
                    <div>
                    <h3 className='font-semibold text-[13px] text-black'>Business</h3>
                    <p className='font-semibold text-[37px]  text-black mt-[29px] mb-[13px]'>$24</p>
                    <p className='font-semibold text-[13px] text-[#425AA4]'>always</p>
                    <button className=' mt-10 mb-[32px] py-[17px] px-[64px] bg-[#3269FF] rounded-[20px] font-semibold text-base text-white hover:bg-cardBtnGradient transition-all duration-700 ease-linear'>
                        <a  href="#"> Get Started</a></button>
                    <p className='text-[17px] font-medium text-black'>Curabitur arcu erat, accumsan id imperdiet.</p>
                    </div>
                    <hr className='border-black my-10' />
                    <div>
                        <h5 className='font-semibold text-base leading-[28px] text-black mb-[30px]'>What’s Included</h5>
                        <p className='font-medium text-sm text-black leading-[23px] w-[136px] mx-auto'>
                        Up to 5 users Unlimited projects Free image hosting 50+ integrations
                        </p>
                    </div>
                </article>

                <article className=' flex-1 px-[39px] py-[42px] border-[1px] border-[#D9D9D9]  font-plusJakarta text-center '>
                    <div>
                    <h3 className='font-semibold text-[13px] text-black'>Enterprise</h3>
                    <p className='font-semibold text-[37px]  text-black mt-[29px] mb-[13px]'>$48</p>
                    <p className='font-semibold text-[13px] text-[#425AA4]'>always</p>
                    <button className=' mt-10 mb-[32px] py-[17px] px-[64px] bg-[#3269FF] rounded-[20px] font-semibold text-base text-white hover:bg-cardBtnGradient transition-transform duration-700 ease-in-out'>
                        <a  href="#"> Get Started</a></button>
                    <p className='text-[17px] font-medium text-black'>Praesent sapien massa, convallis a nec..</p>
                    </div>
                    <hr className='border-black my-10' />
                    <div>
                        <h5 className='font-semibold text-base leading-[28px] text-black mb-[30px]'>What’s Included</h5>
                        <p className='font-medium text-sm text-black leading-[23px] w-[136px] mx-auto'>
                        Up to 5 users Unlimited projects Free image hosting 50+ integrations
                        </p>
                    </div>
                </article>
             </div>

        </Container>
    </section>

  )
}

export default PricingCard