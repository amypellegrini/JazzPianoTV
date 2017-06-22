import '../css/main.css';
import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

const App = createApp(React);

render(
  <App />,
  document.getElementById('root')
);
