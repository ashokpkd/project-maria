import React from "react";
import lg11 from "../../../../assets/lifegate/lg11.png";
import { CiGlobe } from "react-icons/ci";
import { PiArrowLineRightThin } from "react-icons/pi";
import { LuPenLine } from "react-icons/lu";
import { SlBookOpen } from "react-icons/sl";
import { LuPalette } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
function ActivitiesBlock() {
  return (
    <div className=" flex flex-col flex-1 md:flex-row gap-10 px-10 py-10 md:px-40">
      <div className="flex flex-col flex-1  gap-5">
        <div className=" flex flex-col gap-2">
          <p className=" font-medium text-lg  lg:text-xl xl:text-2xl text-[#2A2D43]">
            Main Activities in LG creators through a quick prototype?
          </p>
          <p className="font-sans text-sm">
            Our team crafted a low-fidelity Figma prototype, providing LifeGate
            with a visual representation of the platform's functionality. We
            focused on prototyping the four core activities within the platform
            which are:
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-3 flex-col md:flex-row">
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <PiArrowLineRightThin size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <CiGlobe size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex gap-3 flex-col md:flex-row">
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <LuPenLine size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <SlBookOpen size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex gap-3 flex-col md:flex-row">
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <LuPalette size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
            <div className="flex px-5 py-5   gap-3 border border-gray-300 rounded-lg">
              <div>
                <AiOutlinePicture size={30} />
              </div>
              <div>
                <p className="font-sans font font-medium">
                  Becoming a member of the community
                </p>
                <p className=" font-sans text-sm text-gray-400">
                  Compare plans, check pricing to register and onboard as a free
                  or premium member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <img src={lg11} alt="" />
      </div>
    </div>
  );
}

export default ActivitiesBlock;
