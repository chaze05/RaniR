import React, { useState, useEffect } from "react";
import { FaBuffer } from "react-icons/fa";

const Sidebar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(!navOpen);
      };

  return (
    <div className={`relative flex z-20 h-screen bg-black justify-center items-center ${navOpen ? 'w-[160px]': 'w-[80px] '} flex-col transition-all ease-in-out border-r-2 border-gray-300`}>
        <div onClick={() => handleClick()} className="bg-black self-start py-5 justify-center w-full text-center border-r-2  flex absolute top-0 left-0 cursor-pointer h-max-content ">
            <span className="text-2xl font-bold text-white capitalize "><FaBuffer /></span>   
        </div>
    </div>
  )
}

export default Sidebar