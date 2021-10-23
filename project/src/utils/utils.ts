export const getRating = (value: number): number => {
  const minRating = Math.floor(value);
  const ratingPercent = (minRating * 100) / 5;
  return ratingPercent;
};
