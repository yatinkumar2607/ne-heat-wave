import ButtonOne from '@/atoms/ButtonOne/ButtonOne';
import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const Phases = () => {
  return (
    <div className="md:mt-[3rem] lg:mt-[3rem] xxl:mt-[3rem] xxxl:mt-[2rem]  mt-[-100px]  safari-phase" id="About">
      <div className="w-full md:max-w-[1440px] xxl:max-w-[1920px] xxxl:max-w-[2560px]  flex  flex-col mx-auto items-center justify-center  md:px-10 px-5 my-20 relative">
        <div className="flex flex-col justify-center items-center w-full mx-auto">
          <div className="flex md:flex-row flex-col justify-center items-center">
            <div className="md:mt-[55px]">
              <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-normal text-white ">
                Phases of
              </h1>
            </div>
            <div>
              <h1 className="subHeading text-[50px]  md:text-[130px]   font-normal md:leading-[96.766px] leading-[37.218px] text-white md:tracking-[-2.6px] tracking-[-1px] mx-4">
                FIREFIGHTERS
              </h1>
            </div>
            <div className="md:mt-[55px]">
              <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-normal text-white ">
                in the game
              </h1>
            </div>
          </div>
          <div className="flex text-center mt-[40px] md:mt-[83px]">
            <p className="text-white md:text-[16px] text-[14px]  md:max-w-[606px] md:leading-[21.28px] leading-[18.62px] md:tracking-[-0.32px]  tracking-[-0.28px] opacity-60">
            As players progress, they unlock new equipment, upgrade their skills, and earn recognition for their bravery in the face of danger. With each successful mission, these Heroes inche closer to unraveling the mystery behind the sudden outbreak of fires and confronting the sinister forces behind the chaos.
            </p>
          </div>
        </div>

        <div className="flex  flex-wrap xl:space-x-[12px] xxl:space-x-[8rem] md:space-x-[1rem] md:space-y-0 space-y-[26px] md:mt-[4rem] mt-[2rem] items-start">
          <div className="1  flex justify-start items-start flex-col text-white md:w-[387.465px]  lg:w-[357.465px]">
            <div className="flex flex-col justify-center items-center relative">
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/phase-1.png"
                className="xl:w-[387.465px] xl:h-[409.334px] md:w-[387.465px]  lg:w-[357.465px] md:h-[409.334px]"
                alt="phase-1"
              />
              <div className="absolute bottom-4">
                {' '}
                <h1 className="subHeading text-[40px] font-normal leading-normal text-white ">
                TRAINING
                </h1>
              </div>
            </div>
            <div className="flex text-center mt-[30px] md:mt-[40px]">
              <p className="text-white md:text-[16px] text-[14px]  md:leading-[21.28px] leading-[18.62px]  md:tracking-[-0.32px]  tracking-[-0.28px] opacity-60" >
              Players undergo rigorous drills, honing their skills and mastering essential firefighting techniques to prepare for the challenges ahead.
              </p>
            </div>
          </div>
          <div className="1  flex justify-start items-start flex-col text-white md:w-[387.465px]  lg:w-[357.465px]">
            <div className="flex flex-col justify-center items-center relative">
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/phase-2.png"
                className="xl:w-[387.465px] xl:h-[409.334px] md:w-[387.465px]  lg:w-[357.465px] md:h-[409.334px]"
                alt="phase-1"
              />
              <div className="absolute bottom-4">
                {' '}
                <h1 className="subHeading text-[40px] font-normal leading-normal text-white ">
                FIREFIGHTING
                </h1>
              </div>
            </div>
            <div className="flex text-center mt-[30px] md:mt-[40px]">
              <p className="text-white md:text-[16px] text-[14px]  md:leading-[21.28px] leading-[18.62px]  md:tracking-[-0.32px]  tracking-[-0.28px] opacity-60">
              In the heat of battle, players leap into action, battling towering flames, rescuing civilians, and containing the spread of fire to protect lives and property.
              </p>
            </div>
          </div>
          <div className="1  flex justify-start items-start flex-col text-white md:w-[387.465px]  lg:w-[357.465px]">
            <div className="flex flex-col justify-center items-center relative">
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/phase-3.png"
                className="xl:w-[387.465px] xl:h-[409.334px] md:w-[387.465px]  lg:w-[357.465px] md:h-[409.334px]"
                alt="phase-1"
              />
              <div className="absolute bottom-4">
                {' '}
                <h1 className="subHeading text-[40px] font-normal leading-normal text-white ">
                EARNING RANK
                </h1>
              </div>
            </div>
            <div className="flex text-center mt-[30px] md:mt-[40px]">
              <p className="text-white md:text-[16px] text-[14px]  md:leading-[21.28px] leading-[18.62px]  md:tracking-[-0.32px]  tracking-[-0.28px] opacity-60">
              Rising through the ranks, players assume the role of a seasoned captain, leading their team with precision and authority, making critical decisions under pressure, and earning recognition for their leadership and bravery on the frontlines.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mx-auto fllex-col md:mt-[60px]   mt-[42px]">
          {/* <div>
            <ButtonOne commanStyle="Header-Button  text-white flex justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer " text="Get Started"/>
          
          </div> */}
          <div>
          <ButtonTwo commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer " text="Pre-Order Now"/>
            {/* <button className="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer  ease-in-out duration-500">
         Pre-Order Now 
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phases;
