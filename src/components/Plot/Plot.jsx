import React from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import { formattedData, years } from "./dataPrep";

export default class Plot extends React.Component {
  render() {
    return (
      <div className="container">
        <FlexibleWidthXYPlot height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <MarkSeries className="mark-series-example" data={formattedData} />
          <XAxis top={0} hideTicks tickValues={years} title="X" />
          <XAxis title="Year" tickFormat={v => v} />
          <YAxis title="Number of Marriages" />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}
