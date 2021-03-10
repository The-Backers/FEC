import Redux from 'redux';

var setQuantityReducer = (state=[], action) => {
  if (action.type === 'SET_QUANTITY') {
    return action.payload || []
  } else {
  return state;
  }
};


export default setQuantityReducer;