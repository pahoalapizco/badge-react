import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(QUE, DONDE); 
ReactDOM.render(
  <Badge 
    firstName="Paho" 
    lastName="Alapizco" 
    jobTitle="Project Manager de día, Web Developer de noche"
    twitter="pahoalapizco"  
  />, 
  container);
