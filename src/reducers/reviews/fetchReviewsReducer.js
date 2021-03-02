import Redux from 'redux';



var fetchReviewsReducer = (state={}, action) => {


  if (action.type === 'SHOW_REVIEWS') {
    return action.reviews || [];
  } else {
    return state;
  }

};

export default fetchReviewsReducer;