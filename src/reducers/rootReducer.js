import { combineReducers } from 'redux';
//import currentProduct from './currentProduct';

// we need to import all reducers here
import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import expandGalleryReducer from './overview/expandGalleryReducer';

var rootReducer = combineReducers({
  expand: expandGalleryReducer,
  relatedProducts: fetchRelatedReducer
})

export default rootReducer;