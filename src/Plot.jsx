import React from "react";
import {
  XYPlot,
  MarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import * as data from "./data/Marriages.json";

let preparedData = [];

data.data.forEach(element => {
  preparedData.push({x:element.REF_YEAR, y:element.values[0]['WIVES']});
});
console.log(preparedData);

const years = [];
preparedData.map(el => {years.push(el.x)});

console.warn(years);


export default class Plot extends React.Component {
  render() {
    return (
      <XYPlot width={800} height={800}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries className="mark-series-example" data={preparedData} />
        <XAxis top={0} hideTicks tickValues={years} title="X"/>
        <XAxis title="Year" tickFormat={v => v}/>
        <YAxis title="Number of Marriages" />
      </XYPlot>
    );
  }
}
