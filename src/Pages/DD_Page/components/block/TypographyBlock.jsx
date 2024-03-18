import React from "react";
import dd6 from "../../../../assets/dd/dd6.png";
const TypographyBlock = () => {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 md:gap-20 px-10 py-10 md:px-40">
      <div>
        <img src={dd6} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <p>Typography</p>
        <p className="font-sans text-sm">
          Design Digest’s typeface provides a consistent, legible, and friendly
          typographic voice. It strikes a balance between not being overly
          editorial, preserving a dynamic quality imparting energy and
          modernity, while showcasing a timeless appeal.
        </p>
        <p className="font-sans text-sm">
        This colour system also ensures that Design Digest has flexibility in
          its tint range to support its product needs in various industries.
        </p>
      </div>
    </div>
  );
};

export default TypographyBlock;
