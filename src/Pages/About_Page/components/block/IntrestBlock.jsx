import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import abt5 from "../../../../assets/about/abt5.png";
const IntrestBlock = () => {
  return (
    <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
      <div className=" flex flex-1">
        <img src={abt5} alt="" />
      </div>

      <div className=" flex flex-1 flex-col gap-10 py-10  md:px-10 font-sans">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className=" font-medium">Other interests</p>
            <p className=" text-sm ">
              Always been the artsy one in a crowd, I chose design not as a mere
              profession, but was driven solely by a deep-seated love for
              creating.
            </p>
          </div>
          <p className="flex items-center underline text-sm">
            Visit my digital art gallery <MdArrowOutward />
          </p>
          <p className="text-sm">
            Outside of work I love to travel to the mountains, go on food tours
            and watch bushcraft videos on Youtube.
          </p>
        </div>
        <div>
          <p className=" font-medium">Other goals</p>
          <div>
            <p className="flex items-center gap-3">
              <MdCheckBoxOutlineBlank />
              Design a product range for the left- handed 📕 ✂{" "}
            </p>
            <p className="flex items-center gap-3">
              <MdCheckBoxOutlineBlank />
              Become an art influencer 🎨
            </p>
            <s className="flex items-center gap-3">
              <IoCheckboxOutline />
              Stay in a trulli 🏡{" "}
            </s>
            <p className="flex items-center gap-3">
              <MdCheckBoxOutlineBlank />
              Learn to swim 🌊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntrestBlock;
