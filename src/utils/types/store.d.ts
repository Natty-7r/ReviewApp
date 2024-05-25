type ReviewState = {
  safetyRating: number;
  cummicationRating: number;
  recommended: boolean;
  praise: Praise;
};

type Praise = "first" | "second" | "third";
