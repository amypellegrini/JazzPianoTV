import '../css/main.css';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import jptvApp from './reducers/jptv-app';
import createApp from './App';

const App = createApp(React);
let store = createStore(jptvApp);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
