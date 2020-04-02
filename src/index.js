import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(QUE, DONDE); 
ReactDOM.render(
  <App />, 
  container);
