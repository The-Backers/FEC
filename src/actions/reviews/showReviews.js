var showReviews = (reviews, count, sort) => {
  return {
  type: 'SHOW_REVIEWS',
  reviews: reviews,
  count: count,
  sort: sort,
}};

export default showReviews