/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BiShoppingBag } from "react-icons/bi";

const products = [
  {
    id: 1,
    name: "SPIRIT ROSE",
    price: "$1500",
    image: "/watch.png",
  },
  {
    id: 2,
    name: "KHAKI PILOT",
    price: "$1350",
    image: "/watch.png",
  },
  {
    id: 3,
    name: "JUBILEE BLACK",
    price: "$870",
    image: "/watch.png",
  },
  {
    id: 4,
    name: "FOSIL ME3",
    price: "$650",
    image: "/watch.png",
  },
  {
    id: 5,
    name: "DUCHEN",
    price: "$950",
    image: "/watch.png",
  },
];

const Products = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-[#FFB568] mx-auto mb-4"></div>
          <h2 className="tracking-widest text-gray-700">PRODUCTS</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-10 justify-items-center">

          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white w-62.5 p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-35 mx-auto mb-6 hover:scale-110 transition-transform duration-500"
              />

              <h3 className="text-sm font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-[#FFB568] font-semibold">
                {product.price}
              </p>

              {/* Cart Icon Box */}
              <div className="absolute bottom-0 right-0 bg-black p-3 cursor-pointer hover:bg-gray-800 transition">
                <BiShoppingBag className="text-white text-lg" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Products;
