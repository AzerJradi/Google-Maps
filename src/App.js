import React from 'react';
import './App.css';
import MapContainer from './MapContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps: An amazing tool used every day!</h1>
      </header>
      <main>
        <MapContainer />
      </main>
    </div>
  );
}

export default App;
