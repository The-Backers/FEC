import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js'
import fetchProductsReducer from '../reducers/overview/fetchProductsReducer.js';
import questionsPartReducer from '../reducers/questionsPartReducer'


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
console.log('asdsad', initialSate.questions)

var dumbReducer = (state={}, action) => {
  if (!action) {
    return state
  }
  return state;
}


// var store = createStore(fetchProductsReducer,
//   initialSate,
//   applyMiddleware(thunk));
var store = createStore (
  rootReducer,
  initialSate,
  applyMiddleware(thunk)
);

console.log(store.getState());
export default store;