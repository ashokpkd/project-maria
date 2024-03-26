import React from "react";
import abt1 from "../../../../assets/about/abt1.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const AboutIntroBlock = () => {
  return (
    <div className="gap-10 flex flex-col md:flex-row w-full  flex-1">
      <div className=" flex-1 flex justify-center">
        <img
          src={abt1}
          alt=""
          className=" max-sm:min-w-[200px] md:min-w-[300px] max-w-[23.182rem] max-h-[21.5rem]"
        />
      </div>
      <div className=" flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg lg:text-2xl xl:text-3xl">About me</p>
          <p className=" text-3xl font-bold xl:text-7xl ">
            I’m Maria, a Business designer working from Milan, Italy.
          </p>
        </div>
        <div className="text-sm  text-[#7F818E] font-sans flex flex-col gap-2">
          <p>
            A versatile Business designer with 3 years of experience in the
            Design consulting industry. Specialities include Product design,
            Graphic design, UI design, Brand strategy and Lifestyle Accessory
            design.
          </p>
          <p>
            I approach every design brief empathetically, holistically and ready
            to get my hands dirty. I enjoy collaboration, radical brainstorming
            sessions, prototype experimentations, and learning about new tools
            and approaches to continue enhancing my design process.
          </p>
          I've proudly worn many hats, each showcasing my passion for bringing
          ideas to life.
          <p></p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-start md:gap-14 mt-16 md:items-center">
          <div>
            <button className=" bg-gray-400 text-white md:bg-white  md:text-[#2A2D43] px-5 py-2 md:px-10 md:py-3  font-sans font-normal rounded-full">
              View CV
            </button>
          </div>
          <div className="flex items-center  gap-5">
            <hr className=" w-16  border-[#7F818E] block" />
            <p className=" font-sans text-[#7F818E]">Follow me</p>
          </div>
          <div className="flex gap-5 ">
            <FaLinkedinIn size={30} className=" text-gray-400 cursor-pointer" />
            <FaBehance size={32} className=" text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroBlock;
