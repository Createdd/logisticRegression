import React from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Crosshair
} from "react-vis";

import regressionData from "./regression";
import { formattedData, years } from "./dataPrep";
import RegressionComponent from "./RegressionComponent";

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
    this.renderRegression = this.renderRegression.bind(this);
  }

  renderRegression = () => {
    if (this.props.regression) {
      return (
        <LineSeries
          data={regressionData}
          color="red"
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
    return (
      <div className="container">
        <FlexibleWidthXYPlot
          height={400}
          onMouseLeave={() => this.setState({ crosshairValues: [] })}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <MarkSeries className="mark-series-example" data={formattedData} />
          {this.renderRegression()}
          <XAxis top={0} hideTicks tickValues={years} title="X" />
          <XAxis title="Year" tickFormat={v => v} />
          <YAxis title="Number of Marriages" />
          <Crosshair
            values={this.state.crosshairValues}
            style={{line:{backgroundColor: 'red'}}}
          />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export { Plot as default };
