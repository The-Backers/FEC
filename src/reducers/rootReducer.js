import { combineReducers } from 'redux';

// we need to import all reducers here
import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import expandGalleryReducer from './overview/expandGalleryReducer';
import fetchProductReducer from './overview/fetchProductReducer';
import setStylesReducer from './overview/setStyleReducer'

var rootReducer = combineReducers({
  product: fetchProductReducer,
  expand: expandGalleryReducer,
  relatedProducts: fetchRelatedReducer,
  currentStyles: setStylesReducer
})

export default rootReducer;