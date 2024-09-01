import React, { useState } from "react";
import Button from "../button/Button";
const logoDesign = "text-[#64ffda]  font-bold text-[2rem]";
const menuStyle = "py-3 cursor-pointer hover:underline";
import '../navbar/navbar.css'
const Navbar = () => {
 
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="relative main-her">
      <div className="navbar flex justify-between items-center  top-0 h-28 sticky px-6 sm:px-8 lg:px-4 py-1">
        <h1 className="text-[1.5rem] font-bold text-white flex items-center">
          <span className={`${logoDesign}`}>&lt;</span>Muhammad
          <span className={`${logoDesign} font-semibold text-[22px]`}>/</span>
          Umar
          <span className={`${logoDesign}`}>&gt;</span>{" "}
        </h1>
        <svg
          className="w-7 lg:hidden"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MenuRoundedIcon"
          fill="white"
          onClick={handleOpen}
        >
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path>
        </svg>
        <div className="hidden lg:block menu">
          <ul className="flex items-center gap-4 text-white text-[1rem] font-medium">
            <li className="">About</li>
            <li className="">Skills</li>
            <li className="">Experience</li>
            <li className="">Projects</li>
            <li className="">Education</li>
          </ul>
        </div>
        <Button text ='GitHub' customClass ='hidden lg:block text-[#64ffda] border-[1px] border-[#64ffda] w-40 rounded-full hover:bg-[#64ffda] hover:text-white transition-all duration-500 ease-linear' />
      </div>
      {open && (
        <div className="nav-menu bg-[#64ffda] -400 text-white absolute top-20 right-0 w-full pt-3">
          <ul className="font-semibold  flex flex-col items-center justify-center">
            <li className={`${menuStyle}`}>About</li>
            <hr className="w-full" />

            <li className={`${menuStyle}`}>Skills</li>
            <hr className="w-full" />
            <li className={`${menuStyle}`}>Experience</li>
            <hr className="w-full" />

            <li className={`${menuStyle}`}>Projects</li>
            <hr className="w-full" />
            <li className={`${menuStyle}`}>Education</li>
            <hr className="w-full" />
            <li className={`${menuStyle}`}>Github</li>
            {/* <Button text='GitHub' customClass ='py-2 w-36 h-14 my-3' /> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
