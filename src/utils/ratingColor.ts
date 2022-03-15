export function ratingColor(rating: number) {
  rating = Math.floor(rating / 10);
  if (rating <= 5) return "#ff0000";
  if (rating > 5 && rating < 7) return "#ffd400";
  if (rating >= 7) return "#2cff00";
}
