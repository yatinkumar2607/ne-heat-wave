import ButtonOne from "@/atoms/ButtonOne/ButtonOne";
import routes from "../../routes/routes";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <div
        className={
          "md:fixed md:top-0 md:w-full z-[1000]  md:transition-all " +
          (scrollActive ? " bg-black md:z-[1000] md:shadow-md md:py-[0px] top-0" : "")
        }>
        <div className={`md:max-w-[1440px] bg-transparent  xxl:max-w-[1920px] xxxl:max-w-[2560px] w-full  md:py-4 md:px-10 px-5 mx-auto `}>
          <div className="flex  justify-between  md:items-center  ">
          <div className=" md:flex hidden ">
            {routes?.map((item, index) => {
                return (
                  <div
                    className=" text-[18px] subHeading   font-normal  cursor-pointer"
                    key={index}
                  >
                    <LinkScroll
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onSetActive={() => {
                        setActiveLink(item.link);
                      }}
                      className={
                        'px-4 py-2 cursor-pointer subHeading  hover:text-[#E8BB0E]  inline-block relative hover:ease-in-out hover:duration-500  ' +
                        (activeLink === `${item.link}`
                          ? ' text-primary animation-active font-normal  opacity-60'
                          : ' text-primary    ')
                      }
                    >
                      {item.name}
                    </LinkScroll>
                  </div>
                );
              })}
            </div>
        <div className="flex justify-start items-center ml-[40px]">
             <img
             src="../assets/images/new-heat-logo.png"
             alt="Logo-main"
                    className="w-[
202.72px] h-[145px] object-cover"
             />
            
            </div>
            
            <div className="  cursor-pointer ">
            <ButtonOne commanStyle="Header-Button md:flex hidden justify-center items-center  text-center  md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px]  cursor-pointer  "
          text="Pre-Order Now"/>
              {/* <button
                className="Header-Button md:flex hidden justify-center items-center  text-center  md:text-[16px] text-[14px] md:leading-[19.658px] leading-[17.201px] md:tracking-[-0.32px] tracking-[-0.28px] md:w-[176.464px] w-[133.524px] md:h-[42.271px] h-[38.353px]  cursor-pointer  ease-in-out duration-500"
              >
               Pre-Order Now
              </button> */}
              {/* <div className="md:hidden flex  text-primary" onClick={props.onMoboClicks}>
                {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div> */}
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
