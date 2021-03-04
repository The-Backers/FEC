import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import store from './store/store.js';
import TOKEN from '../config.js'
import handleProductSelect from './actions/handleProductSelect';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('app'), () => handleProductSelect('11007')(store.dispatch)
);