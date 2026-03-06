/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="w-1/2 pr-20">

          {/* Quote Icon */}
          <div className="bg-white w-12 h-12 flex items-center justify-center shadow-md mb-8">
            <FaQuoteLeft className="text-[#FFB568]" />
          </div>

          {/* Text */}
          <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
            They are the best watches that one acquires, also they are always
            with the latest news and trends, with a very comfortable price and
            especially with the attention you receive, they are always attentive
            to your questions.
          </p>

          <p className="font-semibold mb-8">March 27. 2021</p>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src="/profile.png"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Lee Doe</h4>
              <p className="text-gray-500 text-sm">
                Director of a company
              </p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button className="bg-white p-3 shadow-md hover:bg-gray-200 transition">
              <FiArrowLeft />
            </button>
            <button className="bg-white p-3 shadow-md hover:bg-gray-200 transition">
              <FiArrowRight />
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-1/2 flex justify-center">

          {/* Orange Background Box */}
          <div className="absolute w-87.5 h-87.5  right-10 top-0 z-0"></div>

          {/* Watch Image */}
          <img
            src="/ImgTestimonial.png"
            alt="watch"
            className="w-87.5 relative z-10 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
