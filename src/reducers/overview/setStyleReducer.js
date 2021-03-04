import Redux from 'redux';

var setStyleReducer = (state=[], action) => {
  if (action.type === 'SET_STYLES') {
    return action.payload || []
  } else {
  return state;
  }
};


export default setStyleReducer;