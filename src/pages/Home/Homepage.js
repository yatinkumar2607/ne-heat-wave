import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import moment from 'moment';
import VideoWithCustomPlayButton from '@/Components/VideoWithCustomPlayButton ';
import Header from '@/Components/Header/Header';
import routes from '../../routes/routes';
import ButtonOne from '@/atoms/ButtonOne/ButtonOne';
import ButtonTwo from '@/atoms/Buttontwo/ButtonTwo';
const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  const sellDate = moment.utc('2024-09-03');

  const [countdown, setCountdown] = useState(
    sellDate.diff(moment(), 'milliseconds')
  ); // Time difference in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1000); // Decrement countdown every second (1000 milliseconds)
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  // Format the countdown time
  const formatTime = (milliseconds) => {
    const duration = moment.duration(milliseconds);
    let days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
  
    if (days < 0) {
      days = 0;
    }
  
    return `${days}:${hours}:${minutes}:${seconds}`;
  };
  
  return (
    <div className="md:mt-[5rem]  " id="Home">
      <div className="md:flex hidden">
        <Header
          showNav={showNav}
          setShowNav={setShowNav}
          onMoboClicks={onMoboClicks}
        />
      </div>

      <div className="w-full md:max-w-[1440px] xxl:max-w-[1920px] xxxl:max-w-[2560px] firefox-class   md:px-10    relative firefox-class">
        <div className="md:hidden flex justify-between items-start w-full  absolute top-3 p-4">
          <div className="flex justify-start items-center">
          <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[71px] h-[57.79px] object-cover md:hidden flex"
             />
          </div>
          <div className="text-white mr-[10px]" onClick={onMoboClicks}>
            {' '}
            <AiOutlineMenu size={24} />
          </div>
        </div>
        <div className="flex justify-center itms-center mx-auto">
          <div className="hidden md:flex overflow-hidden ml-[-70px]">
            {' '}
            <img
              src="https://heat-wave.s3.eu-north-1.amazonaws.com/Hero.png"
              className=" xl:w-[842.551px] xl:h-[860.239px] md:w-[942.551px] md:h-[860.239px] firefox-class"
              alt="phase"
            />
          </div>
          <div className=" md:hidden flex ">
            {' '}
            <img
              src="https://heat-wave.s3.eu-north-1.amazonaws.com/Hero-mobile.png"
              className="w-full h-[90vh] "
              alt="phase"
            />
          </div>
          <div className="flex flex-col justify-center top-[20%] items-center absolute md:mt-[0%] md:py-0 py-[32px] ">
            <div>
              {' '}
              <h1 className="subHeading md:text-start text-center  text-[30px] md:text-[70px] font-normal leading-normal text-white ">
                {' '}
                HEROES UNITE <br className="md:hidden flex" />
              </h1>
            </div>
            <div>
              <h1 className="subHeading text-[60px]  md:text-[130px]   font-normal md:leading-[96.766px] leading-[44.66px] text-white md:tracking-[-2.6px] tracking-[-1.2px] mx-2 text-center">
                TIME TO FIGHT FIRE
              </h1>
            </div>
            <div className="md:w-[841.256px] xl:w-[841.256px] md:h-[380.468px] xl:h-[380.468px] w-[341px] h-[372px] hero-card md:mt-[81px] mt-[32px] flex flex-col justify-center items-center relative">
              <div className="md:top-[22%] top-[18%]   absolute right-[-4%] md:right-[-12%]">
                <img
                  src="../assets/images/new-iatf-home.png"
                  className="md:w-[210.03px] md:h-[210.03px] w-[96.7px] h-[96.7px] "
                  alt="phase-1"
                />
              </div>

              <div className="md:top-[22%] top-[18%] absolute left-[-4%] md:left-[-12%]">
                <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/new-dollar.png"
                  className="md:w-[210.029px] md:h-[210.029px] w-[96.333px] h-[96.33px]"
                  alt="phase-1"
                />
              </div>
              <div className="md:flex hidden justify-center items-center w-full mx-auto absolute bottom-[-8%]">

                <div className='relative'>

                <img
                  src="https://heat-wave.s3.eu-north-1.amazonaws.com/big-bottom-yellow.png"
                  className="md:w-[662.935px] md:h-[77.987px] w-[97.333px] h-[97.33px]"
                  alt="phase-1"
                />
                <div className='
                absolute bottom-1'>   <p className="px-3 md:text-[16px] text-[12px] md:leading-[18.88px]  leading-[12.72px] md:tracking-[-0.48px] tracking-[-0.36px] font-bold  text-center  p-3">
                    Are you a firefighter in real life? Let us know when you
                    pre-order and we will build you into the game so that your
                    heroism is never forgotten.
                  </p></div>
                </div>
            
              </div>


              <div className=' md:hidden flex flex-col justify-center
               items-center absolute w-[295px] h-[94px] bottom-[-10%] mobile-shape'>
<p className="px-3 md:text-[16px] text-[14px] md:leading-[18.88px]  leading-[16.52px] md:tracking-[-0.48px] tracking-[-0.36px]  font-extrabold text-center text-[#000] p-1">
                    Are you a firefighter in real life? Let us know when you
                    pre-order and we will build you into the game so that your
                    heroism is never forgotten.
                  </p>  
               </div>
              <div className="flex flex-wrap  justify-center items-center space-x-0  md:space-y-0  absolute top-[2%] md:top-[-4%] text-[#1D0E0A] font-bold">
                <div className="div mr-2 md:mr-0 md:w-[234.14px] md:h-[62.767px] h-[40.939px] w-[152.714px] bg-[#E8BB0E] custom-shadow clip">
                  <div className=" flex space-x-2 justify-center items-center md:p-4  md:mt-0 mt-[6px]">
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/clocks.png"
                      className=" xl:w-[25px] xl:h-[25px] md:w-[25px]  md:h-[25px] w-[16px] h-[16px]"
                      alt="phase-1"
                    />
                    <p className="md:px-3 md:text-[16px] text-[12px] md:leading-[16.96px]  leading-[12.72px] md:tracking-[-0.48px] tracking-[-0.36px] md:font-bold  font-extrabold ">
                      Early Access to <br /> Open Beta
                    </p>
                  </div>
                </div>

                <div className="div md:w-[190.176px] md:h-[62.767px] h-[40.939px] w-[152.714px] bg-[#E8BB0E] custom-shadow clip2">
                  <div className=" flex space-x-2 justify-center items-center md:mt-0 mt-[6px]  md:p-4 md:ml-0 ml-3">
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/lock.png"
                      className=" xl:w-[25px] xl:h-[25px] md:w-[25px]  md:h-[25px] w-[16px] h-[16px]"
                      alt="phase-1"
                    />
                    <p className="md:px-3 md:text-[16px] text-[12px] md:leading-[16.96px]  leading-[12.72px] md:tracking-[-0.48px] tracking-[-0.36px] md:font-bold  font-extrabold  ">
                      Local Station  Pack
                      Upgrade
                    </p>
                  </div>
                </div>




                {/* 3rd card */}
                <div className="md:flex hidden div md:w-[234.14px] md:mt-0 mt-[16px] md:h-[62.767px] h-[40.939px] w-[152.714px] bg-[#E8BB0E] custom-shadow clip3">
                  <div className=" flex space-x-2 justify-center items-center md:p-4 md:ml-0 ml-3">
                    <img
                   src="https://heat-wave.s3.eu-north-1.amazonaws.com/Star.png"
                      className=" xl:w-[25px] xl:h-[25px] md:w-[25px]  md:h-[25px] w-[16px] h-[16px]"
                      alt="phase-1"
                    />
                    <p className=" px-3 md:text-[16px] text-[12px] md:leading-[16.96px]  leading-3[12.72px] md:tracking-[-0.48px] tracking-[-0.36px] md:font-bold  font-extrabold  ">
                      In-Game Founding
                      <br className="hidden md:flex" /> Member Badge
                    </p>
                  </div>
                </div>



                <div className="md:hidden flex div md:w-[234.14px] md:mt-0 mt-[16px] md:h-[62.767px] h-[41.939px] w-[152.714px] bg-[#E8BB0E] custom-shadow clip3">
                  <div className=" flex space-x-2 justify-center items-center md:p-4 md:ml-0 ml-3">
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/Star.png"
                      className=" xl:w-[25px] xl:h-[25px] md:w-[25px]  md:h-[25px] w-[16px] h-[16px]"
                      alt="phase-1"
                    />
                    <p className="  md:text-[16px] h-[23px] text-[12px] md:leading-[16.96px]  leading-[12.72px] md:tracking-[-0.48px] tracking-[-0.36px] md:font-bold  font-extrabold  ">
                      In-Game Founding
                     Member Badge
                    </p>
                  </div>
                </div>

              </div>
              <div className="timer  flex flex-col justify-center md:mt-[10px] items-center mt-[40px]">
                <h2 className="md:text-[25px] text-[20px] md:tracking-[-0.75px] tracking-[-0.6px] text-white leading-normal font-semiold">
                Preorder starts in
                </h2>
                <h1 className="text-[#E8BB0E] md:mt-[-20px] text-[50px] md:text-[85px] font-normal leading-normal subHeading">
                  {' '}
                  {formatTime(countdown)}
                </h1>
                <div className="flex justify-center items-center w-full mx-auto fllex-col   xxl:space-x-[22px] md:space-x-[22px] space-x-[9.48px] md:mt-0 mt-[2px]">
                  <div></div>
                  <div>
                    <ButtonTwo
                      commanStyle="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer"
                      text="Pre-Order Now"
                    />
                    {/* <button className="phase-action-btn flex text-white  justify-center items-center  text-center md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px] cursor-pointer  ease-in-out duration-500">
                    Pre-Order Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-0  play text-white  flex justify-center items-center mx-auto mt-[40px] md:mt-[2rem] xl:mt-[2rem] xxl:mt-[2em]">
        <VideoWithCustomPlayButton />
      </div>

      <div
        className={
          showNav
            ? 'fixed top-[0rem] left-0 h-[569px] overflow-hidden  w-full ease-in-out duration-500 z-[1000] nav-bg'
            : 'fixed top-[-100%] '
        }
      >
        <div className="flex justify-between items-start mt-[12px] p-4 md:hidden">
          <div className="flex justify-start items-center ">
          <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[71px] h-[57.79px] object-cover md:hidden flex"
             />
          </div>
          <div className="text-white" onClick={onMoboClicks}>
            {' '}
            <img
              src="https://heat-wave.s3.eu-north-1.amazonaws.com/close-menu.png"
              alt="Logo-main"
              className=" h-[13.39px] w-[11.43px] mr-[15px]"
            />
          </div>
        </div>
        <div className="absolute bottom-4  p-4 w-full flex justify-between items-center  md:hidden">
        <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[71px] h-[57.79px] object-cover md:hidden flex"
             />
          <div className="flex space-x-6 mr-[15px] items-center justify-center text-white">
            <div className="">
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/tg.png"
                className="   h-[27px] w-[27px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="tg"
              />
            </div>
            <div>
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/x.png"
                className="   h-[27px] w-[27px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="twitter"
              />
            </div>
            <div>
              {' '}
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/discord.png"
                className="  md:h-[20px]  md:w-[20px] h-[27px] w-[27px] hover:scale-75 cursor-pointer hover:ease-in-out hover:duration-500"
                alt="discord"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-[4rem] flex flex-col text-white p-5   mx-auto justify-center items-center">
          {routes?.map((item, index) => {
            return (
              <div
                className={`my-2 flex justify-between items-center leading-[21.578px] text-start w-full  text-[18px] font-medium  subHeading cursor-pointer h-[44.485px] ${
                  activeLink === `${item.link}`
                    ? ' active-link '
                    : ' not-active-link'
                }`}
                key={index}
              >
                <LinkScroll
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink(item.link);
                  }}
                  className={
                    'px-4 py-2 cursor-pointer text-[18px] font-normal leading-[21.478px] subHeading animation-hover hover:text-primary  inline-block relative' +
                    (activeLink === `${item.link}`
                      ? ' text-primary animation-active font-bold  '
                      : ' text-primary')
                  }
                >
                  {item.name}
                </LinkScroll>
                <div className="flex justify-end items-end mr-4">
                  {activeLink === item.link ? (
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/white-arrow.png"
                      alt="Logo-main"
                      className="w-[4.989px] h-[7.603px]"
                    />
                  ) : (
                    <img
                      src="https://heat-wave.s3.eu-north-1.amazonaws.com/red-arrow.png"
                      alt="Logo-main"
                      className="w-[4.989px] h-[7.603px]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
