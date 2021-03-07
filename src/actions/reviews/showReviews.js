var showReviews = (reviews, count) => {
  return {
  type: 'SHOW_REVIEWS',
  reviews: reviews,
  count: count
}};

export default showReviews