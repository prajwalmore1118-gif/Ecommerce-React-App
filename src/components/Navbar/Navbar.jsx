import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import {
  FaCaretDown,
  FaUserCircle,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";
import products from "../../data/products";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Women",
    link: "/women",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids-wear",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/mens-wear",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronics",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending-products",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const { cart } = useContext(CartContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  console.log(products);
  console.log("Total products:", products.length);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value === "") {
      setResults([]);
      return;
    }

    const filtered = products.filter((product) => {
      return product.title
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    setResults(filtered);
  };

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-xl items-center flex gap-1">
            <FiShoppingBag size={30} />
            ShopMe
          </Link>

          <div className="flex justify-between items-center gap-4">

            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              {results.length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-white dark:bg-slate-800 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">

                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => {
                        setSearch("");
                        setResults([]);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-slate-700 duration-200"
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />

                      <div>
                        <h3 className="font-semibold text-sm">
                          {product.title}
                        </h3>

                        <p className="text-primary font-bold">
                          ₹{product.price}
                        </p>
                      </div>

                    </Link>
                  ))}

                </div>
              )}

              {search !== "" && results.length === 0 && (
                <div className="absolute top-12 left-0 w-full bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 text-center text-gray-500 z-50">
                  No products found 😔
                </div>
              )}
            </div>

            {/* Order Button */}
            <Link
              to="/cart"
              className="relative bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full flex items-center gap-2"
            >
              <FaCartShopping className="text-xl" />

              <span className="absolute -top-2 -right-2 bg-red-500 h-5 w-5 rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </span>
            </Link>

            {/* Dark Mode */}
            <DarkMode />
            {user ? (
              <div className="relative" ref={profileMenuRef}>

                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 duration-300"
                >
                  <FaUserCircle size={22} />
                  <span>{user.name}</span>
                  <FaCaretDown />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden">

                    <div className="p-4 border-b dark:border-slate-700">
                      <h2 className="font-bold">{user.name}</h2>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <FaUser />
                      My Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <FaShoppingBag />
                      My Orders
                    </Link>

                    <Link
                      to="/wishlist"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <FaHeart />
                      Wishlist
                    </Link>

                    <button
                      onClick={() => {
                        localStorage.removeItem("loggedInUser");
                        window.location.reload();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-slate-700"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>

                  </div>
                )}

              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white px-4 py-2 rounded-full"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>


      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <Link to="/trending" className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </Link>

            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;