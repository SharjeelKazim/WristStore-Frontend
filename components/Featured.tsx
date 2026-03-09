/* eslint-disable @next/next/no-img-element */
import React from "react";

const Featured = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="">
        <div className="flex flex-col py-24 gap-10">
          <div className=" text-center text-black text-[35px] font-bold">
            <span className="">FEATURED</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto">
            <div className="px-4 pt-4 cursor-pointer text-black group bg-[#fde3c8] hover:bg-[#FFB568] hover:text-white transition duration-300 ease-in-out rounded-xl">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <img
                    src="/watch.png"
                    alt="watch"
                    className="w-100 object-contain hover:scale-110 transition-transform duration-500"
                  />
                  <h1 className="text-[26px] font-bold text-center">
                    JAZZMASTER
                  </h1>
                </div>
                <p className="text-[80px] font-bold pt-2 text-[#8a44181a] group-hover:text-white">
                  01
                </p>
              </div>
            </div>
            <div className="px-4 pt-4 cursor-pointer text-black group bg-[#fde3c8] hover:bg-[#FFB568] hover:text-white transition duration-300 ease-in-out rounded-xl">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <img
                    src="/watch.png"
                    alt="watch"
                    className="w-100 object-contain hover:scale-110 transition-transform duration-500"
                  />
                  <h1 className="text-[26px] font-bold text-center">
                    LONGINES ROSE
                  </h1>
                </div>
                <p className="text-[80px] font-bold pt-2 text-[#8a44181a] group-hover:text-white">
                  02
                </p>
              </div>
            </div>
            <div className="px-4 pt-4  cursor-pointer text-black group bg-[#fde3c8] hover:bg-[#FFB568] hover:text-white transition duration-300 ease-in-out rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <img
                    src="/watch.png"
                    alt="watch"
                    className="w-100 object-contain hover:scale-110 transition-transform duration-500"
                  />
                  <h1 className="text-[26px] font-bold text-center">
                    DREYFUSS GOLD
                  </h1>
                </div>
                <p className="text-[80px] font-bold pt-2 text-[#8a44181a] group-hover:text-white ">
                  03
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
