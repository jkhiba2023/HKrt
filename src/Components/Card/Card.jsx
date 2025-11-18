import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden m-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="h-56 w-full bg-[#d4af33] flex items-center justify-center overflow-hidden">
        <img
          src={data.images[0]}
          alt={data.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 text-center space-y-2">
        {/* Title */}
        <p className="font-semibold text-gray-700 text-base truncate">
          {data.title}
        </p>

        {/* Price + Discount */}
        <div className="flex justify-center items-center gap-3">
          <p className="font-bold text-gray-900 text-sm">${data.price}</p>
          <p className="text-green-600 font-medium text-sm">
            {data.discountPercentage}% off
          </p>
        </div>

        {/* Delivery Info */}
        <p className="text-gray-600 text-xs bg-gray-100 inline-block px-3 py-1 rounded-full">
          Free Delivery
        </p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 text-yellow-500 mt-1">
          <MdOutlineStarBorderPurple500 size={18} />
          <span className="text-gray-700 font-medium text-sm">
            {data.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
