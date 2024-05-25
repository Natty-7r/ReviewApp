"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { IoStar } from "react-icons/io5";

const Rating = ({ rateBound = 5 }: { rateBound?: number }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex gap-1">
      {new Array(rateBound).fill(1).map((_, index) => (
        <RateStar
          rate={index + 1}
          key={index}
          rating={rating}
          setRating={setRating}
        />
      ))}
    </div>
  );
};

const RateStar = ({
  rate,
  setRating,
  rating,
}: {
  rate: number;
  setRating: Function;
  rating: number;
}) => {
  return (
    <IoStar
      className={cn(
        "w-10 h-10 text-slate-200",
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
