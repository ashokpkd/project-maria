import React from "react";
import background from "../../../../assets/BG.png";
import TptIntroBlock from "./TptIntroBlock";
import ProjectBlock from "./ProjectBlock";
import StoryBlock from "./StoryBlock";
import BasketBlock from "./BasketBlock";

const TptPageBlock = () => {
  return (
    <div
      className=" font-serif flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <TptIntroBlock />
      <ProjectBlock />
      <StoryBlock />
      <BasketBlock />
    </div>
  );
};

export default TptPageBlock;
