import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartList = () => {
  const cartItems = useSelector((state) => state.cartProducts);

  // const totalPrice = cartItems.reduce((accumulator, currentItem) => {
  //   return accumulator + currentItem.price;
  // }, 0);

  console.log("first", cartItems);

  const totalPrice = (arr) => {
    let sum = 0;
    if (cartItems.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
      }
    }

    return sum.toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <p className="h-screen flex items-center justify-center font-extrabold text-3xl">
        Your Cart is Empty. Please Add Some Product By Click on{" "}
        <Link to={"/products"} className="text-blue-600 ml-1.5">
          Product
        </Link>
      </p>
    );
  }

  return (
    <ul className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-4 space-y-2">
      <h2 className="flex justify-center font-extrabold text-2xl text-[#d5af34]">
        Cart List
      </h2>
      {cartItems.map((item, index) => {
        return (
          <li
            key={index}
            className="flex items-center gap-4 border-b-2[#d5af34] py-5"
          >
            <img
              src={item.images[0]}
              alt=""
              className="w-20 object-cover rounded-lg"
            />
            <p className="font-medium text-[#d5af34] text-lg">{item.title}</p>
            <p className="ml-auto font-semibold text-lg text-[#d5af34]">
              ${item.price}
            </p>
          </li>
        );
      })}

      <div className="flex justify-end items-center pt-3">
        <p className="text-lg font-bold mr-3 text-[#d5af34]">Total:</p>
        <p className="text-xl font-bold text-amber-600">
          ${totalPrice(cartItems)}
        </p>
      </div>
      <div className="flex justify-center text-white">
        <button className="bg-amber-800 px-3 py-2 rounded ">Pay Now</button>
      </div>
    </ul>
  );
};

export default CartList;
