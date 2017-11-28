import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import "materialize-css/dist/css/materialize.min.css";

import Plot from "./components/Plot";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regression: false
    };
    this.calcRegression = this.calcRegression.bind(this);
  }

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
        <Plot regression={this.state.regression} />
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
