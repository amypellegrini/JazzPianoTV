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
import createRegister from './components/register/register';
import createLogin from './containers/login/login';

let store = createStore(jptvApp);

const App = createApp(React);
const Register = createRegister(React);
const Login = createLogin(React);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <div>
        <Route path="/" component={ App }/>
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
