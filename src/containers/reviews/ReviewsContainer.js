import { connect, dispatch } from 'react-redux';
import fetchReviews from '../../actions/reviews/fetchReviews';
import addReview from '../../actions/reviews/addReview';
import fetchReviewMeta from '../../actions/reviews/fetchReviewMeta';
import Reviews from '../../components/reviews'


var mapStoreToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta,
  product: state.product
});

var mapDispatchToProps = (dispatch) => ({
  handleGetReviews: (productId, count, sort) => {
    dispatch(fetchReviews(productId, count, sort))
  },
  handleGetReviewMeta: () => {
    dispatch(fetchReviewMeta)
  },
  handleAddReview: (productId, count, sort, rating, summary, body, recommend, name, email, photos, characteristics) => {
    dispatch(addReview(productId, count, sort, rating, summary, body, recommend, name, email, photos, characteristics))
  }
});

var ReviewsContainer = connect(mapStoreToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;