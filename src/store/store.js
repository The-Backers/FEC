import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import styles from '../../sample-data/products/get-productId-styles.json';
import product from '../../sample-data/products/get-productId.json';


var initialSate = {
  product: product,
  currentStyles: styles.results,
  relatedProducts: [],
  outfits: [],
  reviews: [],
  reviewMeta: {},
  sessionId: '',
  questions: [],
  answers: [],
  expand: false
};

var store = createStore (
  rootReducer,
  initialSate,
  applyMiddleware(thunk)
);



export default store;
export {initialSate};