import Redux from 'redux';
import products from '../../sample-data/products/get-productId-styles.json'

var currentProduct = (state={}, action) => {
  if (action.type === 'CHANGE_STYLE') {
    return action.style || null; //this process acts as set state
  } else {
    return state;
  }

};

export default currentProduct;