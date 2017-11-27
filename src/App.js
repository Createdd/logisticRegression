import React, { Component } from 'react';
import "../node_modules/react-vis/dist/style.css";
import 'materialize-css/dist/css/materialize.min.css';

import Plot from './components/Plot';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Plot />
      </div>
    );
  }
}

export default App;
