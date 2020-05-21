import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';
import inputReducer from './store/reducers/input';

WebFont.load({
  google: {
    families: ['Cinzel:400,700', 'Cormorant Garamond:400', 'serif']
  }
});

const store = createStore(
  inputReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
