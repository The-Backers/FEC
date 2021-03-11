var showReviews = (reviews, count, sort, filter) => {
  return {
  type: 'SHOW_REVIEWS',
  reviews: reviews,
  count: count,
  sort: sort,
  filter: filter
}};

export default showReviews