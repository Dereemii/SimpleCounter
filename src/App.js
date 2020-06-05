import React from 'react';
import './App.css';

function App(props) {
  return (
  <div className="container">
    <div className="row"> 
    <div class="col-2 rounded m-1 bg-dark border border-info">
      <div><i class="far fa-clock"></i></div>
      </div>
    <div class="col rounded m-1 bg-dark border border-info">{props.num5}
      </div>
    <div class="col rounded m-1 bg-dark border border-info">{props.num4}
      </div>
    <div class="col rounded m-1 bg-dark border border-info">{props.num3}
      </div>
    <div class="col rounded m-1 bg-dark border border-info">{props.num2}
      </div>
    <div class="col rounded m-1 bg-dark border border-info">{props.num1}
     </div>
    </div>
  </div>
  
  );
}



export default App;

