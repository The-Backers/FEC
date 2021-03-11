import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer.js';

const persistConfig = {
  key: 'root',
  storage, // not sure about this one!
  whitelist: ['outfits', 'reviewHelpfulLog']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

var initialSate = {
  product: {},
  currentStyles: [],
  relatedProducts: [],
  currentStyle: {},
  outfits: [],
  reviews: [],
  reviewMeta: {},
  reviewHelpfulLog: {},
  expand: false,
  skus: [],
  quantity: [],
  currentGalleryIndex: 0,
  selectedSku: 0,
  outfitsCarouselIndex: 0,
  relatedCarouselIndex: 0,
  changePage: true,

};

export const store = createStore (
  persistedReducer,
  initialSate,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
