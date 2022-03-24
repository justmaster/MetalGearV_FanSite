import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
