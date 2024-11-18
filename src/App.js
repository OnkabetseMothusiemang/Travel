// src/App.js
import React, { useState } from 'react';
import Map from './components/Map';
import AddDestination from './components/AddDestination';

function App() {
  const [destinations, setDestinations] = useState([]);

  const handleAddDestination = (newDestination) => {
    setDestinations([...destinations, newDestination]);
  };

  return (
    <div className="App">
      <h1>Travel Log</h1>
      <AddDestination onAddDestination={handleAddDestination} />
      <Map destinations={destinations} />
    </div>
  );
}

export default App;
