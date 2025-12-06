import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="h-full w-full sm:w-52 md:w-60 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl mx-auto">
      <div className="h-50 md:h-50 lg:h-60 w-full bg-[#d4af33] flex items-center justify-center overflow-hidden">
        <img
          src={data.images[0]}
          alt={data.title}
          className=" object-cover p-2  md:object-cover w-full h-full md:h-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 text-center space-y-2">
        <p className="font-semibold text-gray-700 text-base md:text-[14px] truncate">
          {data.title}
        </p>

        <div className="flex justify-center items-center gap-3">
          <p className="font-bold text-gray-900 text-sm">${data.price}</p>
          <p className="text-green-600 font-medium text-sm">
            {data.discountPercentage}% off
          </p>
        </div>

        <p className="text-gray-600 text-[9px] md:text-[14px] bg-gray-100 inline-block px-1 md:px-3  py-1 rounded-full">
          Free Delivery
        </p>

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
