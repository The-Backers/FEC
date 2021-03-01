import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/rootReducer.js'
import fetchProductsReducer from '../reducers/overview/fetchProductsReducer.js';


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

var dumbReducer = (state={}, action) => {
  if (!action) {
    return state
  }
  return state;
}


var store = createStore(fetchProductsReducer,
  initialSate,
  applyMiddleware(thunk));

  console.log(store.getState());
  export default store;