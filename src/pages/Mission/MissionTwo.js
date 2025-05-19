import ButtonOne from '@/atoms/ButtonOne/ButtonOne';
import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const MissionTwo = () => {
  return (
    <div className=" md:mt-[75px] xl:mt-[0px] md:mx-0 mx-[19.09px]">
      <div className="w-full md:max-w-[1256.762px] xl:max-w-[1256.762px]  flex  flex-col mx-auto items-center justify-center   relative">
        <div className="flex flex-col justify-center items-center mx-auto w-full">
          
          {/* Second section City and  fire fighters */}
          <div className="flex  md:flex-row flex-col justify-center items-center ">
            <div className="flex flex-col  justify-center items-center w-full md:max-w-[621.188px]  xl:max-w-[621.188px] md:h-[300px] xl:h-[378.701px] relative ">
              {/* <div className="absolute top-[-14%]">
                {' '}
                <img
                  src="./assets/images/OVERLAY.png"
                  className=" md:max-w-[621.188px] xl:max-w-[621.188px]  w-full md:h-[239px] xl:h-[239px] h-[336px]"
                  alt="phase-1"
                />
              </div> */}

              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/CITIES.png"
                className="hidden md:flex  md:w-[621.188px] xl:max-w-[621.188px] md:h-[378.701px] xl:h-[378.701px] w-full h-full"
                alt="phase-1"
              />
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/CITIES-MOBILE.png"
                className="md:hidden flex  h-[378.701px] w-full"
                alt="phase-1"
              />

              <div className="absolute top-5 text-white md:left-[8%]">
                <div className="flex flex-col md:justify-start justify-center md:items-start items-center">
                  <div>
                    <h1 className="subHeading md:text-[60px] text-[40px] md:leading-[55.2px] leading-[36.8px]  font-normal text-white ">
                      Unlock New Cities,
                      <br />
                      Upgrade Equipment
                    </h1>
                  </div>

                  <div className="flex  items-center text-center md:text-start  mt-[20px] md:mt-[32px]">
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/Gold_Star.png"
                      className="  md:w-[34.761px] xl:w-[34.761px] md:h-[34.331px] xl:h-[34.331px] h-[20px] w-[20px]"
                      alt="phase-1"
                    />
                    <h1 className="mx-2 subHeading text-[30px]  leading-[27.6px]  font-normal  text-white ">
                      Earn Higher Ranks
                    </h1>
                  </div>


                  {/* <div className='md:mt-[60px] xl:mt-[66px] xxl:mt-[34px]  mt-[140px]'><p className="text-white  md:text-[16px] text-[14px] w-[263px]  md:max-w-[336px] md:leading-[21.28px] leading-[18.62px] md:tracking-[-0.32px] lg:px-0 xl:px-0 xxl:px-0 xxxl:px-0 md:px-0  tracking-[-0.28px] opacity-60">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p></div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center w-full  md:w-[617.574px] xl:w-[617.574px]  md:h-[300px] xl:h-[378.701px] h-[378.701px] relative ">
              {/* <div className="absolute top-[-14%]">
                {' '}
                <img
                  src="./assets/images/OVERLAY.png"
                  className="hidden md:flex md:max-w-[621.188px] xl:max-w-[621.188px]  w-full md:h-[239px] xl:h-[239px] h-[336px]"
                  alt="phase-1"
                />
              </div> */}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/FIGHTERS.png"
                className="hidden md:flex  md:w-[617.574px] xl:w-[617.574px] md:h-[378.701px] xl:h-[378.701px] w-full h-full"
                alt="phase-1"
              />
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/FIGHTERS-MOBILE.png"
                className="flex md:hidden h-[378.701px] w-full "
                alt="phase-1"
              />
              <div className="absolute md:bottom-[2%] xl:bottom-[10%] bottom-[8%] flex flex-col justify-center items-center text-center">
                <div className="flex justify-center items-center w-full mx-auto fllex-col   xxl:space-x-[28px] md:space-x-[28px] space-x-[9.48px] mt-[42px]">
                  <div>
              
                  </div>
                  <div>
                  <ButtonTwo commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px]   " text="Pre-Order Now"/>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionTwo;


