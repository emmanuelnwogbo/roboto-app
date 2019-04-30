import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { searchRobots, requestRobots } from './reducers';

//redux-logger is a middleware that 
//console.logs the state changes in redux
const logger = createLogger();

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)