import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import {store, persistor} from './store/store.js';
import TOKEN from '../config.js'
import handleProductSelect from './actions/handleProductSelect';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('app'), () => handleProductSelect('11005')(store.dispatch)
);