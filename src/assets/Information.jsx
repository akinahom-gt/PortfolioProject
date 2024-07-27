import React from "react";
import { Github, Linkedin, Codepen, Instagram, Twitter } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Writing from "./Writing";
import { Link } from "react-scroll";

const Information = () => {
  return (
    <div className="grid grid-col lg:flex text-left justify-center py-[100px] gap-[150px] ">
      <aside class="top-[100px] self-start sticky">
        <div className="flex flex-col text-white">
          <h1 className="text-[60px] font-bold">Brittany Chiang</h1>
          <h2 className="text-[20px] font-semibold">
            Senior Frontend Developer
          </h2>
          <h3 className="text-[16px] text-gray-500 font-semibold lg:w-[300px] py-7">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </h3>
          <ul className="grid lg:grid-col gap-6 lg:text-[14px] py-10 px-12">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-9"
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-9"
            >
              <li>EXPERIENCE</li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-9"
            >
              <li>PROJECTS</li>
            </Link>
          </ul>
          <div className="flex gap-9 py-7 bottom-[-340px] absolute text-gray-500">
            <Github className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Codepen className="hover:text-white" />
            <Instagram className="hover:text-white" />
            <Twitter className="hover:text-white" />
          </div>
        </div>
      </aside>

      <main class="col-span-6">
        <About />
        <Experience />
        <Projects />
        <Writing />
      </main>
    </div>
  );
};

export default Information;
{
}
