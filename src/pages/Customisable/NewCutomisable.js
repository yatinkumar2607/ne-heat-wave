import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
import React from 'react';

const NewCutomisable = () => {
  return (
    <div
      className="md:mt-[3rem] lg:mt-[3rem] xxl:mt-[0rem] xxxl:mt-[0rem]   customisable overflow-hidden "
      id="Association "
    >
      {' '}
      <div className="md:hidden text-white mt-[30px]  w-full h-full flex flex-col justify-center items-center text-center">
        {' '}
        <div className=" relative z-50 ">
          <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal text-white ">
            Fully
          </h1>
        </div>
        <div className="  relative z-50 md:my-[-30px]">
          <h1 className="subHeading text-[50px]  md:text-[140px]   font-normal  text-white leading-normal  tracking-normal  ">
            Customizable
          </h1>
        </div>
        <div className=" relative z-50">
          <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal tracking-normal  text-white ">
            FIREFIGHTERS
          </h1>
        </div>
      </div>
      <div className="w-full md:max-w-[1440px] xxl:max-w-[1920px] xxxl:max-w-[2560px]  flex     md:px-10 px-5 justify-start items-center md:md:h-auto h-[60vh] md:my-20 xl:my-20 xxl:my-20 xxxl:my-20 relative xxl:h-[100vh] ">
        <div className="hidden md:flex flex-col md:justify-start md:items-start   justify-start items-center md:w-1/2 w-full  ">
          <div className="flex flex-col  justify-center md:items-start items-center">
            <div
              className="flex flex-col md:justify-start md:items-start justify-center items-center 
        mt-[40px] "
            >
              <div className=" relative z-50 ">
                <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal text-white ">
                  Fully
                </h1>
              </div>
              <div className="  relative z-50 md:my-[-30px]">
                <h1 className="subHeading text-[50px]  md:text-[140px]   font-normal  text-white leading-normal  tracking-normal  ">
                  Customizable
                </h1>
              </div>
              <div className=" relative z-50">
                <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal tracking-normal  text-white ">
                  FIREFIGHTERS
                </h1>
              </div>
            </div>

            <div className="mt-[40px] md:mt-[70px] md:flex hi">
              {' '}
              <ButtonTwo
                commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer"
                text="Pre-Order Now"
              />
            </div>
          </div>
        </div>

        {/* <div className="absolute md:hidden top-10 left-[16%] text-white flex flex-col justify-center items-center">
          <div className="flex flex-col md:justify-start md:items-start   justify-start items-center w-full  ">
            <div className="flex flex-col  justify-center md:items-start items-center">
              <div
                className="flex flex-col md:justify-start md:items-start justify-center items-center 
        mt-[40px] "
              >
                <div className=" relative z-50 ">
                  <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal text-white ">
                    Fully
                  </h1>
                </div>
                <div className="  relative z-50 md:my-[-30px]">
                  <h1 className="subHeading text-[50px]  md:text-[140px]   font-normal  text-white leading-normal  tracking-normal  ">
                    Customizable
                  </h1>
                </div>
                <div className=" relative z-50">
                  <h1 className="subHeading text-[25px] md:text-[60px] font-normal leading-[0px] md:leading-normal tracking-normal  text-white ">
                    FIREFIGHTERS
                  </h1>
                </div>
              </div>

              
            </div>
          </div>
        </div> */}

        {/* <div className='md:hidden absolute bottom-10 left-[34%]'>
        <div className="">
                {' '}
                <ButtonTwo
                  commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer"
                  text="Pre-Order Now"
                />
              </div>
        </div> */}
        <div className="absolute right-[-20%] hidden md:flex">
          <img
            src="https://heat-wave.s3.eu-north-1.amazonaws.com/cutomizable-bg.png"
            className=" h-screen"
            alt="phase-1"
          />
        </div>
      </div>


      <div className="md:hidden text-white mb-[30px]  w-full h-full flex flex-col justify-center items-center text-center">
      <ButtonTwo
                  commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer"
                  text="Pre-Order Now"
                />
      </div>
    </div>
  );
};

export default NewCutomisable;
