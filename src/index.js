import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from "redux-logger"
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './bootstrap.min.css'
import './background.css'
import thunk from 'redux-thunk';

import { reducers } from './Redux/Reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
