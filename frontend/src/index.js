import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'; //for Redux
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'; //New React Dedux Store

import reducer from './reducers/index'  //for Redux
import App from './components/App'; //Main component

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


//STORE
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
)


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root')

);
registerServiceWorker();
