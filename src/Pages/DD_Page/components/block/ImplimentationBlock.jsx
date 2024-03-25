import React from "react";
import dd10 from "../../../../assets/dd/dd10.png";
const ImplimentationBlock = () => {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 md:gap-20 px-10 md:py-10  md:px-40">
      <div className="flex flex-col justify-center gap-5 flex-1">
        <div className="flex flex-col gap-3">
          <p>Other implementations</p>
          <p className=" font-sans text-sm">
            A simply bold, yet bespoke workdmark of the company name stands as
            the centerpiece of their branding. This bespoke workmark is
            meticulously designed to serve as their full lockup and projects
            reliability.
          </p>
          <p className=" font-sans text-sm">
            The wordmark is crafted with a modern sans-serif typeface, it
            features letterforms that have been customized to ensure a unique
            representation of their identity, setting them apart from the
            ordinary and reinforcing their commitment to a contemporary,
            tailored approach to design.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Next steps</p>
          <p className=" font-sans text-sm">
            This diamond inspired logomark, while not the primary logo, serves a
            crucial role as a versatile element in the brand's identity. It is
            selectively deployed, strategically placed to enhance the overall
            design. Its adaptability is a key feature; the logomark can function
            as a supergraphic, making a bold and memorable statement when needed
          </p>
        </div>
      </div>
      <div className=" flex flex-1">
        <img src={dd10} alt="" />
      </div>
    </div>
  );
};

export default ImplimentationBlock;
