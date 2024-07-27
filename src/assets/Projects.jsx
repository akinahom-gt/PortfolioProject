import React from "react";
import { ArrowUpRight, Star, Download, ArrowRight } from "lucide-react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";

const projects = () => {
  return (
    <div id="projects" className="grid grid-col space-y-9 text-white px-4">
      <h1 className="uppercase font-bold lg:hidden">Projects</h1>
      <div className="flex gap-9 w-[700px] h-[150px]">
        <div className="w-[120px]">
          <img src={one} alt="" />
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Build a Spotify Connected App <ArrowUpRight size={17} className="mt-2"/>
          </h2>

          <h2 className="text-gray-500 font-semibold lg:w-[430px]">
            Video course that teaches how to build a web app with the Spotify
            Web API. Topics covered include the principles of REST APIs, user
            auth flows, Node, Express, React, Styled Components, and more.
          </h2>
        </div>
      </div>

      <div className="flex gap-9 w-[700px] h-[240px]">
        <div className="w-[120px]">
          <img src={two} alt="" />
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
            Spotify Profile <ArrowUpRight size={17} className="mt-2"/>
          </h2>
          <h2 className="text-gray-500 font-semibold lg:w-[430px]">
            Web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </h2>
          <a href="" className="flex gap-2 hover:text-[#45aea4] py-2"><Star size={14} className="mt-1 "/> 634</a>
          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-2">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              React
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Express
            </div>
            <div className="w-[90px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Spotify API
            </div>
            <div className="w-[90px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Heroku
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-9 w-[700px] h-[100px]">
        <div className="w-[120px]">
          <img src={three} alt="" />
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
          Halcyon Theme  <ArrowUpRight size={17} className="mt-2"/>
          </h2>
          <h2 className="text-gray-500 font-semibold lg:w-[430px]">
            Minimal dark blue theme for VS Code, Sublime Text,
            Atom, iTerm, and more. 100k+ Installs
          </h2>
          <a href="" className="flex gap-2 hover:text-[#45aea4] py-2"><Download size={14} className="mt-1 "/> 100k+ Installs</a>
        </div>
      </div>
      <div className="flex gap-9 w-[700px] h-[180px]">
        <div className="w-[120px]">
          <img src={four} alt="" />
        </div>
        <div>
          <h2 className="font-bold flex gap-1 hover:text-[#45aea4]">
          brittanychiang.com (v4) <ArrowUpRight size={17} className="mt-2"/>
          </h2>
          <h2 className="text-gray-500 font-semibold lg:w-[430px]">
          An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks
          </h2>
          <a href="" className="flex gap-2 hover:text-[#45aea4] py-2"><Star size={14} className="mt-1 "/> 7,378</a>

          <div className="flex flex-wrap text-[#45aea4] text-center text-sm font-bold gap-2 py-2">
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Gatsby
            </div>
            <div className="w-[160px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Styled Components
            </div>
            <div className="w-[70px] h-[35px] bg-[#112b3a] py-1 rounded-[60px]">
              Netlify
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold flex gap-1 hover:text-[#45aea4] h-[100px]">
      View Full Project Archive<ArrowRight size={17} className="mt-2"/>
      </h2>
    </div>
  );
};

export default projects;
