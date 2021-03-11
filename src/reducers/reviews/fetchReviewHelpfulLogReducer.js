
import Redux from 'redux';

var fetchReviewHelpfulLogReducer = (state={}, action) => {


  if (action.type === 'UPDATE_HELPFUL') {

      var temp = {}
      temp[action.reviewId] = true
      var newState = {...state, ...temp}
      return newState;

  } else {
    return state;
  }

};

export default fetchReviewHelpfulLogReducer;