import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white pt-16">

      <div className="container">

        {/* Newsletter */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Join Our Newsletter
          </h2>

          <p className="text-gray-400 mt-3">
            Subscribe to get the latest offers, fashion trends and exclusive discounts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-[320px] px-6 py-3 rounded-l-full rounded-r-full sm:rounded-r-none text-black outline-none"
            />

            <button className="bg-primary hover:bg-pink-600 duration-300 px-8 py-3 rounded-r-full rounded-l-full sm:rounded-l-none mt-3 sm:mt-0">
              Subscribe
            </button>

          </div>

        </div>

        {/* Footer Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12"
        >

          {/* Company */}
          <div>

            <h1 className="text-3xl font-bold flex items-center gap-2">
              <FiShoppingBag />
              ShopMe
            </h1>

            <p className="text-gray-400 mt-5 leading-7">
              Discover premium fashion, electronics and lifestyle products
              with secure payments, fast delivery and amazing discounts every day.
            </p>

            <div className="flex gap-5 mt-6">

              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 hover:scale-125 duration-300" />

              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 hover:scale-125 duration-300" />

              <FaLinkedin className="text-2xl cursor-pointer hover:text-sky-400 hover:scale-125 duration-300" />

            </div>

          </div>

          {/* Important Links */}
          <div>

            <h2 className="text-xl font-bold mb-5">
              Important Links
            </h2>

            <ul className="space-y-3 text-gray-300">

              {FooterLinks.map((item) => (
                <li
                  key={item.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-2 duration-300"
                >
                  {item.title}
                </li>
              ))}

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h2 className="text-xl font-bold mb-5">
              Categories
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-primary cursor-pointer duration-300">
                Men's Fashion
              </li>

              <li className="hover:text-primary cursor-pointer duration-300">
                Women's Fashion
              </li>

              <li className="hover:text-primary cursor-pointer duration-300">
                Kids Wear
              </li>

              <li className="hover:text-primary cursor-pointer duration-300">
                Electronics
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-xl font-bold mb-5">
              Contact Us
            </h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <FaMapLocationDot className="text-primary" />
                Pune, Maharashtra
              </div>

              <div className="flex items-center gap-3">
                <IoCall className="text-primary" />
                +91 9876543210
              </div>

              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                support@shopme.com
              </div>

            </div>

          </div>

        </div>

        <hr className="border-gray-700" />

        {/* Copyright */}
        <div className="py-6 text-center text-gray-400 text-sm">

          © 2026 <span className="text-primary font-semibold">ShopMe</span>.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;