import React from "react";
import EditProfile from "./pages/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import BackToTop from "./components/BackToTop/BackToTop";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

import MensWear from "./pages/MensWear";
import Women from "./pages/Women";
import KidsWear from "./pages/KidsWear";
import Electronics from "./pages/Electronics";
import Trending from "./pages/Trending";
import AllProducts from "./pages/AllProducts";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/auth";

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {!hideLayout && (
        <Navbar handleOrderPopup={handleOrderPopup} />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<Home handleOrderPopup={handleOrderPopup} />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids-wear" element={<KidsWear />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/trending-products" element={<Trending />} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>

      {!hideLayout && <Footer />}
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
      />

      <BackToTop />
    </div>
  );
};

export default App;
