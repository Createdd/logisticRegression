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

import regressionData from "./regression";
import { formattedData, years } from "./dataPrep";
import RegressionComponent from "./RegressionComponent";

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
    this.renderRegression = this.renderRegression.bind(this);
    this._rememberValue = this._rememberValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({ value });
  }

  renderRegression = () => {
    if (this.props.regression) {
      return (
        <LineSeries
          data={regressionData}
          color="red"
          animation={"gentle"}
          onNearestX={(value, { index }) =>
            this.setState({
              crosshairValues: [regressionData[index]]
            })
          }
        />
      );
    }
  };

  render() {
    const { value } = this.state;

    return (
      <div className="container">
        <FlexibleWidthXYPlot
          height={400}
          onMouseLeave={() => this.setState({ crosshairValues: [] })}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <MarkSeries
            data={formattedData}
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
          {this.renderRegression()}
          <XAxis top={0} hideTicks tickValues={years} title="X" />
          <XAxis title="Year" tickFormat={v => v} />
          <YAxis title="Number of Marriages" />
          <Crosshair
            values={this.state.crosshairValues}
            style={{
              line: { backgroundColor: "red" },
              box: { backgroundColor: "red" }
            }}
          />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export { Plot as default };