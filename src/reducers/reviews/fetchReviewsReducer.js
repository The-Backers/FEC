import Redux from 'redux';



var fetchReviewsReducer = (state={}, action) => {


  if (action.type === 'SHOW_REVIEWS') {


      action.reviews.sort = action.sort;
      return action.reviews || [];

  } else {
    return state;
  }

};

export default fetchReviewsReducer;