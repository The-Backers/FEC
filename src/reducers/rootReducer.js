import { combineReducers } from 'redux';

import fetchRelatedReducer from './outfits/fetchRelatedReducer';
import expandGalleryReducer from './overview/expandGalleryReducer';
import fetchProductReducer from './overview/fetchProductReducer';
import fetchOutfitReducer from './outfits/fetchOutfitReducer';
import setStylesReducer from './overview/setStyleReducer';
import setCurrentStyleReducer from './overview/setCurrentStyleReducer';
import fetchReviewsReducer from './reviews/fetchReviewsReducer';
import fetchReviewMetaReducer from './reviews/fetchReviewMetaReducer';
import setSkuReducer from './overview/setSkuReducer';
import setGalleryIndexReducer from './overview/setGalleryIndexReducer';
import setOutfitsIndexReducer from './outfits/setOutfitsIndexReducer';
import setRelatedIndexReducer from './outfits/setRelatedIndexReducer';
import fetchReviewHelpfulLogReducer from './reviews/fetchReviewHelpfulLogReducer';

var rootReducer = combineReducers({
  skus: setSkuReducer,
  product: fetchProductReducer,
  expand: expandGalleryReducer,
  relatedProducts: fetchRelatedReducer,
  currentStyles: setStylesReducer,
  outfits: fetchOutfitReducer,
  currentStyle: setCurrentStyleReducer,
  reviews: fetchReviewsReducer,
  reviewMeta: fetchReviewMetaReducer,
  reviewHelpfulLog: fetchReviewHelpfulLogReducer,
  currentGalleryIndex: setGalleryIndexReducer,
  outfitsCarouselIndex: setOutfitsIndexReducer,
  relatedCarouselIndex: setRelatedIndexReducer
})

export default rootReducer;