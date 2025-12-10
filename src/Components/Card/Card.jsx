import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="h-full w-full md:w-60 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl mx-auto">
      <div className="h-30 md:h-60 lg:h-60 w-full bg-[#d4af33] flex items-center justify-center overflow-hidden">
        <img
          src={data.images[0]}
          alt={data.title}
          className=" object-cover p-2  md:object-cover w-full h-full md:h-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className=" h-23 md:h-40  md:p-4 text-center ">
        <div className="flex justify-center items-center text-yellow-500">
          <MdOutlineStarBorderPurple500 size={18} />
          <span className="text-[#d4af33] font-medium text-[10px] md:text-sm">
            {data.rating}
          </span>
        </div>
        <p className="font-semibold text-gray-700 text-[12px] md:text-sm md:text-[14px] truncate">
          {data.title}
        </p>

        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-gray-900 text-[10px] md:text-sm md:text-[18px]">
            ${data.price}
          </p>
          <p className="text-green-600 font-medium text-[10px] text-sm">
            {data.discountPercentage}% off
          </p>
        </div>

        <p className="text-gray-600 text-[9px] md:text-[14px] bg-gray-100 inline-block px-1 md:px-3  md:py-1 rounded-full">
          Free Delivery
        </p>
      </div>
    </div>
  );
};

export default Card;
