import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';





var initialSate = {
  initialLoad: []
};

var store = createStore(rootReducer,
  initialSate,
  applyMiddleware(thunk));

  export default store;