import React from 'react'

const Footer = () => {
  return (
    <div className='md:max-w-[1440px]   xxl:max-w-[1920px] xxxl:max-w-[2560px] w-full  md:py-4 md:px-10 px-5 mx-auto  md:mb-0 mb-[30px]'>


<div className="md:mt-[1rem] mt-[2rem] flex  justify-between items-center w-full  px-5 ">
          <div className='hidden md:flex'>
          <p className="text-white md:text-[20px] text-[14px] w-full md:leading-[21.28px] leading-[18.62px] md:tracking-[-0.32px] md:px-0 px-10 tracking-[-0.28px] opacity-60">
          All rights reserved
              </p>
          </div>
          <div className='md:ml-[-70px]'>
          <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[
202.72px] h-[145px] object-cover md:flex hidden"
             />
                <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[71px] h-[57.79px] object-cover md:hidden flex"
             />
            </div>
          <div className="flex items-center justify-center text-white">
            <div className=''>
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/tg.png"
                className="h-[18.58px] w-[22.52px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="tg"
              />
            </div>
            <div className='ml-[15px]'>
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/x.png"
                className="w-[21.94px] h-[18.57px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="twitter"
              />
            </div>
            <div className='ml-[15px]'>
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/discord.png"
                className="w-[23.21px] h-[18.57px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="discord"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer