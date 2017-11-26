import React from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import * as data from "../../data/Marriages.json";


let preparedData = [];
for (let i = 0; i < data.data.length; i++) {
  let element = data.data[i];
  preparedData.push({
    x: element.REF_YEAR,
    y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
  });
}

let temp = {};
let obj = null;
let formattedData = [];
for (var i = 0; i < preparedData.length; i++) {
  obj = preparedData[i];

  if (!temp[obj.x]) {
    temp[obj.x] = obj;
  } else {
    temp[obj.x].y += obj.y;
  }
}

for (var prop in temp) formattedData.push(temp[prop]);

const years = [];
formattedData.map(el => {
  years.push(el.x);
});

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
