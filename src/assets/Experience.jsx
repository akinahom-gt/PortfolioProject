import React from "react";
import { ArrowUpRight, Link } from "lucide-react";

const experience = () => {
  return (
    <div id="experience" className="grid grid-col space-y-8 text-white px-4">
      <h1 className="uppercase font-bold lg:hidden">Experience</h1>
      <div className=" grid grid-col lg:flex gap-9 w-[700px] h-[320px]">
        <div>
          <h2 className="text-gray-500">2023 — March 2024</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            FrontEnd Developer · Kuraz Technologies{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            Build, style, and ship high-quality websites, design systems, mobile
            apps, and digital experiences for a diverse array of projects for
            clients including Harvard Business School, Everytown for Gun Safety,
            Pratt Institute, Koala Health, Vanderbilt University, The 19th News,
            and more. Provide leadership within engineering department through
            close collaboration, knowledge shares, and spearheading the
            development of internal tools.
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1LEIBVvRSeccx_PpIbikuPA6wfLapJsHD/view?usp=sharing"
        className="font-bold h-[100px] flex gap-1 hover:text-[#45aea4]"
      >
        View Full Résumé
        <ArrowUpRight size={17} className="mt-2" />
      </a>{" "}
    </div>
  );
};

export default experience;
