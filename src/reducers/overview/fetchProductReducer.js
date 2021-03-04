import Redux from 'redux';



var fetchProductReducer = (state={}, action) => {
  if (action.type === 'SET_PRODUCT') {
    return action.payload
  } else {
  return state;
  }
};


export default fetchProductReducer;