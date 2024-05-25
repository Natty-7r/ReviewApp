type UserCardProps = { setOpenDialog: Function };

type RatingProps = {
  defaultRate?: number;
  rateBound?: number;
  syncRating: Function;
};

type RateStarProps = {
  rate: number;
  setRating: Function;
  rating: number;
};

type PraiseButtonProps = {
  children: String;
  praiseValue: Praise;
  value: Praise;
  onClickHandler: Function;
};
