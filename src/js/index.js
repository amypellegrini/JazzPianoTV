import React from 'react';
import { hydrate } from 'react-dom';

import '../css/main.css';
import createApp from './App';

const App = createApp(React);

hydrate(
  <App />,
  document.getElementById('root')
);
