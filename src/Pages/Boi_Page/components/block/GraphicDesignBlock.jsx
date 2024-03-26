import React from "react";
import boi6 from "../../../../assets/boi/boi6.png";
import boi7 from "../../../../assets/boi/boi7.png";
import boi8 from "../../../../assets/boi/boi8.png";
import boi9 from "../../../../assets/boi/boi9.png";
import { IoMdArrowUp } from "react-icons/io";

const GraphicDesignBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center px-10 md:px-40 py-10 gap-10 md:gap-20">
      <p className=" font-medium text-xl lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
        Graphic design: Rebranding other assets and touchpoints
      </p>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
        <div className="flex flex-col gap-10">
          <div className=" flex justify-center items-center">
            <img src={boi6} alt="" />
          </div>
          <div className="font-sans flex flex-col gap-3 xl:px-52 ">
            <p className="font-medium">Rebranding printable media</p>
            <p className=" text-sm text-[#7F818E]">
              I designed printable materials (guides, cards, reports) to align
              with the new brand identity.The result was a collection of
              visually engaging and informative materials.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className=" flex justify-center items-center">
            <img src={boi7} alt="" />
          </div>
          <div className="font-sans flex flex-col gap-3 xl:px-52">
            <p className="font-medium">Redesigning Google workspace</p>
            <p className=" text-sm text-[#7F818E]">
              BOI uses Google Workspace for efficient business operations. We
              redesigned their Google tools (Docs, Sheets, Slides, Meet) before
              launching the new brand.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className=" flex justify-center items-center">
            <img src={boi8} alt="" />
          </div>
          <div className="font-sans flex flex-col gap-3 xl:px-52">
            <p className="font-medium">Designing social media templates</p>
            <p className=" text-sm text-[#7F818E]">
              We used Figma to create templates and tokens for BOI's social
              media. These templates spanned various platforms, including
              Facebook, Instagram, and LinkedIn.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <img src={boi9} alt="" />
      </div>
      <div
        className="flex font-sans justify-center items-center border-b border-black w-[8rem] mb-10 cursor-pointer"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default GraphicDesignBlock;
