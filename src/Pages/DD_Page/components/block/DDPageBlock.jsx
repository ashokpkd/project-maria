import React from "react";
import background from "../../../../assets/BG.png";
import DDintroBlock from "./DDintroBlock";
import IdeaBlock from "./IdeaBlock";
import VisualBlock from "./VisualBlock";
import ColorsBlock from "./ColorsBlock";
import TypographyBlock from "./TypographyBlock";
import BespokeBlock from "./BespokeBlock";
import ToneBlock from "./ToneBlock";
import ImplimentationBlock from "./ImplimentationBlock";
import InteractiveBlock from "./InteractiveBlock";

const DDPageBlock = () => {
  return (
    <div
      className=" font-serif flex flex-col gap-10 text-[#2A2D43]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <DDintroBlock />
      <IdeaBlock />
      <VisualBlock />
      <ColorsBlock />
      <TypographyBlock />
      <BespokeBlock />
      <ToneBlock />
      <ImplimentationBlock />
      <InteractiveBlock/>
    </div>
  );
};

export default DDPageBlock;
