import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartItems = useSelector((state) => state.cartProducts);

  console.log("cartItems", cartItems);

  const totalPrice = cartItems.reduce((accumulatore, currentItem) => {
    return accumulatore + currentItem.price;
  }, 0);

  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <li className="flex items-center gap-2">
            <img src={item.images[0]} alt="" className="w-20" />
            <p className="flex items-center">{item.title}</p>
            <p className="ml-auto mr-5">${item.price}</p>
          </li>
        );
      })}
      <div className="flex ">
        <p>Total</p>
        <p>{totalPrice}</p>
      </div>
    </ul>
  );
};

export default CartList;
