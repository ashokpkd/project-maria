import React from "react";

const WorkApproachBlock = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-col gap-3 md:max-w-[70%] border-b py-5 border-gray-400 ">
        <p className=" text-md font-normal text-[#5B61F3] font-sans">
          Work approach #01
        </p>
        <p className=" text-xl lg:text-2xl xl:text-3x">
          Quick wins with agile iterations
        </p>
        <p className="text-sm font-sans text-[#7F818E]">
          As a designer, I excel in adaptive decision-making. Everything I
          create is dynamic, evolving with each iteration. I make sure to gain
          valuable insights at every stage to ensure optimal outcomes.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:max-w-[70%] border-b py-5 border-gray-400 ">
        <p className=" text-md font-normal text-[#5B61F3] font-sans">
          Work approach #02
        </p>
        <p className="text-xl lg:text-2xl xl:text-3xl">
          Going beyond just aesthetics
        </p>
        <p className="text-sm font-sans text-[#7F818E]">
          I prioritize function over aesthetics, ensuring every deliverable
          contributes tangibly to my client's mission, creating a valuable
          impact.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:max-w-[70%] border-b  py-5 border-gray-400 ">
        <p className=" text-md font-normal text-[#5B61F3] font-sans">
          Work approach #03
        </p>
        <p className="text-xl lg:text-2xl xl:text-3xl">
          Thrive in collaborative environments
        </p>
        <p className="text-sm font-sans text-[#7F818E]">
          I believe good design thrives in a shared space, not a bubble. The
          project comes alive through hands-on experience, feedback, and
          uncovering perspectives I might have missed.
        </p>
      </div>
    </div>
  );
};

export default WorkApproachBlock;
