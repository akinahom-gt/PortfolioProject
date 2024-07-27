import React from "react";

const about = () => {
  return (
    <div id="about" className="text-white px-4  ">
      <h1 className="uppercase font-bold lg:hidden">About</h1>
      <h2 className="py-6 text-lg text-gray-500 lg:w-[550px] h-[500px]">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{" "}
        <a href="https://starry.com/" className="text-white hover:text-[#45aea4]">advertising agency</a>, a{" "}
        <a href="https://starry.com/" className="text-white hover:text-[#45aea4]">a start-up</a>, a{" "}
        <a href="https://starry.com/" className="text-white hover:text-[#45aea4]">huge corporation</a>, and
        a{" "}
        <a className="text-white hover:text-[#45aea4]">
          digital product studio
        </a>
        .<br></br><br></br>My main focus these days is building accessible user
        interfaces for our customers at{" "}
        <a href="https://starry.com/" className="text-white hover:text-[#45aea4]">Klaviyo</a>. I most enjoy
        building software in the sweet spot where design and engineering meet —
        things that look good but are also built well under the hood. In my free
        time, I've also released an{" "}
        <a href="https://starry.com/" className="text-white hover:text-[#45aea4]">online video course</a>{" "}
        that covers everything you need to know to build a web app with the
        Spotify API.
        <br></br>
        <br></br>
        When I’m not at the computer, I’m usually rock climbing, reading,
        hanging out with my wife and two cats, or running around Hyrule
        searching for Korok seedsKorok seeds.
      </h2>
    </div>
  );
};

export default about;
