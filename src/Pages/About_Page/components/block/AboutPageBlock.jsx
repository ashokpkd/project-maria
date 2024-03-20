import React from "react";
import background from "../../../../assets/BG.png";
import AboutIntroBlock from "./AboutIntroBlock";
import WorkExperienceBlock from "./WorkExperienceBlock";
import QualificationBlock from "./QualificationBlock";
import SkillsBlock from "./SkillsBlock";
import IntrestBlock from "./IntrestBlock";
import LastBlock from "./LastBlock";
const AboutPageBlock = () => {
  return (
    <div
      className=" font-serif px-10 md:px-40 py-10 md:py-20  flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <AboutIntroBlock />
      <WorkExperienceBlock />
      <QualificationBlock />
      <SkillsBlock />
      <IntrestBlock />
      <LastBlock/>
    </div>
  );
};

export default AboutPageBlock;
