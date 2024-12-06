import React from "react";

const about = () => {
  return (
    <div id="about" className="text-white px-4 scroll-mt-14 lg:mt-0 mt-20 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="text-sm font-bold uppercase tracking-widest lg:sr-only sm:px-6 ">
          About
        </h1>
      </div>
      <div className="lg:py-6 sm:px-7 lg:px-0 text-lg text-gray-500 lg:w-[450px] xl:w-[580px] lg:h-[500px] ">
        <h2>
          <p>
            {" "}
            I'm software engineer specializing in front-end development, my
            journey in coding began with various projects, leading me to focus
            on creating engaging and intuitive user interfaces.{" "}
          </p>
          <p>
            I began my career by interning at Kuraz while still completing my
            degree, specializing in front-end development. My responsibilities
            included developing front-end solutions using various frameworks,
            which honed my skills and deepened my interest in crafting seamless
            and visually appealing web experiences.
          </p>
          <p>
            What captivates me about front-end development is the ability to
            blend creativity with functionality. I’m particularly fascinated by
            how thoughtful design and interactive elements can significantly
            enhance user engagement and accessibility.
          </p>
          <p>
            Outside of work, I enjoy spending time with my family and reading.
            Feel free to explore my portfolio to see some of the projects I’ve
            worked on.
          </p>
        </h2>
      </div>
    </div>
  );
};

export default about;
