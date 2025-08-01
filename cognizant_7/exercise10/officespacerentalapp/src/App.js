import React from 'react';
import './App.css';
import sr from ''; // import the image

function App() {
  const element = "Office Space";
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Conditional class for rent color
  const rentClass = ItemName.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      <img src={sr} width="25%" height="25%" alt="Office Space" />
      <h2>Name: {ItemName.Name}</h2>
      <h3 className={rentClass}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
