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
<<<<<<< HEAD
import setCurrentSkuReducer from './overview/setCurrentSkuReducer';
import setQuantityReducer from './overview/setQuantityReducer';

=======
import setOutfitsIndexReducer from './outfits/setOutfitsIndexReducer';
import setRelatedIndexReducer from './outfits/setRelatedIndexReducer';
>>>>>>> f610a03d11407322750994146ae071db3b99582e

var rootReducer = combineReducers({
  selectedSku: setCurrentSkuReducer,
  skus: setSkuReducer,
  product: fetchProductReducer,
  expand: expandGalleryReducer,
  relatedProducts: fetchRelatedReducer,
  currentStyles: setStylesReducer,
  outfits: fetchOutfitReducer,
  currentStyle: setCurrentStyleReducer,
  reviews: fetchReviewsReducer,
  reviewMeta: fetchReviewMetaReducer,
  currentGalleryIndex: setGalleryIndexReducer,
<<<<<<< HEAD
  quantity: setQuantityReducer
=======
  outfitsCarouselIndex: setOutfitsIndexReducer,
  relatedCarouselIndex: setRelatedIndexReducer
>>>>>>> f610a03d11407322750994146ae071db3b99582e
})

export default rootReducer;