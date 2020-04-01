import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(QUE, DONDE); 
ReactDOM.render(
  <Badges />, 
  container);
