import React from "react";

const ReviewCard = ({ review, rating }) => {
  return (
    <li
      key={rating}
      className="p-3 border rounded-xl shadow-sm my-2 bg-gray-50"
    >
      <div className="flex justify-between items-center mb-1">
        <p className="font-semibold text-gray-800">{review.reviewerName}</p>
        <p className="text-xs text-gray-500">
          {new Date(review.date).toDateString()}
        </p>
      </div>
      <p className="text-sm text-gray-700">{review.comment}</p>
    </li>
  );
};

export default ReviewCard;
