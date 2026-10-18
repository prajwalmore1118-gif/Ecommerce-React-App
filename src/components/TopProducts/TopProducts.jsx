import React from "react";
import { FaStar } from "react-icons/fa";
import products from "../../data/products";
import ProductCard from "../product/ProductCard";

const TopProducts = ({ handleOrderPopup }) => {
  const womenProducts = products
    .filter((product) => product.category === "women")
    .slice(0, 4);
  return (
    <div className="py-20 bg-gradient-to-b from-pink-50 via-white to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container">

        {/* Header section */}
        <div className="text-left mb-24">
          <p className="text-primary font-semibold uppercase tracking-[4px]">
            New Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            ✨ Women's Fashion
          </h1>

          <p className="text-gray-500 mt-3 max-w-xl">
            Discover elegant dresses, premium outfits and trending fashion
            hand-picked for every season.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {womenProducts.map((product) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              className="group relative rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                NEW
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:text-red-500 duration-300 z-20">
                ❤️
              </div>

              {/* Image Section */}
              <div className="h-[280px] bg-pink-50 rounded-t-3xl flex items-center justify-center p-5 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">

                {/* star rating */}
                <div className="flex justify-center items-center gap-2 mt-3">
                  <FaStar className="text-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                <h1 className="text-xl font-bold">{product.title}</h1>

                <div className="flex justify-center items-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-pink-600">
                    ₹{product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>
                </div>

                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {product.description}
                </p>

                <button
                  className="w-full mt-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl hover:scale-105 duration-300"
                  onClick={handleOrderPopup}
                >
                  Shop Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
