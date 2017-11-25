import React from "react";
import {
  XYPlot,
  MarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  XAxis,
  YAxis
} from "react-vis";

const myData = [
  { x: 1, y: 10 },
  { x: 1.7, y: 12 },
  { x: 2, y: 5 },
  { x: 3, y: 15 },
  { x: 2.5, y: 7 }
];

export default class Plot extends React.Component {
  render() {
    return (
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries
          className="mark-series-example"
          data={myData}
        />
        <XAxis title="Year" />
        <YAxis title="Number of Marriages" />
      </XYPlot>
    );
  }
}
