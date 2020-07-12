import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Food from './Food';
import Routine from './Routine'
import Sunday from './Sunday'
import Monday from './Monday'

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
    
    <Sunday name="piaic bootcamp" />
    <Sunday name="i will learn bootcamp things "/>
    <Sunday  name= "then i will sleep" />
    <Monday  value="Cover everything"/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
