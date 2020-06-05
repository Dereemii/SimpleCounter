import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';

var contador = 0;

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;

setInterval(()=>{

  numero1 = (Math.floor(contador))%10
  numero2 = (Math.floor(contador/10))%10
  numero3 = (Math.floor(contador/100))%10
  numero4 = (Math.floor(contador/1000))%10
  numero5 = (Math.floor(contador/10000))%10



  contador++

  ReactDOM.render(
    <React.StrictMode>
      <App num1={numero1} num2={numero2} num3={numero3} num4={numero4} num5={numero5}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
},1000);



