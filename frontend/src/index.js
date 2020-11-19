import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './bootstrap.min.css';
import './index.css';
import App from './App';
import Intro from './components/Intro';

ReactDOM.render(
  <Provider store={store}>
    <Intro />
    <App />
  </Provider>,
  document.getElementById('root')
);
