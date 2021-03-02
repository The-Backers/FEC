import { connect, dispatch } from 'react-redux';
import fetchReviews from '../../actions/reviews/fetchReviews';
import Reviews from '../../components/reviews'


var mapStoreToProps = (state) => ({
  reviews: state.reviews,
});

var mapDispatchToProps = (dispatch) => ({
  handleGetReviews: () => {
    dispatch(fetchReviews)
  }
});

var ReviewsContainer = connect(mapStoreToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;