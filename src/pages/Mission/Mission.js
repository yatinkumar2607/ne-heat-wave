import ButtonOne from '@/atoms/ButtonOne/ButtonOne';
import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const Mission = () => {
  return (
    <div className=" md:mt-[36px] xl:mt-[0px] md:mx-0 mx-[19.09px]">
      <div className="w-full md:max-w-[1256.88px] xl:max-w-[1256.88px  flex  flex-col mx-auto items-center justify-center   relative">
        <div className="flex flex-col justify-center items-center mx-auto w-full">
          <div className="flex  md:flex-row flex-col justify-center lg:space-y-0 items-center space-y-[30px]   mx-auto md:space-y-0">
            <div className="flex flex-col  justify-center items-center w-full md:max-w-[639.88px]  xl:max-w-[639.88px] md:h-[300px] xl:h-[378.701px] h-[378.701px] relative ">
              {/* <div className="absolute top-[-14%]">
                {' '}
                <img
                  src="./assets/images/OVERLAY.png"
                  className="md:mt-0 mt-[50px] md:max-w-[621.188px] xl:max-w-[621.188px]  w-full md:h-[239px] xl:h-[239px] h-[336px]"
                  alt="phase-1"
                />
              </div> */}
              <div className="hidden md:flex">
                {' '}
                <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/CO-UP-MODE.png"
                  className="  md:max-w-[639.88px]  xl:max-w-[639.88px] md:h-[378.701px] xl:h-[378.701px] w-full h-[378.701px]"
                  alt="phase-1"
                />
              </div>
              <div className="flex md:hidden ">
                {' '}
                <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/CO-UP-MODE-MOBILE.png"
                  className="  w-full h-[378.701px] "
                  alt="phase-1"
                />
              </div>
              <div className="absolute top-[2%] flex flex-col justify-center items-center text-center">
                {' '}
                <h1 className="subHeading text-[40px] md:text-[60px] md:leading-[55.2px]  leading-[36.8px] font-normal text-white ">
                  Co-Op Mode
                </h1>
            
              </div>
    
            </div>
            <div className="flex flex-col  justify-center items-center w-full h-[378.701px]   md:max-w-[639.88px]  xl:max-w-[639.88px] md:h-[300px] xl:h-[378.701px]  relative ">
              {/* <div className="absolute top-[-14%]">
                {' '}
                <img
                  src="./assets/images/OVERLAY.png"
                  className="md:flex hidden md:max-w-[621.188px] xl:max-w-[621.188px]  w-full md:h-[239px] xl:h-[239px] h-[336px]"
                  alt="phase-1"
                />
              </div> */}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/MISSIONS.png"
                className="md:flex hidden   md:max-w-[639.88px]  xl:max-w-[639.88px] md:h-[378.701px] xl:h-[378.701px] w-full h-[378.701px]"
                alt="phase-1"
              />
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/Mission-Mobile.png"
                className="md:hidden flex h-[378.701px] w-full"
                alt="phase-1"
              />
              <div className="absolute top-[2%] flex flex-col justify-center items-center text-center">
                {' '}
                <h1 className="subHeading text-[40px] md:text-[60px] md:leading-[55.2px]  leading-[36.8px] font-normal text-white ">
                  MISSIONS
                </h1>
         
              </div>
         
            </div>
          </div>
          {/* Second section City and  fire fighters */}
       
        </div>
      </div>
    </div>
  );
};

export default Mission;


