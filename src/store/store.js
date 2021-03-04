import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js'

var initialSate = {
  product: {},
  currentStyles: [],
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