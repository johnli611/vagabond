import React    from 'react';
import ReactDOM from 'react-dom';
import Polyfill from 'babel-polyfill';
import App      from '../app';


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
