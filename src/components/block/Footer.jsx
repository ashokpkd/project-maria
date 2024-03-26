import React from "react";
import vector from "../../assets/Vector.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" font-serif text-white">
      <div className=" bg-[#8083e2] h-[90vh] md:px-40 md:py-5 md:h-[50vh] md:bg-gradient-to-r from-[#5B61F3] to-[#c7ade7] flex flex-col px-10 justify-center items-start ">
        <div className="w-full  md:justify-around py-5 flex flex-col gap-3 ">
          <div>
            <p className=" font-sans text-sm md:text-lg lg:text-xl">
              Interested?
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-16 md:gap-5">
            <div className="text-4xl font-bold">
              <p>
                Looking to collaborate
                <br /> on your next project?
              </p>
            </div>
            <div className=" flex justify-center items-center md:mr-40">
              <button className=" bg-white text-[#2A2D43] px-5 py-2 w-36  font-sans font-medium rounded-full">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#2A2D43" }} className="px-10 pt-20">
        <div className=" flex flex-col gap-5 md:px-32">
          <div className="text-sm lg:text-lg xl:text-xl md:w-96  ">
            <p>
              I’m Maria, a multidisciplinary designer working from Milan, Italy.
            </p>
          </div>
          <div className="text-sm lg:text-lg xl:text-xl md:w-96">
            <p>
              A versatile professional, I've proudly worn many hats, each
              showcasing my passion for bringing ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:justify-start md:gap-8 mt-16 md:items-center">
            <div>
              <button className=" bg-[#F9F7F780] text-white px-10 py-2  font-sans font-thin rounded-full">
                View CV
              </button>
            </div>
            <div className="flex items-center gap-8 font-sans  text-gray-400">
              <hr className="max-sm:hidden md:block w-16" />
              <p>Follow Me</p>
            </div>
            <div className="flex gap-5 md:justify-center items-center ">
              <FaLinkedinIn
                size={20}
                className=" text-gray-400 cursor-pointer"
              />
              <FaBehance size={22} className=" text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
        <div
          className=" h-80 w-full bg-contain bg-bottom  md:bg-right flex items-end pb-3  md:px-32"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>© 2023 maria mathew designstudio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
