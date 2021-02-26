import Redux from 'redux';


var fetchProductsReducer = (state={}, action) => {
  console.log('this is the action payload: ', action.product)
  if (action.type === 'SHOW_PRODUCT') {
    return Object.assign({}, state, {
      product: action.product
    })
  } else {
    return state;
  }

};

export default fetchProductsReducer;