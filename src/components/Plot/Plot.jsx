import React from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  Hint
} from "react-vis";
import PropTypes from "prop-types";

import calculateRegression from "../../calculations/regression";
import { years } from "../../calculations/dataPrep";

const XMAX = 2014;
function getAlignStyle(align, x, y) {
  return {
    right: 0,
    top: 50 + y
  };
}

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    const renderRegression = () => {
      if (this.props.regression) {
        return (
          <LineSeries
            data={calculateRegression(this.props.data).regressionData}
            color="red"
            animation={"gentle"}
            onNearestX={(value, { index }) =>
              this.setState({
                crosshairValues: [
                  calculateRegression(this.props.data).regressionData[index]
                ]
              })
            }
          />
        );
      }
    };

    return (
      <FlexibleWidthXYPlot
        height={480}
        onMouseLeave={() => this.setState({ crosshairValues: [] })}
        margin={{ left: 50, right: 10, top: 10, bottom: 40 }}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries
          data={this.props.data}
          onNearestX={this._rememberValue}
          animation={"gentle"}
        />
        {value ? (
          <LineSeries
            data={[{ x: value.x, y: value.y }, { x: XMAX, y: value.y }]}
            stroke="black"
          />
        ) : null}
        {value ? (
          <Hint value={value} getAlignStyle={getAlignStyle}>
            <div className="rv-hint__content">
              {`(Year ${value.x}, Marriages: ${value.y})`}
            </div>
          </Hint>
        ) : null}
        {renderRegression()}
        <XAxis top={0} hideTicks tickValues={years} title="X" />
        <XAxis title="Year" tickFormat={v => v} />
        <YAxis title="Number of Marriages" />
        <Crosshair
          values={this.state.crosshairValues}
          style={{
            line: { backgroundColor: "red" }
          }}
        >
          <div className="rv-hint__content" style={{ backgroundColor: "red" }}>
            <p>
              Year:{" "}
              {this.state.crosshairValues[0]
                ? this.state.crosshairValues[0].x
                : []}
            </p>
            <p>
              Marriages:{" "}
              {this.state.crosshairValues[0]
                ? this.state.crosshairValues[0].y
                : []}
            </p>
          </div>
        </Crosshair>
      </FlexibleWidthXYPlot>
    );
  }
}

export { Plot as default };

Plot.PropTypes = {
  data: PropTypes.func,
  regression: PropTypes.bool
};
