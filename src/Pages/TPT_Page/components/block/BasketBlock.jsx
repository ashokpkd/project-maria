import React from "react";
import tpt4 from "../../../../assets/tpt/tpt4.png";
import tpt5 from "../../../../assets/tpt/tpt5.png";
import tpt6 from "../../../../assets/tpt/tpt6.png";
import tpt7 from "../../../../assets/tpt/tpt7.png";
import tpt8 from "../../../../assets/tpt/tpt8.png";
import tpt9 from "../../../../assets/tpt/tpt9.png";
import tpt10 from "../../../../assets/tpt/tpt10.png";
import tpt11 from "../../../../assets/tpt/tpt11.png";
import tpt12 from "../../../../assets/tpt/tpt12.png";
import tpt13 from "../../../../assets/tpt/tpt13.png";
import { IoMdArrowUp } from "react-icons/io";

const BasketBlock = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" flex justify-center items-center flex-col px-10  md:py-10 md:px-40 gap-10 md:gap-20">
      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20">
        <div className="flex flex-1">
          <img src={tpt4} alt="image" />
        </div>
        <div className="flex flex-col justify-end md:gap-12 gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <p className="text-[1.25rem]">#01 Veiled basket</p>
            <p className=" text-sm font-sans">
              This simple looking basket is not what meets the eye. The storage
              accessory conceals articles kept inside with its hidden base and
              closely weaved lid.
            </p>
          </div>
          <img
            src={tpt5}
            alt="image"
            className=" border-t border-gray-300 pt-8 "
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
        <div className="flex flex-1">
          <img src={tpt6} alt="image" />
        </div>
        <div className="flex flex-col justify-end md:gap-12 gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <p className="text-[1.25rem]">#02 Illuminating planter</p>
            <p className=" text-sm font-sans">
              Displays plants under a warm underglow. Light emerging from the
              strands of cane at the bottom creates a halo like effect. The
              lighting element has provision for a small pot for an inddor
              plant. Can be placed in side and accent tables.
            </p>
          </div>
          <img
            src={tpt7}
            alt="image"
            className=" border-t border-gray-300 pt-8 "
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
        <div className="flex flex-1">
          <img src={tpt8} alt="image" />
        </div>
        <div className="flex flex-col justify-end md:gap-12 gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <p className="text-[1.25rem]">#03 Side table</p>
            <p className=" text-sm font-sans">
              A modest table that completes a seating area. Small household
              objects, such as plants, small ornaments, or a solitary book can
              be placed on a tabletop, perhaps to be picked up again, or left
              there as a small display.
            </p>
          </div>
          <img
            src={tpt9}
            alt="image"
            className=" border-t border-gray-300 pt-8 "
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
        <div className="flex flex-1">
          <img src={tpt10} alt="image" />
        </div>
        <div className="flex flex-col justify-end md:gap-12 gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <p className="text-[1.25rem]">04 Classic baskets</p>
            <p className=" text-sm font-sans">
              Just beautiful receptacles. Serves utilitarian, and aesthetic
              purposes.
            </p>
          </div>
          <img
            src={tpt11}
            alt="image "
            className=" border-t border-gray-300 pt-8 "
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-20 ">
        <div className="flex flex-1">
          <img src={tpt12} alt="image" />
        </div>
        <div className="flex flex-col justify-end md:gap-12 gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <p className=" ">#05 Radiant planter</p>
            <p className=" text-sm font-sans">
              A simple pop of warmth and shine for the green. These planters
              double as a planter a pendant lamp, having both accents in one.
            </p>
          </div>

          <img
            src={tpt13}
            alt="image"
            className=" border-t border-gray-300 pt-8 "
          />
        </div>
      </div>

      <div
        className="flex font-sans justify-center items-center border-b border-black w-[8rem] mb-10 cursor-pointer"
        onClick={backToTop}
      >
        <p>Back to the top</p>
        <IoMdArrowUp size={20} />
      </div>
    </div>
  );
};

export default BasketBlock;
