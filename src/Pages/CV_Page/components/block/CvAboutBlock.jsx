import React from "react";

const CvAboutBlock = () => {
  return (
    <div className=" flex flex-col px-5 gap-3 py-5 md:px-56">
      <p className=" font-medium text-slate-200">About</p>
      <div className=" px-5 md:px-0 text-sm flex flex-col gap-3">
        <p>
          A versatile Business designer with 3 years of experience in the Design
          consulting industry. Specialities include Product design, Graphic
          design, UI design, Brand strategy and Lifestyle Accessory design.
        </p>
        <p>
          I approach every design brief empathetically, holistically and ready
          to get my hands dirty. I enjoy collaboration, radical brainstorming
          sessions, prototype experimentations, and learning about new tools and
          approaches to continue enhancing my design process.
        </p>
      </div>
    </div>
  );
};

export default CvAboutBlock;
