import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">

      {/* Newsletter Section */}
      <div className="bg-[#FFB568] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-semibold text-[#3c2c2c] mb-4">
              Subscribe Our <br /> Newsletter
            </h2>

            <p className="text-[#5c4a4a] max-w-md">
              Don&apos;t miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons,
              gifts and much more.
            </p>
          </div>

          {/* Email Input */}
          <div className="flex max-w-md ml-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-white/60 placeholder:text-gray-500 outline-none"
            />

            <button className="bg-[#3b2323] text-white px-8 font-medium">
              SUBSCRIBE
            </button>
          </div>

        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#fde3c8] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3c2c2c]">
              Our information
            </h3>

            <p className="text-gray-700">1234 - Peru</p>
            <p className="text-gray-700">La Libertad 43210</p>
            <p className="text-gray-700">123-456-789</p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3c2c2c]">
              About Us
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer">Support Center</li>
              <li className="cursor-pointer">Customer Support</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Copy Right</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3c2c2c]">
              Product
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>Road bikes</li>
              <li>Mountain bikes</li>
              <li>Electric</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3c2c2c]">
              Social
            </h3>

            <div className="flex gap-5 text-xl text-[#3c2c2c]">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;