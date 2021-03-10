import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer.js';
import styles from '../../sample-data/products/get-productId-styles.json';
import product from '../../sample-data/products/get-productId.json';

const persistConfig = {
  key: 'root',
  storage, // not sure about this one!
  whitelist: ['outfits']
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
  expand: false,
  skus: [],
  quantity: [],
  currentGalleryIndex: 0,
  selectedSku: 0,

};

export const store = createStore (
  persistedReducer,
  initialSate,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
