import Redux from 'redux';

var setStylesReducer = (state=[], action) => {
  if (action.type === 'SET_STYLES') {
    return action.payload || []
  } else {
  return state;
  }
};


export default setStylesReducer;