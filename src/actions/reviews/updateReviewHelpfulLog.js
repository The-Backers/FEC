var updateReviewHelpfulLog = (reviewId) => {
  console.log(reviewId, 'update-log')
  return {
  type: 'UPDATE_HELPFUL',
  reviewId: reviewId
}};

export default updateReviewHelpfulLog;