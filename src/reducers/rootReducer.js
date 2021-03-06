import { combineReducers } from 'redux';

import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import expandGalleryReducer from './overview/expandGalleryReducer';
import fetchProductReducer from './overview/fetchProductReducer';
import fetchOutfitReducer from './outfits/fetchOutfitReducer';
import setStylesReducer from './overview/setStyleReducer'

var rootReducer = combineReducers({
  product: fetchProductReducer,
  expand: expandGalleryReducer,
  relatedProducts: fetchRelatedReducer,
  currentStyles: setStylesReducer,
  outfits: fetchOutfitReducer
})

export default rootReducer;