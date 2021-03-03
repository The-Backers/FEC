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
  answers: []
};

var store = createStore (
  rootReducer,
  initialSate,
  applyMiddleware(thunk)
);

console.log(store.getState());
export default store;