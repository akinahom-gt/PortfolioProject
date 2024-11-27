import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { Github, Linkedin, Instagram, Send } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Writing from "./Contact";
import { Link } from "react-scroll";

export default function Information() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative  px-8 "
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="lg:flex lg:text-left items-center justify-center py-[100px] gap-[70px] ">
      <aside class="lg:w-2/6 top-[100px] lg:self-start lg:sticky">
        <div className="flex flex-col px-10 lg:px-0  text-white">
          <h1 className="text-5xl sm:text-[57px] font-bold ">
            Akinahom Getahun
          </h1>
          <h2 className="text-[20px] mt-4 font-semibold">Frontend Developer</h2>
          <h3 className="text-[16px] text-gray-500 font-semibold lg:w-[300px] py-7">
            Creating functional and visually stunning websites.
          </h3>
          <ul className="lg:grid lg:grid-col gap-6 lg:text-[14px] py-10 px-12 hidden">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-14"
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-14"
            >
              <li>EXPERIENCE</li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-14"
            >
              <li>PROJECTS</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="links cursor-pointer px-2 hover:text-white hover:font-bold hover:px-14"
              
            >
              <li>CONTACT</li>
            </Link>
          </ul>
          <div className="flex gap-9 py-7  mt-[240px] sm:mt-[180px] lg:bottom-[-340px] absolute text-gray-400">
            <a href="https://github.com/akinahom-gt">
              <Github className="hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/akinahom-getahun-409993225/"
              className=""
            >
              <Linkedin className="hover:text-white" />
            </a>
            <Instagram className="hover:text-white" />
            <Send className="hover:text-white" />
          </div>
        </div>
      </aside>

      <main class=" lg:w-2/6">
        <About />
        <Experience />
        <Projects />
        <Writing />
        {/* <AnimatedCursor /> */}
      </main>
    </div>
    </div>
  );
}