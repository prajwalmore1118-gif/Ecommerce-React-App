import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-10">
      <div className="container mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold">
              No orders yet
            </h2>

            <p className="text-gray-500 mt-2">
              Your placed orders will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >

                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      Order #{order.id}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      {order.date}
                    </p>
                  </div>

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Processing
                  </span>
                </div>

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b py-4"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-primary font-bold">
                        ₹{item.price}
                      </p>
                    </div>

                    <p className="font-bold">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between items-center mt-5">
                  <span className="text-lg font-semibold">
                    Order Total
                  </span>

                  <span className="text-2xl font-bold text-primary">
                    ₹{order.total}
                  </span>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;