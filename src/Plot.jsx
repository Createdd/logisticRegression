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
  { x: 1, y: 10, size: 30 },
  { x: 1.7, y: 12, size: 10 },
  { x: 2, y: 5, size: 1 },
  { x: 3, y: 15, size: 12 },
  { x: 2.5, y: 7, size: 4 }
];

export default class Plot extends React.Component {
  render() {
    return (
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries
          className="mark-series-example"
          sizeRange={[5, 15]}
          data={myData}
        />
        <XAxis title="Year" />
        <YAxis title="Number of Marriages" />
      </XYPlot>
    );
  }
}
