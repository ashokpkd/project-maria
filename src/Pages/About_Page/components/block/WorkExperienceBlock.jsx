import React from "react";
import { GoDotFill } from "react-icons/go";
import abt2 from "../../../../assets/about/abt2.png";
import BoiButtons from "../../../Boi_Page/components/ui/BoiButtons";

const WorkExperienceBlock = () => {
  return (
    <div className="flex flex-col gap-5 py-10 md:py-20">
      <p className=" text-xl">Work experience</p>
      <div className=" flex flex-1 gap-5 md:gap-16 flex-col md:flex-row">
        <div className=" flex flex-1 flex-col ">
          <div className=" border-l border-[#2A2D4333]  relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              Board of Innovation, Belgium
              <span className=" text-[#5B61F3] font-normal"> (2022 ~)</span>
            </p>
            <p className="text-[#7F818E]">
              Designed to launch their new brand in collaboration with Design
              Studio, London. Worked on client- facing projects with Nestle and
              PepsiCo.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Contract
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                Brand Designer & Prototype Design
              </button>
            </div>
          </div>
          <div className=" border-l border-[#2A2D4333]  relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              Design Freelancing
              <span className=" text-[#5B61F3] font-normal"> (2021 ~)</span>
            </p>
            <p className="text-[#7F818E]">
              Consulting companies and businesses in Milan and India.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Freelance
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                Brand Strategy, Product Design
              </button>
            </div>
          </div>
          <div className=" border-l border-[#2A2D4333]  relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              Fashion Technology Accelerator, Milan
              <span className=" text-[#5B61F3] font-normal"> (2021)</span>
            </p>
            <p className="text-[#7F818E]">
              Managed the growth of social media presence and tracking key
              metrics. Assisted the Head of start-ups in startup consulting and
              investor meet prep.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Internship
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                Digital Marketing & Startup Consulting
              </button>
            </div>
          </div>
          <div className="   relative px-5 pb-5 text-start font-sans flex flex-col gap-3">
            <GoDotFill className="absolute top-1 -translate-y-1/2 -left-2 text-[#5B61F3] " />
            <p className=" font-bold">
              The Purple Turles Pvt, Ltd
              <span className=" text-[#5B61F3] font-normal"> (2020)</span>
            </p>
            <p className="text-[#7F818E]">
              tasked to develop a distinctive collection of cane products that
              seamlessly integrates the brand's design language and cultural
              heritage.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className=" border bg-[#5B61F326]  rounded-full px-5 py-2">
                Internship
              </button>
              <button className=" border bg-[#FFFFFF99]  rounded-full px-5 py-2">
                Product Design
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-1">
          <img src={abt2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceBlock;
