"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { IoStar } from "react-icons/io5";

const Rating = ({ rateBound = 5, syncRating, defaultRate }: RatingProps) => {
  const [rating, setRating] = useState(defaultRate || 0);

  const updateRating = (rate: number) => {
    syncRating(rate);
    setRating(rate);
  };
  return (
    <div className="flex gap-1">
      {new Array(rateBound).fill(1).map((_, index) => (
        <RateStar
          rate={index + 1}
          key={index}
          rating={rating}
          setRating={updateRating}
        />
      ))}
    </div>
  );
};

const RateStar = ({ rate, setRating, rating }: RateStarProps) => {
  return (
    <IoStar
      className={cn(
        " text-slate-200 w-8 h-8 sm:w-10 sm:h-10",
        rating >= rate && "text-yellow-500"
      )}
      onMouseOver={() => {
        setRating(rate);
      }}
      onClick={() => {
        if (rating == 1 && rate == 1) setRating(0);
      }}
    />
  );
};

export default Rating;
