import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Employer from './personals/Employer';
import Workers from './personals/Workers';

export const Context = createContext(null);
console.log('http://localhost:5000/')

ReactDOM.render(
  <Context.Provider value={ {
    employer: new Employer(),
    worker: new Workers()
  }}>
    <App />
  </Context.Provider>,  
  document.getElementById('root')
);

