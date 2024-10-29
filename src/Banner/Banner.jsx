import React from 'react'

// image import


const Banner = () => {
  return (
    <>
    <div className='bg-heroImg bg-cover bg-no-repeat pt-[230px] pb-[168px]'>
       <div className="container">
       <div className="banner_sub_title">
        <p className='font-plusJakarta font-semibold text-sm text-white'>
        <span className='text-base text-black bg-gray-300 py-1 px-2 mr-7'>Best solutions</span>
        Let’s work on your project together
        </p>
        <h1 className='title font-plusJakarta font-semibold  text-[56px] text-white w-[664px] pt-8 pb-7'>Our consultancy stays in 
        sync with your strategy</h1>
        <p className='font-plusJakarta font-medium text-base leading-7 text-white w-[489px]'>Scelerisque dignissim in leo at magna donec mi metus ipsum 
        luctus nam elit sociis luctus et aliquam libero.</p>
       </div>
       </div>
    </div>
    </>
  )
}

export default Banner