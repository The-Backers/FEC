import Redux from 'redux';

var setRelatedIndexReducer = (state = 0, action) => {
  if (action.type === 'SET_RELATED_INDEX') {
    return action.index || 0
  } else {
  return state;
  }
};

export default setRelatedIndexReducer;