import React from 'react';
import ReactDOM from 'react-dom';
import ReadApp from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReadApp />, document.getElementById('root'));
registerServiceWorker();
