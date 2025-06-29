import React from 'react';
import './App.css';

// Component imports
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const mockData = [
    {
      name: "greg",
      artist: "greg",
      album: "greg",
      id: "greg",
      key: "greg"
    },
    {
      name: "alice",
      artist: "alice",
      album: "alice",
      id: "alice",
      key: "alice"
    },
    {
      name: "alice",
      artist: "alice",
      album: "alice",
      id: "alice",
      key: "alice"
    }
  ]
  
  const search = () => {

  };
  
  return (
    <div>
      <h1>Jammer</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <SearchResults searchResults={mockData}/>
      </div>

    </div>
  );
}

export default App;
