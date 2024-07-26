import React from "react";
import { Github, Linkedin, Codepen, Instagram, Twitter } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Writing from "./Writing";
const Information = () => {
  return (
    <div className="grid grid-col lg:flex text-left justify-center py-[100px] gap-[150px] ">
      <div className="flex flex-col text-white stick top-">
        <h1 className="text-[60px] font-bold">Brittany Chiang</h1>
        <h2 className="text-[20px] font-semibold">Senior Frontend Developer</h2>
        <h3 className="text-[16px] text-gray-500 font-semibold lg:w-[300px] py-7">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </h3>
        <ul className="links grid lg:grid-col lg:text-xl py-9">
          <a href="#About"><li>About</li></a>
          <a href="#Experience"><li>Experience</li></a>
          <a href="#Projects"><li>Projects</li></a>
        </ul>
        <div className="flex gap-9 py-7 text-gray-500">
          <Github className="hover:text-white" />
          <Linkedin className="hover:text-white"/>
          <Codepen className="hover:text-white"/>
          <Instagram className="hover:text-white"/>
          <Twitter className="hover:text-white"/>
        </div>
      </div>
      <div className="  ">
        <About />
        <Experience />
        <Projects />
        <Writing />
      </div>
    </div>
  );
};

export default Information;
{
 
}
