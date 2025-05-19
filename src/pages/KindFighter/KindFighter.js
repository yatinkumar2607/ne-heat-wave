import ButtonOne from '@/atoms/ButtonOne/ButtonOne';
import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const KindFighter = () => {
  return (
    <div className=" footer-bg footer-bg-mobile xxl:h-screen xxxl:h-screen xl:h-screen md:h-screen mt-[2rem] h-[320px] relative  md:mt-[62px]">
      <div className=" absolute xl:top-[30%] md:top-[20%] md:left-[3%]">
        <div className="  flex  flex-col  justify-center items-start mx-auto md:mt-0 mt-[20px]">
          <div className='flex flex-col justify-center '>
            <h1 className="subHeading text-[50px] xl:text-[80px] xl:leading-[64.4px] xl:tracking-[-1.6px] md:text-[80px]   font-normal md:leading-[64.4px] leading-[37.218px] text-white tracking-normal md:tracking-[-1.6px] mx-2 md:px-0 px-10">
              Let’s fight
            </h1>
            <h1 className="subHeading text-[50px]  md:text-[80px]   font-normal md:leading-[59.548px] leading-[37.218px] text-white tracking-normal mx-2 md:px-0 px-10">
              for MANKIND
            </h1>
            <br />
            <div className="flex text-start mt-[20px] md:mt-[32px]">
              <p className="text-white md:text-[16px] text-[14px] w-full  md:max-w-[336px] md:leading-[21.28px] leading-[18.62px] md:tracking-[-0.32px] md:px-0 px-10 tracking-[-0.28px] opacity-60">
              In "Heatwave: Heroes Unite," courage, teamwork, and heroism are the ultimate weapons against the raging flames, as players embark on unforgettable fire fighting adventures to become true heroes of the inferno.
              </p>
            </div>
          </div>
          <div className="md:mt-[66px] mt-[33px] md:px-0 px-10">
            <div className="flex justify-start items-center w-full mx-auto flex-col ] ">
              <div>
              
              </div>
              <div>
              <ButtonTwo commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer " text="Pre-Order Now"/>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-0 md:right-[30%] xl:right-[30%] xxl:right-[30%] xxxl:right-[30%] right-8  absolute ">
                <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/develop.png"
                  className="md:w-[137.58px] md:h-[127.39px]  w-[37.56px] h-[34.779px]"
                  alt="phase-1"
                />
              </div>
    </div>
  );
};

export default KindFighter;


// md:left-[10%]