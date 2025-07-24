import React from 'react';
import './App.css';
import CalculateScore from './CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Score Calculator App</h1>
      <CalculateScore 
        Name={"Steeve Mann"} 
        School={"DNV Public School"} 
        total={284} 
        goal={3} 
      />
    </div>
  );
}

export default App;
