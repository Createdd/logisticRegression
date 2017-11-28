import React from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis
} from "react-vis";

import regressionData from "./regression";
import { formattedData, years } from "./dataPrep";
import RegressionComponent from "./RegressionComponent";

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.renderRegression = this.renderRegression.bind(this);
  }

  renderRegression = () => {
    if (this.props.regression) {
      return <LineSeries data={regressionData} color="red" />;
    }
  };

  render() {
    return (
      <div className="container">
        <FlexibleWidthXYPlot height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <MarkSeries className="mark-series-example" data={formattedData} />
          {this.renderRegression()}
          <XAxis top={0} hideTicks tickValues={years} title="X" />
          <XAxis title="Year" tickFormat={v => v} />
          <YAxis title="Number of Marriages" />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export { Plot as default };
