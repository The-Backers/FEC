import Redux from 'redux';



var fetchReviewsReducer = (state={}, action) => {


  if (action.type === 'SHOW_REVIEWS') {

    if (Object.keys(state).length !== 0) {

      console.log(action.reviews.results.length, state.results.length)
      if (action.reviews.results.length < 2) {

          action.reviews.done = 'none';
      }
    }
      action.reviews.sort = action.sort;
      action.reviews.filter = action.filter;
      return action.reviews || [];

  } else {
    return state;
  }

};

export default fetchReviewsReducer;