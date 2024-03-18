import React from "react";
import dd3 from "../../../../assets/dd/dd3.png";
import dd4 from "../../../../assets/dd/dd4.png";

const VisualBlock = () => {
  return (
    <div className="flex gap-5 flex-col px-10 md:px-40 py-10">
      <p className=" font-medium text-xl md:px-10 lg:text-2xl xl:text-3xl text-[#2A2D43] text-center">
        Visual identity: Unmistakably brilliant
      </p>
      <p className=" font-sans text-sm md:px-20 text-center">
        To symbolise delivering brand brilliance and exploration, all visual
        elements were made to be simple, yet detailed. The new brand elements
        allow Design Digest to communicate end product they bring through their
        values- “Brilliance”.
      </p>
      <div className=" flex flex-col flex-1 md:flex-row gap-5">
        <div className="flex flex-1 py-20">
          <img src={dd3} alt="" />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center md:justify-end md:pb-28 md:px-10 md:py-10 gap-5 md:gap-10">
          <div className=" flex flex-col  gap-2">
            <p>Wordmark</p>
            <p className="font-sans text-sm">
              A simply bold, yet bespoke workdmark of the company name stands as
              the centerpiece of their branding. This bespoke workmark is
              meticulously designed to serve as their full lockup and projects
              reliability.
            </p>
            <p className="font-sans text-sm">
              The wordmark is crafted with a modern sans-serif typeface, it
              features letterforms that have been customized to ensure a unique
              representation of their identity, setting them apart from the
              ordinary and reinforcing their commitment to a contemporary,
              tailored approach to design.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p>Logomark</p>
            <p className="font-sans text-sm ">
              This diamond inspired logomark, while not the primary logo, serves
              a crucial role as a versatile element in the brand's identity. It
              is selectively deployed, strategically placed to enhance the
              overall design. Its adaptability is a key feature; the logomark
              can function as a supergraphic, making a bold and memorable
              statement when needed
            </p>
          </div>
        </div>
      </div>
      <div className=" flex w-full justify-center flex-1 items-center">
        <img src={dd4} alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default VisualBlock;
