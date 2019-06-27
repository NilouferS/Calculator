import React from 'react';
import Gas from './Gas';
import './App.css';
import Electricity from './Electricity';

function App() {
  return(
    <div>
      <h1>BILL CALCULATOR</h1>
      <Gas currentUnit={0}></Gas>
      <Electricity current={0}></Electricity>
    </div>
    
  );
}

export default App;
