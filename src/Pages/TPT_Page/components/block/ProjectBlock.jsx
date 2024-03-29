import React from "react";
import tpt2 from "../../../../assets/tpt/tpt2.png";

const ProjectBlock = () => {
  return (
    <div className="flex flex-col px-10 md:py-10 md:px-40 flex-1 md:flex-row gap-5 md:gap-20 ">
      <div className=" flex flex-1">
        <img src={tpt2} alt="" />
      </div>
      <div className="flex justify-center items-center md:items-start flex-col pt-10  gap-3 flex-1">
        <div className="flex flex-col justify-start gap-5 items-start md:ps-24">
          <p className="text-[1.625rem] text-center ">
            Brief and project scope
          </p>
          <p className="font-sans text-sm">
            Our team of product designers were tasked to develop a distinctive
            collection of cane products that seamlessly integrates Beruru's
            design language, reflecting the harmony between metropolitan
            influences and the city's rich cultural heritage.
          </p>
        </div>

        <div className=" flex flex-1 flex-col gap-10 py-10 md:px-5  font-sans">
          <div className=" flex gap-5 md:gap-16">
            <p className="font-medium">01.</p>
            <div className=" flex flex-col gap-3">
              <p className=" font-medium">
                Material understanding and craft exploration
              </p>
              <p className=" text-sm text-[#7F818E]">
                Utilize findings to inform the design process, ensuring the
                creation of durable and aesthetically pleasing products.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 md:gap-16">
            <p className="font-medium">02.</p>
            <div className=" flex flex-col gap-3">
              <p className=" font-medium">Conceptualization and prototyping </p>
              <p className=" text-sm text-[#7F818E]">
                Create mood boards, sketches, 3D models and spec sheets for
                sampling and production management.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 md:gap-16">
            <p className="font-medium">03.</p>
            <div className=" flex flex-col gap-3">
              <p className=" font-medium">Production management</p>
              <p className=" text-sm text-[#7F818E]">
                Develop and implement a robust production schedule, managing
                timelines for artisans to meet delivery deadlines.
              </p>
              <p className=" text-sm text-[#7F818E]">
                Monitor and control the cost of production, optimizing resources
                without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
