/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';
import inputReducer from './store/reducers/input';
import movementReducer from './store/reducers/movement';
import pickReducer from './store/reducers/pick';
import gameReducer from './store/reducers/game';

WebFont.load({
  google: {
    families: ['Cinzel:400,700', 'Cormorant Garamond:400', 'serif']
  }
});

const dataReducer = combineReducers({
  input: inputReducer,
  movement: movementReducer,
  pick: pickReducer,
  game: gameReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined;
  }

  return dataReducer(state, action);
};

const store = createStore(
  rootReducer,
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
