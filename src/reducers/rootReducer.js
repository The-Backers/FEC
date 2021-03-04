import { combineReducers } from 'redux';
//import currentProduct from './currentProduct';

// we need to import all reducers here
import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import fetchProductsReducer from './overview/fetchProductsReducer';
import fetchReviewsReducer from './reviews/fetchReviewsReducer';
import fetchReviewMetaReducer from './reviews/fetchReviewMetaReducer';

var rootReducer = combineReducers({
  product: fetchProductsReducer,
  relatedProducts: fetchRelatedReducer,
  reviews: fetchReviewsReducer,
  reviewMeta: fetchReviewMetaReducer
})

export default rootReducer;