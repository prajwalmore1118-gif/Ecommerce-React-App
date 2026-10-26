import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout & Global Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import BackToTop from "./components/BackToTop/BackToTop";
import ProtectedRoute from "./components/ProtectedRoute";

// Core Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

// E-commerce Functional Pages
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

// Category Pages
import MensWear from "./pages/MensWear";
import Women from "./pages/Women";
import KidsWear from "./pages/KidsWear";
import Electronics from "./pages/Electronics";
import Trending from "./pages/Trending";
import AllProducts from "./pages/AllProducts";

const App = () => {
  const location = useLocation();

  // FIX: Dynamically hide Navbar/Footer on both login and register routes
  const hideLayout = ["/login", "/register"].includes(location.pathname);

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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen flex flex-col justify-between">
      {!hideLayout && <Navbar handleOrderPopup={handleOrderPopup} />}

      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          {/* Public Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Standard Public Routes */}
          <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Shop Categories */}
          <Route path="/products" element={<AllProducts />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/trending-products" element={<Trending />} />

          {/* Protected Routes */}
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

          {/* FIX: Catch-All Route moved to the absolute bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}

      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <BackToTop />
    </div>
  );
};

export default App;
