import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="group w-full max-w-[280px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[290px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mx-auto">
      <div className="w-full h-[220px] sm:h-[240px] md:h-[230px] lg:h-[250px] bg-[#d4af33] flex items-center justify-center overflow-hidden">
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 sm:p-4 text-center">
        <div className="flex justify-center items-center gap-1 mb-1">
          <MdOutlineStarBorderPurple500 className="text-yellow-500 text-lg sm:text-xl" />

          <span className="text-[#d4af33] font-semibold text-xs sm:text-sm">
            {data.rating}
          </span>
        </div>

        <p className="font-semibold text-gray-700 text-sm sm:text-base truncate px-1">
          {data.title}
        </p>

        <div className="flex justify-center items-center gap-2 mt-2">
          <p className="font-bold text-gray-900 text-base sm:text-lg">
            ${data.price}
          </p>

          <p className="text-green-600 font-semibold text-xs sm:text-sm">
            {data.discountPercentage}% off
          </p>
        </div>

        {/* Delivery */}
        <p className="inline-block mt-2 text-gray-600 text-[10px] sm:text-xs bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
          Free Delivery
        </p>
      </div>
    </div>
  );
};

export default Card;
