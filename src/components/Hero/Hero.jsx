import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { motion } from "framer-motion";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "BIGGEST SALE OF THE YEAR",
    subtitle: "Men's Collection",
    offer: "Up to 50% OFF",
    description:
      "Discover premium fashion designed for everyday comfort and style. Limited-time offers on our best-selling men's collection.",
  },

  {
    id: 2,
    img: Image2,
    title: "NEW ARRIVALS",
    subtitle: "Women's Collection",
    offer: "Flat 30% OFF",
    description:
      "Explore the latest trends with elegant dresses, tops, and ethnic wear. Fresh styles added every week.",
  },

  {
    id: 3,
    img: Image3,
    title: "MEGA ELECTRONICS SALE",
    subtitle: "Latest Gadgets",
    offer: "Save up to 70%",
    description:
      "Upgrade your lifestyle with the newest gadgets and accessories at unbeatable prices.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* text content section */}

                <div className="flex flex-col justify-center gap-5 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">

                  <div className="backdrop-blur-xl bg-white/40 dark:bg-white/10 rounded-3xl p-10 shadow-2xl border border-white/20">
                    <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      🔥 New Season Collection
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="uppercase tracking-widest text-primary font-semibold"
                    >
                      {data.offer}
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
                    >
                      <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {data.title}
                      </span>
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {data.subtitle}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-600 dark:text-gray-400 max-w-lg"
                    >
                      {data.description}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-3">

                      <motion.button
                        onClick={handleOrderPopup}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: "0px 15px 30px rgba(59,130,246,0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-xl transition-all duration-300"
                      >
                        Shop Now
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                      >
                        Explore
                      </motion.button>

                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">

                      <div className="backdrop-blur-lg bg-white/40 dark:bg-white/10 rounded-xl px-4 py-3 shadow-lg">
                        ⭐ <span className="font-bold">50K+</span> Customers
                      </div>

                      <div className="backdrop-blur-lg bg-white/40 dark:bg-white/10 rounded-xl px-4 py-3 shadow-lg">
                        🚚 Free Shipping
                      </div>

                      <div className="backdrop-blur-lg bg-white/40 dark:bg-white/10 rounded-xl px-4 py-3 shadow-lg">
                        🔒 Secure Payment
                      </div>
                    </div>
                  </div>

                </div>

                {/* image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center relative" >

                  {/* Rotating Background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-3xl"
                  />

                  {/* Floating Image */}
                  <motion.img
                    src={data.img}
                    alt={data.title}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-[320px] sm:w-[450px] lg:w-[520px] object-contain drop-shadow-[0_35px_35px_rgba(59,130,246,0.45)]"
                  />

                  {/* Discount Badge */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl flex flex-col justify-center items-center font-bold"
                  >
                    <span className="text-2xl font-bold">70%</span>
                    <span className="text-xs">OFF</span>
                  </motion.div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
