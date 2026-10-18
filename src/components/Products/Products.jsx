import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../product/ProductCard";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  // Show only featured products on Home
  const topProducts = products.filter(product => product.featured).slice(0, 8);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <div>
            <p className="text-primary font-semibold uppercase tracking-widest">
              Featured Collection
            </p>

            <h1 className="text-4xl font-extrabold mt-2">
              🔥 Top Selling Products
            </h1>

            <p className="text-gray-500 mt-2">
              Discover our most loved products picked just for you.
            </p>
          </div>

          <button
            className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-primary text-white hover:scale-105 duration-300 shadow-lg"
          >
            View All →
          </button>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/products"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-black duration-300"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;