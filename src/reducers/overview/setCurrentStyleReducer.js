import Redux from 'redux';

var setCurrentStyleReducer = (state={}, action) => {
  if (action.type === 'SET_STYLE') {
    return action.payload || {}
  } else {
  return state;
  }
};


export default setCurrentStyleReducer;