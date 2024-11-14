import React from "react";

const about = () => {
  return (
    <div id="about" className="text-white px-4  ">
      <h1 className="uppercase font-bold lg:hidden">About</h1>
      <h2 className="py-6 text-lg text-gray-500 flex flex-wrap w-[500px] lg:w-[550px] h-[500px]">
        <p>
          {" "}
          I'm software engineer specializing in front-end development, my
          journey in coding began with various projects, leading me to focus on
          creating engaging and intuitive user interfaces.{" "}
        </p>
        <p>
          I began my career by interning at Kuraz while still completing my
          degree, specializing in front-end development. My responsibilities
          included developing front-end solutions using various frameworks,
          which honed my skills and deepened my interest in crafting seamless
          and visually appealing web experiences.
        </p>
        <p>
          What captivates me about front-end development is the ability to blend
          creativity with functionality. I’m particularly fascinated by how
          thoughtful design and interactive elements can significantly enhance
          user engagement and accessibility.
        </p>
        <p>
          Outside of work, I enjoy spending time with my family and reading.
          Feel free to explore my portfolio to see some of the projects I’ve
          worked on.
        </p>
      </h2>
    </div>
  );
};

export default about;
