import updateReviewHelpfulLog from './updateReviewHelpfulLog.js';
import {store} from '../../store/store.js';



var sendReviewHelpfulLog = (reviewId) => {

  return (dispatch) => {
    dispatch(updateReviewHelpfulLog(reviewId))
  }
}


export default sendReviewHelpfulLog;