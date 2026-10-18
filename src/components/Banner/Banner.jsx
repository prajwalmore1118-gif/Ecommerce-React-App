import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaTags } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative overflow-hidden py-20 my-20 rounded-[40px] bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-52 -left-40 blur-3xl"></div>

      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full -bottom-40 right-0 blur-3xl"></div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className="relative flex justify-center">

            <img
              src={BannerImg}
              alt="Winter Sale"
              className="w-[450px] drop-shadow-2xl animate-bounce"
            />

            {/* Discount Badge */}
            <div className="absolute top-5 right-5 bg-red-500 text-white rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-2xl">

              <h1 className="text-3xl font-bold">
                50%
              </h1>

              <p className="text-xs">
                OFF
              </p>

            </div>
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-5xl font-extrabold leading-tight">
              🔥 MEGA WINTER SALE
            </h1>
            <p className="text-lg text-gray-200 leading-8 max-w-lg">
              Flat 50% OFF on Jackets, Hoodies, Sweaters and Premium Fashion.

              Shop today's hottest deals with free shipping and secure checkout.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              <Link
                to="/products"
                className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold hover:scale-105 duration-300 shadow-xl"
              >
                Shop Now →
              </Link>

              <Link
                to="/products"
                className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 duration-300"
              >
                Explore
              </Link>

            </div>

            {/* Features */}
            <div className="flex flex-col gap-4">

              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-16 w-16 p-4 rounded-full bg-white/20 backdrop-blur-md shadow-lg" />
                <p className="font-semibold">Premium Quality</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaShippingFast className="text-4xl h-16 w-16 p-4 rounded-full bg-white/20 backdrop-blur-md shadow-lg" />
                <p className="font-semibold">Free Express Delivery</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdPayment className="text-4xl h-16 w-16 p-4 rounded-full bg-white/20 backdrop-blur-md shadow-lg" />
                <p className="font-semibold">100% Secure Payment</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
               <FaTags className="text-4xl h-16 w-16 p-4 rounded-full bg-white/20 backdrop-blur-md shadow-lg" />
                <p className="font-semibold">Daily Flash Deals</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
