import React from "react";
import five from "../images/five.jpg";
import six from "../images/six.jpg";
import { ArrowUpRight } from "lucide-react";

const Writing = () => {
  return (
    <div>
      <div id="#Projects" className="grid grid-col space-y-9 text-white px-4">
        <h1 className="uppercase font-bold lg:hidden">Writing</h1>
        <div className="flex gap-9 w-[700px] h-[100px]">
          <div className="w-[100px]">
            <img src={five} alt="" />
          </div>
          <div>
            <h2 className="text-gray-500 font-semibold">2020</h2>
            <h2 className="font-bold flex text-lg hover:text-[#45aea4] py-3">
              Integrating Algolia Search with WordPress Multisite
              <ArrowUpRight size={20} />
            </h2>
          </div>
        </div>

        <div className="flex gap-9 w-[700px] h-[150px]">
          <div className="w-[100px]">
            <img src={six} alt="" />
          </div>
          <div>
            <h2 className="text-gray-500 font-semibold">2019</h2>
            <h2 className="font-bold flex hover:text-[#45aea4] text-lg py-3">
              Building a Headless Mobile App CMS From Scratch
              <ArrowUpRight size={20} />
            </h2>
          </div>
        </div>
        <h2 className="w-[500px]">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
          text is set in the Inter typeface.
        </h2>
      </div>
    </div>
  );
};

export default Writing;
