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
import createSignup from './components/signup/signup';
import createMyAccount from './containers/my-account/my-account';
import createLogin from './containers/login/login';

// Polyfill for older browsers that do not support ES6 promise.
if (!window.Promise) {
  window.Promise = Promise;
}

let store = createStore(jptvApp);

const App = createApp(React);
const Signup = createSignup(React);
const Login = createLogin(React);
const MyAccount = createMyAccount(React);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <div>
        <Route path="/" component={ App }/>
        <Route path="/signup" component={ Signup } />
        <Route path="/login" component={ Login } />
        <Route path="/my-account" component={ MyAccount } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
