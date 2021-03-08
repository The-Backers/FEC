import Redux from 'redux';

var setSkuReducer = (state={}, action) => {
  if (action.type === 'SET_SKU') {
    return action.payload || {}
  } else {
  return state;
  }
};


export default setSkuReducer;