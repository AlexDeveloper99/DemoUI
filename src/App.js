import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained" color="primary" href="#contained-buttons">
              Link
          </Button>
      </header>
    </div>
  );
}

export default App;
