import React, { useState } from 'react';
import './App.css';

// Component imports
import JammerHeading from './components/jammerHeading/jammerHeading';
import SearchBarContainer from './components/searchBar/searchBarContainer';

function App() {
  return (
    <div className="App">
      <JammerHeading/>
      <SearchBarContainer/>
    </div>
  );
}

export default App;
