import React from "react";
import lg2 from "../../../../assets/lifegate/lg2.png";
import lg3 from "../../../../assets/lifegate/lg3.png";
import lg4 from "../../../../assets/lifegate/lg4.png";


const Challengeblock = () => {
  return (
    <div className=" flex flex-col font-sans  bg-[#4E5DAB1A] py-14  px-10 gap-5 md:px-40 xl:px-[550px]">
      <div className=" flex flex-col gap-3 md:flex-row border-b border-gray-400 py-10">
        <div className=" flex flex-col gap-3  md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <p className=" text-sm text-[#5B61F3]">Challenge</p>
          <p className=" font-medium text-lg font-serif">
            Driving LifeGate’s market leadership with Gen Z to be the hub of
            sustainable innovation
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[700px] lg:w-[700px] xl:w-[800px]">
          <p className=" text-sm">
            Gen Z stands out as the foremost advocates of sustainability,
            emphasizing transparency, minimal consumption, and activism for a
            better world. This presents a significant opportunity for B-corps to
            make a substantial impact. Yet, LG, with its 5 million-strong
            community, faced a disconnect with Gen Z due to its inability to
            appear relatable and accessible to them.
          </p>
          <p className=" text-sm">
            They sought our Business Design team to develop a strategy for
            better engagement while maximizing their resources.
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <img src={lg2} alt="" className=" max-w-96" />
        </div>
      </div>

      <div className=" flex flex-col gap-3 md:flex-row border-b border-gray-400 py-10">
        <div className=" flex flex-col gap-3  md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <p className=" text-sm text-[#5B61F3]">Strategy</p>
          <p className=" font-medium text-lg font-serif">
            Empathy-Infused strategy to reshape LG and pave a strong competitive
            edge
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[700px] lg:w-[700px] xl:w-[800px]">
          <p className=" text-sm">
            We deeply engaged with Gen Z, conducting empathy interviews,
            research, and social listening to understand their thoughts,
            behaviors, and pain points. This immersion provided valuable
            insights, trigger points, and consumer journey mapping.
          </p>
          <p className=" text-sm">
            We pinpointed LG's opportunity gaps through trend and competitor
            analysis, proposing multiple growth directions, which we refined
            into one vision to position LG as the top choice for Gen Z
            sustainability.
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <img src={lg3} alt="" className=" max-w-96" />
        </div>
      </div>
      <div className=" flex flex-col gap-3 md:flex-row border-b border-gray-400 py-10">
        <div className=" flex flex-col gap-3  md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <p className=" text-sm text-[#5B61F3]">Outcome</p>
          <p className=" font-medium text-lg font-serif">
            Finding a sweet spot for LG’s entry and propose a Creator centric
            solution
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[700px] lg:w-[700px] xl:w-[800px]">
          <p className=" text-sm">
            Our team explored the creator economy as LG's ideal entry point. We
            studied subscription-based platforms like LinkedIn, Dribbble,
            Medium, and more, analyzing how content creators monetize through
            ads, sponsorships, product placements, and digital sales.
          </p>
          <p className=" text-sm">
            Our proposal focused on building a creator community using
            LifeGate's digital platform. We provided a branding direction and
            initial low-fidelity prototypes for the platform.
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:w-[400px] lg:w-[400px] xl:w-[500px]">
          <img src={lg4} alt="" className=" max-w-96" />
        </div>
      </div>
    </div>
  );
};

export default Challengeblock;
