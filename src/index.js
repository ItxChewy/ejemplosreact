import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import MostrarImagen from './components/MostrarImagen';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Car marca="Dacia" modelo="Sandero" aceleracion="21" velocidadmaxima ="180"/>
    < Car marca="Audi" modelo="A7" aceleracion="30" velocidadmaxima ="240"/>
    < Car marca="Golf" modelo="Polo" aceleracion="27" velocidadmaxima ="240"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
