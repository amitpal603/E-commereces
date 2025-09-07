import React, { useContext } from "react";
import { Ecommerce } from "../../context/Context";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, HandleRemove, HandleAddToCart } = useContext(Ecommerce);

  const total = cart.reduce((acc, cur) => {
    acc + cur.totalPrice;
    return acc;
  }, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="mt-32 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
          <div className="flex flex-col items-center justify-center min-h-96 bg-white rounded-lg shadow-md p-8">
            <FaShoppingCart className="text-gray-300 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mb-6">
              Add some products to get started!
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              <Link to="/"> Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Cart ({cart.length} items)
          </h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-2">
            <FaTrash className="text-sm" />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <div className="p-6 flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.thumbnail || item.images?.[0]}
                          alt={item.title}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div className="mb-4 sm:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                              {item.title}
                            </h3>
                            {item.category && (
                              <p className="text-sm text-gray-500 mb-2 capitalize">
                                {item.category}
                              </p>
                            )}

                            {/* Price Display */}
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-green-600">
                                ${item.totalPrice.toFixed(2)}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-gray-100 rounded-lg">
                              <button
                                onClick={() => HandleRemove(item, false)}
                                disabled={item?.quantity === 1}
                                className=" disabled:opacity-45 p-2 hover:bg-gray-200 rounded-l-lg transition-colors duration-200"
                              >
                                <FaMinus className="text-gray-600 text-sm" />
                              </button>

                              <span className="px-4 py-2 bg-white border-t border-b border-gray-200 min-w-12 text-center font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors duration-200"
                                onClick={() => HandleAddToCart(item)}
                              >
                                <FaPlus className="text-gray-600 text-sm" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => HandleRemove(item, true)}
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              title="Remove item"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* Summary Items */}

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${cart.reduce((acc,curr) => acc + curr.totalPrice , 0).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
              
              className=" w-full bg-purple-500 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold text-lg mb-4">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold">
                <Link to="/">Continue Shopping</Link>
              </button>

              {/* Payment Icons */}
              <div className="mt-6 pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2 text-center">
                  We accept
                </p>
                <div className="flex justify-center gap-2 text-2xl text-gray-400">
                  💳 🏦 💰 📱
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
