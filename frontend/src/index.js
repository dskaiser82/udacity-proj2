import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux'; //for Redux


import ReadApp from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReadApp />, document.getElementById('root'));
registerServiceWorker();
