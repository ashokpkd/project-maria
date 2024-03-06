import React, { useState } from "react";
import logo from "../../assets/Maria_logo.png";
import { GrSend } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-[100%] h-16 md:h-20 md:px-20 flex justify-between items-center px-5 md:border">
        <div>
          <img src={logo} alt="logo" className=" " />
        </div>
        <div className="flex justify-between gap-8 font-sans text-gray-400 max-md:hidden">
          <div>Servives</div>
          <div>About</div>
          <div>Gallery</div>
          <div>CV</div>
          <div className=" text-blue-500">
            <GrSend size={20} />
          </div>
        </div>
        <div className=" text-blue-500 md:hidden ">
          <HiOutlineMenu size={24} onClick={toggleHamburger} />
        </div>
      </div>
      {hamburgerOpen ? <Hamburger /> : null}
    </>
  );
};

export default Navbar;
