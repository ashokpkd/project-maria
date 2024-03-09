import React from "react";
import CvIntroBlock from "./CvIntroBlock";
import CvAboutBlock from "./CvAboutBlock";
import CvSideProjectsBlock from "./CvSideProjectsBlock";
import CvWorkExpBlock from "./CvWorkExpBlock";
import CvEducationBlock from "./CvEducationBlock";
import CvCirtificationBlock from "./CvCirtificationBlock";
import CvContactBlock from "./CvContactBlock";

const CvMain = () => {
  return (
    <div
      className=" h-full w-full  text-gray-400 pl-[5%]"
      style={{ backgroundColor: "#1c1b1c" }}
    >
      <CvIntroBlock />
      <CvAboutBlock />
      <CvSideProjectsBlock />
      <CvWorkExpBlock />
      <CvEducationBlock />
      <CvCirtificationBlock />
      <CvContactBlock/>
    </div>
  );
};

export default CvMain;
