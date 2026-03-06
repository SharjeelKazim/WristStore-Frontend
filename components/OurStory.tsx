/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurStory = () => {
  return (
    <section className="w-full min-h-screen  flex items-center">
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* LEFT SIDE IMAGE */}
        <div className="relative w-1/2 flex justify-center">

          {/* Orange Background Box */}
          {/* <div className="absolute w-[400px] h-[400px] bg-[#FFB568] left-10 top-20 -z-0"></div> */}

          {/* Watch Image */}
          <img
            src="/Imgstory.png"
            alt="watch"
            className=" relative z-10 shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-1/2 pl-20">

          {/* Small Line */}
          <div className="w-12 h-0.5 bg-[#FFB568] mb-4"></div>

          <h3 className="text-gray-500 tracking-widest mb-4">
            OUR STORY
          </h3>

          <h1 className="text-4xl font-bold leading-snug mb-6">
            Inspirational Watch of <br /> this year
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            The latest and modern watches of this year, is available in
            various presentations in this store, discover them now.
          </p>

          <button className="bg-black text-white px-8 py-3 shadow-lg hover:bg-gray-800 transition">
            Discover
          </button>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
