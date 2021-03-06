import { combineReducers } from 'redux';
//import currentProduct from './currentProduct';

// we need to import all reducers here
import questionsPratReducer from './questionsPartReducer';
// import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import fetchProductsReducer from './overview/fetchProductsReducer';

//lin

var rootReducer = combineReducers({
  product: fetchProductsReducer,
  // relatedProducts: fetchRelatedReducer,
  questionsPart: questionsPratReducer
})
export default rootReducer;