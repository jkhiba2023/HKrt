import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartItems = useSelector((state) => state.cartProducts);

  console.log("cartItems", cartItems);

  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <li className="flex items-center gap-2 border-1">
            <img src={item.images[0]} alt="" className="w-20" />
            <p className="">{item.title}</p>
            <p className="ml-auto mr-5">${item.price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
