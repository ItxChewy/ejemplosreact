import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import MostrarImagen from './components/MostrarImagen';
import SumarNumeros from './components/SumarNumeros';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MostrarImagen/>
    <SumarNumeros/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
