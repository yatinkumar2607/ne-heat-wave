import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const Association = () => {
  return (
    <div
      className="md:mt-[3rem] lg:mt-[3rem] xxl:mt-[3rem] xxxl:mt-[2rem]    "
      id="Association"
    >
      <div className="w-full md:max-w-[1440px] xxl:max-w-[1920px] xxxl:max-w-[2560px]  flex  mx-auto   md:px-10 px-5 justify-center items-center my-5 md:my-20 relative">
      <div className='flex  md:flex-row flex-col-reverse  justify-center items-center'>  <div className="flex flex-col justify-start items-start   md:w-1/2 w-full  md:mt-0 mt-[51px]">
          <div className="flex flex-col md:justify-start justify-center
           md:items-start items-center">
            <div>
              {' '}
              <h1 className="subHeading md:text-start text-center md:leading-[67.1px]  md:text-[70px] f  text-white xxxl:text-[79px] w-full text-[35px] leading-[36.05px] font-normal">
                {' '}
                Support the International <br />
                Association of Fire Fighters (IAFF)
              </h1>
            </div>

            <div className="flex md:text-start text-center mt-[40px] md:mt-[54px]">
              {' '}
              <p className="text-white md:text-[16px] text-[20px] font-medium  md:max-w-[606px] md:leading-[21.28px] leading-[26.6px] md:tracking-[-0.32px]  tracking-[-0.4px] opacity-60">
                By pre-ordering Heatwave: Heroes Unite today, $5 of each game{' '}
                <br  className='md:flex hidden'/>
                sold goes directly back to the IAFF Foundation.
              </p>
            </div>
            
          </div>
        </div>

        <div className=" md:w-1/2 w-full flex flex-col md:justify-end justify-center md:items-end items-center mx-auto relative">
          <img
            src="../assets/images/new-iatf.png"
            className="w-[193.98px] h-[195.94px]  md:w-[308.935px] md:h-[312.051px] xxl:w-[308.935px] xxl:h-[312.051px]"
            alt="phase-1"
          />
          <div className='mt-[40px] md:mt-[70px]'> <ButtonTwo commanStyle="Header-Button flex text-white  justify-center items-center  text-center md:text-[25px] text-[14px] md:leading-[30.
                617px] leading-[17.201px] md:tracking-[-0.5px] tracking-[-0.28px] md:w-[286.646px] w-[133.524px] md:h-[89.08px] h-[38.353px] cursor-pointer " text="Pre-Order Now"/></div>
        </div></div>
      </div>
    </div>
  );
};

export default Association;
