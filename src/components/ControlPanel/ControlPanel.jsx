import React from "react";
import PropTypes from "prop-types";

const ControlPanel = props => (
  <div>
    <div className="row">
    <p>Set age limits: </p>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("19")}
      >
        Up to 19 year olds
      </a>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("70+")}
      >
        >70+ year olds
      </a>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("")}
      >
        All ages
      </a>
    </div>
    <div className="row">
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={props.calcRegression}
      >
        Toggle Regression Curve
      </a>
    </div>
  </div>
);

export default ControlPanel;

ControlPanel.PropTypes = {
  switchAge: PropTypes.func
};
