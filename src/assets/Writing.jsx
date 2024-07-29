import React from "react";

import { Mail } from "lucide-react";

const Writing = () => {
  return (
      <div className="grid grid-col space-y-9 text-white px-4">
        <h1 className="uppercase font-bold lg:hidden ">Contact</h1>
        <div className="w-[700px] h-[350px]">
          <h1 id="#writing" className="text-[46px] font-bold py-9">Get In Touch</h1>
          <h2 className="text-gray-500 w-[450px] h-[100px] ">
            I'm always on the lookout for new opportunities and my inbox is open
            for all.
          </h2>
          <button
            onClick={() =>
              (window.location = "mailto:akinahomgetahun@gmail.com")
            }
            className="border border-teal-300 hover:border-4 text-[#58e3c4] flex py-3 rounded-[10px] w-[140px] h-[55px]"
          >
            <Mail size={20} className="mx-4 mt-1 text-[#58e3c4]" /> Email Me
          </button>
        </div>
        <h2 className="w-[500px] py-7">
          Based on Brittany Chiang's website. Coded in Visual Studio Code. Built
          with ReactJs and Tailwind CSS, deployed with Vercel.
        </h2>
      </div>
  );
};

export default Writing;
