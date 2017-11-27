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
import { formattedData, years } from "./dataPrep";
import regressionData from "../../regression";

// const numbered = formattedData.map(el => {
//   return { x: parseFloat(el.x), y: el.y };
// });
// console.log(numbered);

class Plot extends React.Component {
  render() {
    return (
      <div className="container">
        <FlexibleWidthXYPlot height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <MarkSeries className="mark-series-example" data={formattedData} />
          <LineSeries data={regressionData} color="red" />
          <XAxis top={0} hideTicks tickValues={years} title="X" />
          <XAxis title="Year" tickFormat={v => v} />
          <YAxis title="Number of Marriages" />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export { Plot as default };
