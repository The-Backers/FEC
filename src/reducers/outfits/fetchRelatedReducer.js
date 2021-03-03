import Redux from 'redux';

var fetchRelatedReducer = (state={}, action) => {
  if (action.type === 'SHOW_RELATED') {
    return action.relatedProducts || [];
  } else {
    return state;
  }
};

export default fetchRelatedReducer;