import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import "materialize-css/dist/css/materialize.min.css";

import { prepareData } from "./components/Plot/dataPrep";
import Plot from "./components/Plot";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regression: false,
      age: '',
    };
    this.calcRegression = this.calcRegression.bind(this);
    this.switchAge = this.switchAge.bind(this);
  }

  switchAge = () => {
    this.setState({ age: '19' });
    // prepareData(this.state.age);
  };

  switchAge2 = () => {
    this.setState({ age: '70+' });
    // prepareData(this.state.age);
  };

  calcRegression = () => {
    if (this.state.regression) {
      this.setState({ regression: false });
    } else {
      this.setState({ regression: true });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Plot regression={this.state.regression} data={prepareData(this.state.age)} />
        <a
          className="waves-effect waves-light btn teal lighten-1"
          onClick={this.switchAge}
        >
          Up to 19 year olds
        </a>
        <a
          className="waves-effect waves-light btn teal lighten-1"
          onClick={this.switchAge2}
        >
          From 70+ year olds
        </a>
        <a
          className="waves-effect waves-light btn red lighten-1"
          onClick={this.calcRegression}
        >
          Toggle Regression Curve
        </a>
      </div>
    );
  }
}

export default App;
