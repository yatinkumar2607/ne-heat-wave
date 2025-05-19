import React from 'react'

const ButtonTwo = ({commanStyle,text}) => {
    return (
      <div className={ ` text-white hover:before:bg-[#E8BB0E] relative overflow-hidden border  border-none    transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#E8BB0E] before:transition-all before:duration-500 hover:text-white  cursor-pointer hover:shadow-[#E8BB0E] hover:before:left-0 hover:before:w-full ${commanStyle}`}><span class="relative z-10">{text}</span></div>
    )
  }
  
  export default ButtonTwo

