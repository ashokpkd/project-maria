import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CvWorkExpBlock = () => {
  return (
    <div className=" flex flex-col px-5 gap-3 md:gap-5 py-5 md:px-56">
      <p className=" font-medium text-slate-200">Work Experience</p>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2022—Now</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Design Consultant at Board of Innovation
              <MdArrowOutward className="max-md:hidden" />
            </p>
            <p>Antwerp, Belgium</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
              • Collaborated with Design Studio London to successfully launch
              the company's new brand in May 2022, delivering 200+ innovative
              tools, web designs and other assets with the new brand identity
              within the first two months.
            </p>
            <p>
              • Work on projects with the Board of Innovationʼs clients like
              Nestle and PepsiCo in areas of Product and UI/ UX Design.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2021—Now</p>
        </div>
        <div className=" flex flex-col md:-ml-12 gap-2">
          <div className=" flex flex-col  gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Multidisciplinary Design at Freelance
            </p>
            <p>Milan, Italy</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
              Collaborated with companies in Italy and India in the consultancy
              and design sector. Contributed to the P&O and marketing
              departments.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2021 — 2021</p>
        </div>
        <div className=" flex flex-col md:-ml-12 gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Start- up consulting and Digital marketing intern at Fashion
              Technology Accelerator
              <MdArrowOutward className="max-md:hidden"/>
            </p>
            <p>Milan, Italy</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
              • Conducted research on industry trends, target markets,
              competitors, and customer preferences to develop effective
              strategies
            </p>
            <p>
              • Assisted the Head of start-ups in client meetings, workshops and
              investor meets.
            </p>
            <p>
              • Managed the growth of social media presence and used Google
              Analytics and marketing automation platforms to track key metrics.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 text-sm gap-2 flex flex-col md:flex-row">
        <div className="flex justify-sart md:w-[50vh] px-0">
          <p>2020 — 2020</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col   gap-1">
            <p className=" flex text-slate-200 font-medium hover:underline">
              Product design intern at The Purple Turles Pvt, Ltd
              <MdArrowOutward className="max-md:hidden"/>
            </p>
            <p>Bangalore, India</p>
          </div>
          <div className="flex flex-col gap-3 pr-5">
            <p>
              Our team of product designers were tasked to develop a distinctive
              collection of cane products that seamlessly integrates the brand's
              design language, metropolitan influences and cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvWorkExpBlock;
