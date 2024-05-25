"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { IoStar } from "react-icons/io5";

const Rating = ({ rateBound = 5, syncRating, defaultRate }: RatingProps) => {
  const [rating, setRating] = useState(defaultRate || 0);
  const [ratingPreview, setRatingPreview] = useState(defaultRate || 0);
  const [preview, setPreview] = useState<boolean>(false);

  const updateRating = (rate: number) => {
    syncRating(rate);
    setRating(rate);
  };
  return (
    <div
      className="flex gap-1"
      onMouseEnter={() => setPreview(true)}
      onMouseLeave={() => setPreview(false)}
    >
      {new Array(rateBound).fill(1).map((_, index) => (
        <RateStar
          preview={preview}
          rate={index + 1}
          setRatingPreview={setRatingPreview}
          ratingPreview={ratingPreview}
          key={index}
          rating={rating}
          setRating={updateRating}
        />
      ))}
    </div>
  );
};

const RateStar = ({
  preview,
  rate,
  setRating,
  rating,
  ratingPreview,
  setRatingPreview,
}: RateStarProps) => {
  return (
    <IoStar
      className={cn(
        " text-slate-200 w-8 h-8 sm:w-10 sm:h-10",
        !preview && rating >= rate && "text-yellow-500",
        preview && ratingPreview >= rate && "text-yellow-500"
      )}
      onMouseOver={() => {
        setRatingPreview(rate);
      }}
      onClick={() => {
        if (rating == 1 && rate == 1) setRating(0);
        else setRating(rate);
      }}
    />
  );
};

export default Rating;
