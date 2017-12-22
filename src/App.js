import React, { Component } from 'react';
import './App.css';
import Main from './views/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Welcome to Learning!</h1>
        </header>
        <div>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
