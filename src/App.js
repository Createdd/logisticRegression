import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import "materialize-css/dist/css/materialize.min.css";

import { prepareData } from "./components/Plot/dataPrep";
import Plot from "./components/Plot";
import ControlPanel from "./components/ControlPanel";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regression: false,
      age: ""
    };
    this.calcRegression = this.calcRegression.bind(this);
    this.switchAge = this.switchAge.bind(this);
  }

  switchAge = (arg) => {
    this.setState({ age: arg });
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
        <Plot
          regression={this.state.regression}
          data={prepareData(this.state.age)}
        />
        <ControlPanel
          switchAge={(arg)=> this.switchAge(arg)}
          calcRegression={this.calcRegression}
        />
      </div>
    );
  }
}

export default App;
