import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentProduct from '../reducers/currentProduct';
import products from '../../sample-data/products/get-productId-styles.json'




var initialSate = {
  // this sets the initial state of our store. We would want to add any initial states we want to render out on our page here.
  currStyle: products.results[1]
};

var store = createStore(currentProduct,
  initialSate,
  applyMiddleware(thunk));

  // this console log allows us to see the current state of the store.
  console.log(store.getState());
  // export default store;