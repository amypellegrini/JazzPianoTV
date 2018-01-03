import React from 'react';
import { render } from 'react-dom';

import '../css/main.css';
import createApp from './App';

const App = createApp(React);

render(
  <App />,
  document.getElementById('root')
);
