import React from "react";

const ReviewCard = ({ review, rating }) => {
  return (
    <li
      key={rating}
      className="w-full p-4 sm:p-5 md:p-6 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow duration-300 my-3"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
        <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
          {review.reviewerName}
        </p>

        <p className="text-[11px] sm:text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full w-fit">
          {new Date(review.date).toDateString()}
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {review.comment}
      </p>
    </li>
  );
};

export default ReviewCard;
