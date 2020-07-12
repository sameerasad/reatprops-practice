import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Food from './Food';
import Routine from './Routine'
import Sunday from './Sunday'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routine  personName="Sherry"/>
    <br/>
    
    <Food foodName="biryani"/>
    <br/>
    
    
    <Food foodName="raita"/>
    <br/>
    <u></u>
    <Food foodName="sweet"/>
    <Sunday />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
