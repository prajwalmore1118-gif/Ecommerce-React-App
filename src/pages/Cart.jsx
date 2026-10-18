import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <h2 className="text-xl">Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border rounded-xl p-5 mb-5 shadow"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="font-bold text-xl">
                  {item.title}
                </h2>

                <p className="text-gray-500">
                  {item.color}
                </p>

                <h3 className="text-primary font-bold text-lg">
                  ₹{item.price}
                </h3>

                <p className="mt-2">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <FaMinus />
                </button>

                <span className="text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-primary text-white p-2 rounded-full"
                >
                  <FaPlus />
                </button>

              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={22} />
              </button>
            </div>
          ))}

          {/* Order Summary */}
          <div className="mt-10 border rounded-xl p-6 shadow max-w-md ml-auto">

            <h2 className="text-2xl font-bold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Delivery</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between font-bold text-xl border-t pt-4">
              <span>Total</span>
              <span>₹{total + 99}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-primary text-white py-3 rounded-xl hover:opacity-90"
            >
              Proceed to Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;