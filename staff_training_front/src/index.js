import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Employer from './personals/Employer';
import Lists from './personals/Lists';

export const Context = createContext(null);
console.log('http://localhost:5000/')

ReactDOM.render(
  <Context.Provider value={ {
    employer: new Employer(),
    lists: new Lists()
  }}>
    <App />
  </Context.Provider>,  
  document.getElementById('root')
);

