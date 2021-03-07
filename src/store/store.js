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
  product: product,
  currentStyles: styles.results,
  relatedProducts: [],
  currentStyle: styles.results[0],
  outfits: [],
  reviews: [],
  reviewMeta: {},
  expand: false
};

export const store = createStore (
  persistedReducer,
  initialSate,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
