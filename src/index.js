import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import AppMain from './AppMain';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <React.StrictMode>
      <AppMain />
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();
