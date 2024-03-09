import React, { useState } from "react";
import logo from "../../assets/Maria_logo.png";
import { GrSend } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import Hamburger from "./Hamburger";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-[100%] h-16 md:h-20 md:px-20 flex justify-between items-center px-5 md:border sticky top-0 bg-white">
        <div>
          <img src={logo} alt="logo" className=" " />
        </div>
        <div className="flex justify-between gap-8 font-sans text-gray-400 max-md:hidden">
          <div
            onClick={() => navigate("/services")}
            className=" cursor-pointer hover:text-blue-400 font-semibold"
          >
            Servives
          </div>
          <div className=" cursor-pointer hover:text-blue-400 font-semibold">
            About
          </div>
          <div
            onClick={() => navigate("/gallery")}
            className=" cursor-pointer hover:text-blue-400 font-semibold"
          >
            Gallery
          </div>
          <div
            onClick={() => navigate("/cv")}
            className=" cursor-pointer hover:text-blue-400 font-semibold"
          >
            CV
          </div>
          <div className=" text-blue-400 cursor-pointer hover:text-blue-400 font-semibold">
            <GrSend size={20} />
          </div>
        </div>
        <div className=" text-blue-400 md:hidden ">
          <HiOutlineMenu size={24} onClick={toggleHamburger} />
        </div>
      </div>
      {hamburgerOpen ? <Hamburger /> : null}
    </>
  );
};

export default Navbar;
