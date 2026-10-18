import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

  const newOrder = {
    id: Date.now(),
    userEmail: loggedInUser.email,
    items: cart,
    total: total + 99,
    date: new Date().toLocaleString(),
  };

  return (
    <div className="container mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side */}

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Delivery Address
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <textarea
            placeholder="Complete Address"
            rows="4"
            className="w-full border rounded-lg p-3 mb-4"
          ></textarea>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="City"
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="PIN Code"
              className="border rounded-lg p-3"
            />

          </div>

          <select className="w-full border rounded-lg p-3 mt-4">

            <option>Cash on Delivery</option>

            <option>Online Payment</option>

          </select>

        </div>

        {/* Right Side */}

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >
              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-bold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="flex justify-between mt-6">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>Delivery</span>
            <span>₹99</span>
          </div>

          <div className="flex justify-between text-2xl font-bold border-t mt-6 pt-4">
            <span>Total</span>
            <span>₹{total + 99}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-primary text-white py-3 rounded-xl hover:opacity-90 duration-300"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;