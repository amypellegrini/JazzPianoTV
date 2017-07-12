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

const App = createApp(React);
let store = createStore(jptvApp);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route exact path="/" component={ App }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
