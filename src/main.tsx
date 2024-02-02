import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Stencil from './Stencil.tsx';
import './index.css'
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-textfield';
import '@material/mwc-radio';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Stencil /> */}
    {/* <MyCalendar/> */}
  </React.StrictMode>,
)
