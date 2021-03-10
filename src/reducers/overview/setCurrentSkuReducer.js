import Redux from 'redux';

var setCurrentSkuReducer = (state='', action) => {
  if (action.type === 'SET_CURRENT_SKU') {
    return action.payload || ''
  } else {
  return state;
  }
};


export default setCurrentSkuReducer;