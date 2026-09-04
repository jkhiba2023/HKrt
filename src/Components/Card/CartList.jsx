import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-center font-extrabold text-xl sm:text-2xl md:text-3xl">
          Your Cart is Empty. Please Add Some Product By Click on{" "}
          <Link to="/products" className="text-blue-600 ml-1.5">
            Product
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 md:px-6 py-6 md:py-10">
      <h2 className="text-center font-extrabold text-2xl sm:text-3xl text-[#d5af34] mb-6 md:mb-8">
        Cart List
      </h2>

      <div className="hidden md:block overflow-x-auto shadow-xl rounded-xl">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#d5af34] text-white">
              <th className="px-3 lg:px-5 py-4 text-center">Sr No</th>

              <th className="px-3 lg:px-5 py-4 text-center">Product Image</th>

              <th className="px-3 lg:px-5 py-4 text-left">Product Name</th>

              <th className="px-3 lg:px-5 py-4 text-center">Quantity</th>

              <th className="px-3 lg:px-5 py-4 text-right">Price</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-3 lg:px-5 py-5 text-center">{index + 1}</td>

                  <td className="px-3 lg:px-5 py-5">
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-lg"
                      />
                    </div>
                  </td>

                  <td className="px-3 lg:px-5 py-5 font-medium text-[#d5af34]">
                    <span className="line-clamp-2">{item.title}</span>
                  </td>

                  <td className="px-3 lg:px-5 py-5">
                    <div className="flex justify-center items-center">
                      <button className="bg-[#d5af34] text-white w-8 h-8 rounded-l">
                        -
                      </button>

                      <span className="w-10 h-8 flex justify-center items-center border-y">
                        {item.qty}
                      </span>

                      <button className="bg-[#d5af34] text-white w-8 h-8 rounded-r">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="px-3 lg:px-5 py-5 text-right font-semibold text-[#d5af34] whitespace-nowrap">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td
                colSpan="4"
                className="px-5 py-5 text-right font-bold text-lg"
              >
                Total:
              </td>

              <td className="px-5 py-5 text-right font-bold text-xl text-amber-600 whitespace-nowrap">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {cartItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border p-4"
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1">
                    Product #{index + 1}
                  </p>

                  <h3 className="font-bold text-[#d5af34] text-base sm:text-lg line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    Price: ${item.price}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t mt-4 pt-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Quantity</p>

                  <div className="flex items-center">
                    <button className="bg-[#d5af34] text-white w-8 h-8 rounded-l">
                      -
                    </button>

                    <span className="w-10 h-8 text-[#d5af34] font-bold flex justify-center items-center border-y">
                      {item.qty}
                    </span>

                    <button className="bg-[#d5af34] text-white w-8 h-8 rounded-r">
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Total</p>

                  <p className="font-bold text-[#d5af34] text-lg">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-white rounded-xl shadow-md border p-5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total:</span>

            <span className="font-bold text-xl text-amber-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <button className="bg-amber-800 hover:bg-amber-900 text-white px-5 sm:px-7 py-2.5 rounded-lg transition">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CartList;
