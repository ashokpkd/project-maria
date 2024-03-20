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
      <div className="w-[100%] h-16 md:h-20 md:px-40 flex justify-between items-center px-10 md:border sticky top-0 bg-white">
        <div>
          <img src={logo} alt="logo" className=" " />
        </div>
        <div
          className="flex justify-between gap-8 font-sans  max-md:hidden"
          style={{ color: "#2A2D43" }}
        >
          <div
            onClick={() => navigate("/services")}
            className=" cursor-pointer  font-medium hover:text-[#5B61F3]"
          >
            Servives
          </div>
          <div
            onClick={() => navigate("/about")}
            className=" cursor-pointer  font-medium hover:text-[#5B61F3]"
          >
            About
          </div>
          <div
            onClick={() => navigate("/gallery")}
            className=" cursor-pointer  font-medium hover:text-[#5B61F3]"
          >
            Gallery
          </div>
          <div
            onClick={() => navigate("/cv")}
            className=" cursor-pointer  font-medium hover:text-[#5B61F3]"
          >
            CV
          </div>
          <div
            className="  cursor-pointer  font-medium"
            style={{ color: "#5B61F3" }}
          >
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
