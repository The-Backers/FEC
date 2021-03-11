import {connect, dispatch} from 'react-redux';

import sendReviewHelpfulLog from '../../actions/reviews/sendReviewHelpfulLog';



var mapStoreToProps = () => ({
  helpfulLog: store.getState().helpfulLog,
  test: 'hi'
});

var mapDispatchToProps = (dispatch) => ({
  handleHelpfulLog: (reviewId) => {
    console.log(dispatch)
    dispatch(sendReviewHelpfulLog(reviewId))
  }
});

var ReviewTileContainer = connect(mapStoreToProps, mapDispatchToProps)(ReviewTile);

export default ReviewTileContainer;