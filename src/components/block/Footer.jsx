import React from "react";
import vector from "../../assets/Vector.png";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" font-serif text-white">
      <div className=" bg-indigo-400 h-[90vh] md:px-40 md:py-5 md:h-[50vh] md:bg-gradient-to-r from-indigo-500 to-purple-300 flex flex-col pl-10 pt-10 items-start ">
        <div className="w-full md:flex md:flex-col md:justify-around ">
          <div className=" font-bold ">
            <p>Interested?</p>
          </div>
          <div className="md:flex md:justify-between">
            <div className="text-4xl font-bold">
              <p>
                Looking to collaborate
                <br /> on your next project?
              </p>
            </div>
            <div className=" flex justify-center mt-10  ">
              <button className=" bg-white text-black px-5 py-3 font-sans font-medium rounded-full">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#2A2D43" }} className="px-10 pt-20">
        <div className=" flex flex-col gap-5 md:px-32">
          <div className="text-md md:w-80  ">
            <p>
              I’m Maria, a multidisciplinary designer working from Milan, Italy.
            </p>
          </div>
          <div className="text-md md:w-80">
            <p>
              A versatile professional, I've proudly worn many hats, each
              showcasing my passion for bringing ideas to life.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-start md:gap-14 mt-16 md:items-center">
            <div>
              <button className=" bg-white text-gray-400 px-3 py-1 font-sans rounded-xl">
                View CV
              </button>
            </div>
            <div className="flex items-center gap-3 font-sans text-gray-400">
              <hr className="max-sm:hidden md:block w-16" />
              <p>Follow Me</p>
            </div>
            <div className="flex ">
              <FaLinkedin size={30} />{" "}
              <FaBehanceSquare size={30} className=" text-blue-500" />
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
          <p className=" ">© 2023 maria mathew designstudio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
