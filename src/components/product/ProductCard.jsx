import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={product.aosDelay}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="group relative space-y-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-2xl overflow-hidden"
    >
      {/* SALE Badge */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
        SALE
      </div>

      {/* Wishlist */}
      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:text-red-500 transition z-20">
        ❤️
      </div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail || product.img}
          alt={product.title}
          className="w-full h-80 object-cover object-top rounded-xl transition-all duration-500 group-hover:scale-110"
        />
      </Link>

      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold hover:text-primary">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
        </div>
        <span className="inline-block bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
          {product.brand}
        </span>

        <div className="flex items-center justify-between mt-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{product.rating}</span>
        </div>

        <p className="text-sm text-gray-400">
          {product.reviews} Reviews
        </p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:scale-105 duration-300 shadow-lg"
        >
          <FaShoppingCart />
          Add To Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;