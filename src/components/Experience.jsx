import React from "react";
import { ArrowUpRight, Link } from "lucide-react";

const experience = () => {
  return (
    <div
      id="experience"
      className="grid grid-col lg:space-y-8 text-white px-4 scroll-mt-16 mt-10 lg:mt-0"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="text-sm font-bold uppercase tracking-widest lg:sr-only sm:px-6">
          Experience
        </h1>
      </div>
      <div className="grid grid-col xl:flex lg:gap-9 gap-3 lg:w-[450px] xl:w-[650px] lg:h-[390px] py-8 px-4 sm:px-7 lg:px-2 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50  ">
        <div>
          <h2 className="text-gray-500 ">2023 — March 2024</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            FrontEnd Developer · Kuraz Technologies{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[410px] py-2 ">
            Worked closely with UX/UI designers to translate visual concepts
            into functional web interfaces, ensuring alignment between design
            specifications and final implementation. Coordinated with backend
            developers to integrate server-side logic with front-end
            functionality, enabling dynamic content and interactive features.
            Participated in regular team meetings and code reviews to streamline
            workflows, address challenges, and maintain high standards of
            quality throughout the development process.
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
      <div className=" grid grid-col xl:flex lg:gap-9 gap-3 lg:w-[450px] xl:w-[650px] lg:h-[320px] py-8 px-4 sm:px-7 lg:px-2 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div>
          <h2 className="text-gray-500">Sep 2024 — Present</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Freelance Developer · Self-Employed{" "}
            {/* <ArrowUpRight size={17} className="mt-2" /> */}
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[410px] py-2">
            Designed and developed custom websites and applications, working
            directly with clients to meet their specifications. Managed multiple
            projects, ensuring timely delivery and high-quality results.
            Maintained regular communication to incorporate feedback and adapt
            to changing requirements.
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
        href="https://drive.google.com/file/d/1xShTkD4o62MB6_oA9c75eWDPgADnfGbD/view?usp=sharing"
        className="font-bold h-[100px] flex gap-1 hover:text-[#45aea4] py-8 xl:py-0 lg:px-0 sm:px-7"
      >
        View Full Résumé
        <ArrowUpRight size={17} className="mt-2" />
      </a>{" "}
    </div>
  );
};

export default experience;
