import React from "react";

import { Mail } from "lucide-react";

const Writing = () => {
  return (
    <div id="contact" className="grid grid-col lg:space-y-9 text-white sm:px-12 lg:px-4">
      <div className=" lg:w-[450px] xl:w-[580px] h-[350px]">
        <h1 className="text-4xl lg:text-[46px] font-bold py-9">Get In Touch</h1>
        <h2 className="text-gray-500 lg:w-[450px] h-[100px] ">
          I'm always on the lookout for new opportunities and my inbox is open
          for all.
        </h2>
        <button
          onClick={() => (window.location = "mailto:akinahomgetahun@gmail.com")}
          className="border border-teal-300 hover:border-4 text-[#58e3c4] flex py-3 rounded-[10px] w-[140px] h-[55px]"
        >
          <Mail size={20} className="mx-4 mt-1 text-[#58e3c4]" /> Email Me
        </button>
      </div>
    </div>
  );
};

export default Writing;
