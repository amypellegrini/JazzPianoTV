/**
 * @todo Refactor this so we can fake history and router in testing.
 */

import Promise from 'promise-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  browserHistory } from 'react-router-dom';

import '../css/main.css';
import jptvApp from './reducers/jptv-app';
import createApp from './App';

// Polyfill for older browsers that do not support ES6 promise.
if (!window.Promise) {
  window.Promise = Promise;
}

let store = createStore(jptvApp);

const App = createApp(React);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <div>
        <Route path="/" component={ App }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
