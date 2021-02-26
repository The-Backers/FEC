import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentProduct from '../reducers/currentProduct';
import products from '../../sample-data/products/get-productId-styles.json'



var initialSate = {
  currStyle: products.results[1]
};

var store = createStore(currentProduct,
  initialSate,
  applyMiddleware(thunk));

  console.log(store.getState());
  export default store;