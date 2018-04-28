import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'; //for Redux
import reducer from './reducers'  //for Redux
import { Provider } from 'react-redux'; //New React Dedux Store

import ReadApp from './components/App'; //Main component
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result =  next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
)



ReactDOM.render(
  <Provider store={store}>
      <ReadApp  />
  </Provider>
, document.getElementById('root')
);
registerServiceWorker();
