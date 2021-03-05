import { combineReducers } from 'redux';
//import currentProduct from './currentProduct';

// we need to import all reducers here
import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import fetchProductsReducer from './overview/fetchProductsReducer';

//lin
import questionsPratReducer from './questions/questionsPratReducer';

var rootReducer = combineReducers({
  product: fetchProductsReducer,
  relatedProducts: fetchRelatedReducer,
  questionsPart: questionsPratReducer
})

export default rootReducer;