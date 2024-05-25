"use client";

import { useState } from "react";
import Rating from "../rating/star-rating";
import { Card, CardContent, CardHeader } from "../ui/card";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { cn } from "@/lib/utils";
import PraiseButton from "../button/praise-button";

const ReviewCard = () => {
  const [reviewState, setReviewState] = useState<ReviewState>({
    safetyRating: 3,
    cummicationRating: 2,
    recommended: false,
    praise: "first",
  });

  const rateSafety = (rate: number) => {
    setReviewState((prevState: any) => ({
      ...prevState,
      safetyRating: rate,
    }));
  };
  const rateCommunication = (rate: number) => {
    setReviewState((prevState: any) => ({
      ...prevState,
      cummicationRating: rate,
    }));
  };
  const recommend = (recommended: boolean) => {
    setReviewState((prevState: any) => ({
      ...prevState,
      recommended: recommended,
    }));
  };
  const praise = (value: Praise) => {
    setReviewState((prevState: any) => ({
      ...prevState,
      praise: value,
    }));
  };

  return (
    <Card className="w-full w-fit border-none">
      <CardHeader className="capitalize font-bold text-2xl sm:text-3xl">
        leave review
      </CardHeader>
      <CardContent className="flex flex-col gap-6 ">
        <section className="flex flex-col gap-1">
          <h1 className="font-semibold capitalize sm:text-lg ">safety</h1>
          <p className="text-primary/20 font-semibold text-sm sm:text-base">
            Lorem ipsum dolor sit ame.
          </p>
          <Rating
            syncRating={rateSafety}
            defaultRate={reviewState.safetyRating}
          />
        </section>

        <section className="flex flex-col gap-1">
          <h1 className="font-semibold capitalize sm:text-lg ">
            communication
          </h1>
          <p className="text-primary/20  font-semibold text-sm sm:text-base">
            Lorem ipsum dolor sit ame.
          </p>
          <Rating
            syncRating={rateCommunication}
            defaultRate={reviewState.cummicationRating}
          />
        </section>
        <section className="flex flex-col gap-1">
          <h1 className="font-semibold capitalize sm:text-lg ">
            would you recomned trausti?
          </h1>
          <p className="text-primary/20  font-semibold text-sm sm:text-base">
            Lorem ipsum dolor sit ame.
          </p>
          <div className="flex gap-12 my-2 items-center">
            <div className="flex gap-2 my-2 items-center">
              <BiSolidDislike
                className={cn(
                  "text-slate-200 w-8 h-8 ",
                  !reviewState.recommended && "text-red-500"
                )}
                onClick={() => recommend(false)}
              />{" "}
              <span className="text-xl">No</span>
            </div>
            <div className="flex gap-2 my-2 items-center">
              <BiSolidLike
                className={cn(
                  "text-slate-200 w-8 h-8 ",
                  reviewState.recommended && "text-green-500"
                )}
                onClick={() => recommend(true)}
              />
              <span className="text-xl">yes</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-1">
          <h1 className="font-semibold capitalize sm:text-lg ">Praise</h1>
          <p className="text-primary/20  font-semibold text-sm sm:text-base">
            Lorem ipsum dolor sit ame.
          </p>
          <div className="flex gap-3">
            <PraiseButton
              value="first"
              praiseValue={reviewState.praise}
              onClickHandler={praise}
            >
              advertise
            </PraiseButton>
            <PraiseButton
              value="second"
              praiseValue={reviewState.praise}
              onClickHandler={praise}
            >
              good
            </PraiseButton>
            <PraiseButton
              value="third"
              praiseValue={reviewState.praise}
              onClickHandler={praise}
            >
              perfect
            </PraiseButton>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
