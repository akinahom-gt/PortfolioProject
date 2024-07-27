import React from "react";
import { ArrowUpRight, Link } from "lucide-react";

const experience = () => {
  return (
    <div id="experience" className="grid grid-col space-y-8 text-white px-4">
      <h1 className="uppercase font-bold lg:hidden">Experience</h1>
      <div
        className=" grid grid-col lg:flex gap-9 w-[700px] h-[300px]" >
        <div>
          <h2 className="text-gray-500">2024 — Present</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Senior Frontend Engineer, Accessibility · Klaviyo{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[430px] py-2">
            Build, style, and ship high-quality websites, design systems, mobile
            apps, and digital experiences for a diverse array of projects for
            clients including Harvard Business School, Everytown for Gun Safety,
            Pratt Institute, Koala Health, Vanderbilt University, The 19th News,
            and more. Provide leadership within engineering department through
            close collaboration, knowledge shares, and spearheading the
            development of internal tools.
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-4">
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Typescript
            </div>
            <div className="w-[60px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Storybook
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col lg:flex gap-12">
        <div>
          <h2 className="text-gray-500 ">2018 — 2024</h2>
        </div>
        <div>
          <h2 className="flex gap-1 font-bold hover:text-[#45aea4]">
            Lead Engineer · Upstatement
            <ArrowUpRight size={17} className="mt-2" />
          </h2>
           <h2 className="text-gray-500 text-lg font-bold">Senior Engineer</h2>
          <h2 className="text-gray-500 font-semibold lg:w-[400px] py-2">
            Klaviyo Build and maintain critical components used to construct
            Klaviyo’s frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </h2>

          <div className="flex flex-wrap lg:grid lg:grid-cols-4 text-[#45aea4] text-center text-sm font-bold gap-2 py-7">
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Typescript
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              HTML & SCSS
            </div>
            <div className="w-[60px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Next.js
            </div>
            <div className="w-[110px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React Native
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              WordPress
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Contentful
            </div>
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Node.js
            </div>
            <div className="w-[50px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              PHP
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col lg:flex gap-9">
        <div>
          <h2 className="text-gray-500 ">July — Dec 2017</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            UI Engineer Co-op · Apple{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[400px] py-2">
            Developed and styled interactive web apps for Apple Music, including
            the user interface of Apple Music’s embeddable web player widget for
            in-browser user authorization and full song playback.
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-7">
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Ember
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              SCSS
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              MusicKit.js
            </div>
          </div>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-9 ">
            <a href="" className="flex gap-2 text-white hover:text-[#45aea4]">
              {" "}
              <Link size={14} />
              MusicKit.js
            </a>
            <a href="" className="flex gap-2 text-white hover:text-[#45aea4]">
              {" "}
              <Link size={14} />
              9to5Mac
            </a>
            <a href="" className="flex gap-2 text-white hover:text-[#45aea4]">
              {" "}
              <Link size={14} />
              The Verge
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-col lg:flex gap-9">
        <div>
          <h2 className="text-gray-500 ">July — Dec 2017</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Developer · Scout Studio <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[400px] py-2">
            Collaborated with other student designers and engineers on pro-bono
            projects to create new brands, design systems, and websites for
            organizations in the community. Jekyll SCSS JavaScript WordPress
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-7">
            <div className="w-[80px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Jekyll
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              SCSS
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Wordpress{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col lg:flex gap-9">
        <div>
          <h2 className="text-gray-500 ">July — Dec 2016</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Software Engineer Co-op ·<ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[400px] py-2">
            Starry Worked with the UI team to engineer and improve major
            features of Starry’s customer-facing Android app. Android App
            ScreenTime 2.0
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-7">
            <div className="w-[90px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Cordova
            </div>
            <div className="w-[90px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Backbone
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[60px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              CSS
            </div>
          </div>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-9 ">
            <a href="" className="flex gap-2 text-white hover:text-[#45aea4]">
              {" "}
              <Link size={14} />
              Andriod App
            </a>
            <a href="" className="flex gap-2 text-white hover:text-[#45aea4]">
              {" "}
              <Link size={14} />
              ScreenTime 2.0
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-col lg:flex gap-9">
        <div>
          <h2 className="text-gray-500 ">July — Dec 2015</h2>
        </div>
        <div>
          <h2 className="font-bold flex gap-1  hover:text-[#45aea4]">
            Creative Technologist Co-op ·{" "}
            <ArrowUpRight size={17} className="mt-2" />
          </h2>

          <h2 className="text-gray-500 font-semibold w-full lg:w-[400px] py-2">
            MullenLowe U.S. Developed, maintained, and shipped production code
            for client websites. Clients included JetBlue, Lovesac, U.S.
            Cellular, U.S. Department of Defense, and more.
          </h2>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-7">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              HTML
            </div>
            <div className="w-[60px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              CSS
            </div>
            <div className="w-[100px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Javascript
            </div>
            <div className="w-[60px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Jquery
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold flex hover:text-[#45aea4] h-[100px]">
        View Full Résumé <ArrowUpRight size={20} />
      </h2>
    </div>
  );
};

export default experience;
