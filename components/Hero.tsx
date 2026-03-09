/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { PiMoonBold } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex">

      <div className="w-1/2  relative px-16 py-10">

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-md tracking-widest">THE CLOCK LOOKOUT</h1>

          <ul className="flex gap-8 text-sm">
            <li className="cursor-pointer hover:text-[#FFB568]">Home</li>
            <li className="cursor-pointer hover:text-[#FFB568]">Featured</li>
            <li className="cursor-pointer hover:text-[#FFB568]">Products</li>
            <li className="cursor-pointer hover:text-[#FFB568]">New</li>
          </ul>
        </div>

               <div className="mt-28 max-w-md">
          <h1 className="text-4xl font-bold leading-tight">
            NEW WATCH <br /> COLLECTIONS B720
          </h1>

          <p className="text-gray-600 mt-6">
            Latest arrival of the new imported watches of the B720 series,
            with a modern and resistant design.
          </p>

          <p className="text-[#FFB568] text-xl font-semibold mt-6">
            $1245
          </p>

          <div className="flex  mt-8">
            <button className="px-6 mt-1 h-10 bg-gray-300 hover:bg-gray-400 cursor-pointer">
              Discover
            </button>

            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 cursor-pointer">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="w-[40%] mx-auto bg-[#FFB568] relative flex justify-center items-center">

        <div className="absolute top-8 right-10 flex gap-6 text-xl cursor-pointer">
          <PiMoonBold />
          <BiShoppingBag />
        </div>
        <img
          src="/watch.png"
          alt="watch"
          className="w-100 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
