import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const Generations = () => {
  return (
    <div className="md:mt-[7rem]      mt-[2rem] xxl:h-auto xxxl:h-[75vh]  overflow-hidden Generations  h-[717.61px] md:h-auto xl:h-auto lg:h-auto " id="About">
      <div className="w-full md:max-w-[1440px] xxl:max-w-[1920px] xxxl:max-w-[2560px]    md:px-10 px-5    relative">
        <div className=''>

       
        <div className="flex md:justify-start  md:items-start items-center w-full bg-text xl:ml-[121px]  xxl:ml-[321px]">
          <div className="flex flex-col md:justify-start  md:items-start items-center">
            <div>
              {' '}
              <h1 className="subHeading md:text-start text-center  text-[25px] md:text-[60px] font-normal  text-white xxxl:text-[79px] ">
                {' '}
                FUTURE GENERATIONS <br className='md:hidden flex'/> WILL KNOW YOU
              </h1>
            </div>
            <div className='flex md:justify-start md:items-start  items-center justify-center w-full'>
              <h1 className="subHeading text-[50px] md:mt-0 mt-4 xxxl:text-[145px] md:text-[110px]   font-normal md:leading-[86.766px] leading-[37.218px] text-white md:tracking-[-2.6px] tracking-[-1px] md:text-start text-center ">
              FOUGHT FIRE & WON
              </h1>
              <div className='md:flex hidden'> <img
                src="../assets/images/new-iatf.png"
                className="w-[102px] h-[102px] mt-[-15px] object-cover"
                alt="phase-1"
              /></div>
            </div>
            <div className='md:hidden mt-[23px] flex flex-col justify-center
            
             items-center text-center'>
              <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/iatf.png"
                  className=" w-[99.709px] h-[99.709px] "
                  alt="iatf"
                />
               </div>
            <div className="md:mt-[110px] mt-[30px] xl:mt-[110px] md:justify-start justify-center md:items-start items-center w-full">
              {' '}
              <p className="text-white md:text-start text-center md:text-[25px] text-[14px] w-full md:max-w-[700px] md:leading-[33.25px] leading-[18.62px] md:tracking-[-0.35px]  tracking-[-0.28px] opacity-60">
              In Heatwave: Heroes Unite players step into the boots of courageous real-life firefighters from the IAFF tasked with battling intense blazes, rescuing civilians, and restoring safety to cities engulfed in flames. Set in a sprawling metropolis threatened by a sudden onslaught of fires, players must navigate through increasingly challenging scenarios, utilizing their skills, teamwork, and quick thinking to overcome each inferno.

              </p>
            </div>
            <div className="md:mt-[30px] mt-[30px] xl:mt-[30px]">
              {' '}
              <p className="text-white md:text-[25px] md:text-start text-center text-[14px]  md:max-w-[700px] md:leading-[33.25px] leading-[18.62px] md:tracking-[-0.35px]  tracking-[-0.28px] opacity-60">
              We donate $5 of every pre-order to the International Association of Fire Fighters (IAFF) Foundation, to assist in furthering their mission to advance the rights, safety, and future of firefighters.
              </p>
            </div>
            <div className="flex md:justify-start justify-center items-center w-full mx-auto fllex-col md:mt-[87px]   mt-[42px]">
              <div>
               
              </div>
              <div>
              <ButtonTwo commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px]" text="Pre-Order Now"/>
                
              </div>
            </div>
          </div>
        </div>
        <div className='absolute  md:right-[-10%] top-10'>
        <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/generation.png"
                className="hidden md:flex  md:w-[774px] md:h-[885.336px] xl:w-[775px] xxl:w-[1064px] md:mt-0 xl:mt-0 xxl:mt-0 xxxl:mt-[-110px] xxxl:w-[1400px]"
                alt="phase-1"
              />
               
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Generations;
