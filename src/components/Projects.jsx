import React from "react";
import { ArrowUpRight, Star, Download, ArrowRight } from "lucide-react";
import recipe from "../assets/images/recipe.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import nasa from "../assets/images/nasa.jpg";
import fingpt from "../assets/images/fingpt.jpg";

const projects = () => {
  return (
    <div
      id="projects"
      className=" grid grid-col space-y-6 lg:space-y-9 text-white px-4 scroll-mt-16 "
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="text-sm font-bold uppercase tracking-widest lg:sr-only sm:px-6">
          Projects
        </h1>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px]">
          <img src={recipe} alt="" />
        </div>
        <div>
          <a
            href="https://mn-lbla-1xsn.vercel.app/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            Recipe App <ArrowUpRight size={17} className="mt-2" />
          </a>

          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            Mn lbla recipe app provides users with a vast collection of recipes,
            cooking instructions, and helpful tools. It simplifies meal
            planning, offers inspiration for new dishes, and guides users
            through the cooking process with step-by-step instructions.
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-2">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px] ">
          <img src={portfolio} alt="" />
        </div>
        <div>
          <a
            href="https://portfolio-akinahoms-projects.vercel.app/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            Portfolio <ArrowUpRight size={17} className="mt-2" />
          </a>
          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            Portfolio which showcases a developer's skills, projects, and
            accomplishments with a visually appealing and user-friendly design.
          </h2>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px]">
          <img src={nasa} alt="" />
        </div>
        <div>
          <a
            href="https://nasa-mu.vercel.app/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            Astronomy Picture Of The Day{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </a>
          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            This website delivers stunning daily astronomy photos, complete with
            informative descriptions and cosmic insights. Ideal for space
            enthusiasts, it offers a gateway to explore the universe, one
            picture at a time.
          </h2>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col xl:flex gap-7 lg:gap-9 lg:w-[450px] xl:w-[630px] lg:h-[290px] xl:h-[260px] py-5 lg:py-8 lg:px-2 sm:px-7 px-4 rounded-lg hover:border hover:text-[#45aea4] hover:border-slate-800/50 hover:border-t-teal-500/70 hover:bg-slate-800/50">
        <div className="w-[120px]">
          <img src={fingpt} alt="" />
        </div>
        <div>
          <a
            href="https://finchat-mu.vercel.app/"
            className="font-bold flex gap-1 hover:text-[#45aea4]"
          >
            FinGPT <ArrowUpRight size={17} className="mt-2" />
          </a>
          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            FinGPT delivers crypto insights, personalized financial guidance,
            and AI-powered tools to help you make smart, confident financial
            decisions.
          </h2>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              TailwindCSS
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Firebase
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className="font-bold flex gap-1 hover:text-[#45aea4] h-[70px]">
        View Full Project Archive
        <ArrowRight size={17} className="mt-2" />
      </h2> */}
    </div>
  );
};

export default projects;
