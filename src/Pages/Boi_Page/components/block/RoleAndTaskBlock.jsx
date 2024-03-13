import React from "react";
import { BsArrowDown } from "react-icons/bs";

const RoleAndTaskBlock = () => {
  return (
    <div className=" bg-[#4E5DAB1A] py-14 flex flex-col px-10 gap-5 md:px-60 xl:px-[550px]">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className=" font-medium text-xl lg:text-2xl xl:text-3xl text-[#2A2D43]">
          Roles and tasks
        </p>
        <p className="text-sm text-[#7F818E] font-sans flex flex-col gap-2 text-center">
          It was essential to act as a bridge between the Business design and
          the Design department, aiming not only to execute the new brand
          guidelines, but also transform the function and performance of all its
          assets both digital and physical.
        </p>
      </div>

      <div className=" flex flex-col font-sans gap-3">
        <div className=" flex flex-col gap-3 md:flex-row">
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg  md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Innovation tool design </p>
            <p className=" text-[#7F818E] text-sm">
              Revamp innovation tools in Miro to strengthen of virtual client
              collaboration.
            </p>
            <p className=" flex gap-2 items-center text-[#7F818E] text-sm">
              See more
              <BsArrowDown />
            </p>
          </div>
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Website design</p>
            <p className=" text-[#7F818E] text-sm">
              Design assets, downloadable content & regulate brand during web
              development.
            </p>
            <p className=" flex gap-2 items-center text-[#7F818E] text-sm">
              See more
              <BsArrowDown />
            </p>
          </div>
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Graphic design </p>
            <p className=" text-[#7F818E] text-sm">
              Implement new identity across publications, G- suite & art
              direction.
            </p>
            <p className=" flex gap-2 items-center text-[#7F818E] text-sm">
              See more
              <BsArrowDown />
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 md:flex-row">
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Brand regulation</p>
            <p className=" text-[#7F818E] text-sm">
              Create tokens and conduct brand audits to maintain the new brand.
            </p>
          </div>
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Rebrand roll- out </p>
            <p className=" text-[#7F818E] text-sm">
              Create project timelines with the rebranding team.
            </p>
          </div>
          <div className="bg-[#F9F7F780] flex flex-col gap-3 px-3 py-3 rounded-lg md:w-[400px] lg:w-[400px] xl:w-[500px]">
            <p className=" font-medium">Client facing projects</p>
            <p className=" text-[#7F818E] text-sm">
              Provide design services to BOI’s client facing project apart from
              rebranding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleAndTaskBlock;
