import React from "react";
import dd9 from "../../../../assets/dd/dd9.png";

const ToneBlock = () => {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 md:gap-20 px-10 py-10 md:px-40">
      <div>
        <img src={dd9} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <p className="text-[1.25rem]">Tone of Voice</p>
        <p className="font-sans text-sm">
          Design Digest’s typeface provides a consistent, legible, and friendly
          typographic voice. It strikes a balance between not being overly
          editorial, preserving a dynamic quality imparting energy and
          modernity, while showcasing a timeless appeal.
        </p>
        <p className="font-sans text-sm">
        it's a strategic
          decision that ensures every communication, be it in print or digital,
          carries a lasting impact. Its versatile and adaptable nature makes it
          a reliable tool in maintaining the brand's visual identity
        </p>
      </div>
    </div>
  );
};

export default ToneBlock;
