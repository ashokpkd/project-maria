import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import dd11 from "../../../../assets/dd/dd11.png";

const InteractiveBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex gap-10 flex-col px-10 md:px-40 md:py-10 pb-10">
      <div className="flex flex-col gap-3">
        <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
          Delivered a seed for branding direction
        </p>
        <p className="font-sans text-sm text-center">
          We created a comprehensive brand guideline for LifeGate Creators,
          featuring a distinctive logo, typography, color palette, and
          illustration bank. To prevent greenwashing, we chose a trendy neon
          green accent, ensuring a fresh and impactful brand identity. These
          guidelines will be the foundation for a holistic brand that embodies
          LifeGate Creators' unique vision.
        </p>
      </div>
      <div>
        <img src={dd11} alt="" />
      </div>
      <div
        className="flex justify-center items-center underline cursor-pointer"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default InteractiveBlock;
