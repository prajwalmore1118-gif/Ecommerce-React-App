import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserEdit,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";


const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-10">
      <div className="container mx-auto">

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Profile Image */}
            <img
              src={user?.image || "https://i.pravatar.cc/200"}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-primary object-cover"
            />

            {/* User Details */}
            <div className="flex-1">

              <h1 className="text-4xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-500 mt-2">
                {user.email}
              </p>

              <div className="flex gap-8 mt-6">

                <div>
                  <h2 className="text-2xl font-bold text-primary">12</h2>
                  <p className="text-gray-500">Orders</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-pink-500">8</h2>
                  <p className="text-gray-500">Wishlist</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-green-500">₹18K</h2>
                  <p className="text-gray-500">Saved</p>
                </div>

              </div>

              <Link
                to="/edit-profile"
                className="mt-5 inline-flex bg-primary text-white px-6 py-3 rounded-full hover:scale-105 duration-300 items-center gap-2"
              >
                <FaUserEdit />
                Edit Profile
              </Link>

            </div>

          </div>

        </div>

        {/*Profile Card*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <Link to="/orders">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
              <FaShoppingBag className="text-4xl text-primary mb-4" />
              <h2 className="text-xl font-bold">
                My Orders
              </h2>
              <p className="text-gray-500 mt-2">
                View all your previous orders.
              </p>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
              <FaHeart className="text-4xl text-red-500 mb-4" />
              <h2 className="text-xl font-bold">
                Wishlist
              </h2>
              <p className="text-gray-500 mt-2">
                Your favourite products.
              </p>
            </div>
          </Link>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
            <FaMapMarkerAlt className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-bold">Addresses</h2>
            <p className="text-gray-500 mt-2">
              Manage saved addresses.
            </p>
          </div>

          <Link to="/checkout">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
              <FaCreditCard className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-bold">Payment</h2>
              <p className="text-gray-500 mt-2">
                Saved cards and UPI.
              </p>
            </div>
          </Link>

          <Link to="/profile">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
              <FaUserEdit className="text-4xl text-yellow-500 mb-4" />
              <h2 className="text-xl font-bold">
                Edit Profile
              </h2>
              <p className="text-gray-500 mt-2">
                Update your personal details.
              </p>
            </div>
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              alert("Logout Successful");
              window.location.href = "/login";
            }}
            className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 text-left"
          >
            <FaSignOutAlt className="text-4xl text-red-600 mb-4" />
            <h2 className="text-xl font-bold">
              Logout
            </h2>
            <p className="text-gray-500 mt-2">
              Securely sign out.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;