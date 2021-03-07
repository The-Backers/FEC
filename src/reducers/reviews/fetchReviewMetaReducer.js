import Redux from 'redux';



var fetchReviewMetaReducer = (state={}, action) => {


  if (action.type === 'SHOW_REVIEW_META') {
    return action.reviewMeta || {};
  } else {
    return state;
  }

};

export default fetchReviewMetaReducer;