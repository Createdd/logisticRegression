import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import "materialize-css/dist/css/materialize.min.css";

import { prepareData } from "./components/Plot/dataPrep";
import calculateRegression from "./components/Plot/regression";
import Plot from "./components/Plot";
import ControlPanel from "./components/ControlPanel";
import Footer from "./components/Footer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regression: false,
      age: ""
    };
    this.renderRegression = this.renderRegression.bind(this);
    this.switchAge = this.switchAge.bind(this);
  }

  switchAge = arg => {
    this.setState({ age: arg });
  };

  renderRegression = () => {
    if (this.state.regression) {
      this.setState({ regression: false });
    } else {
      this.setState({ regression: true });
    }
  };

  renderRegressionInfo = () => {
    if (this.state.regression) {
      return calculateRegression(prepareData(this.state.age)).gradient;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h5>Marriages in Salzburg over time</h5>
        <Plot
          regression={this.state.regression}
          data={prepareData(this.state.age)}
        />
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large waves-effect waves-light red">
            {this.renderRegressionInfo()}
          </a>
        </div>

        <ControlPanel
          switchAge={arg => this.switchAge(arg)}
          calcRegression={this.renderRegression}
        />
        {this.state.regression ? (
          <div>
            Prediction for 2020:{" "}
            {calculateRegression(prepareData(this.state.age)).prediction[1]}
          </div>
        ) : (
          ""
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
