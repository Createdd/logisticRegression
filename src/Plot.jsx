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

let data1534 = [];
let data3554 = [];
let data55100 = [];

for (let i = 0; i < data.data.length / 3; i++) {
  let element = data.data[i];
  data1534.push({
    x: element.REF_YEAR,
    y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
  });
}

console.warn(data1534);
for (let j = 0; j < data1534.length; j++) {
  for (let k = j + 1; k < data1534.length; k++) {
    if (data1534[j].x === data1534[k].x) {
      data1534[j] = { x: data1534[j].x, y: data1534[j].y + data1534[k].y };
      data1534.splice(k, 1);
    }
  }
}

console.log(data1534.map(el => el.x));
console.log(data1534);

// data.data.forEach(element => {
//   if (element.AGE_AT_MARRIAGE === "15 to 19 years old") {
//     data1534.push({
//       x: element.REF_YEAR,
//       y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
//     });
//   }
// });

// console.log(data.data.length);

// const names = data.data.map(el => el.AGE_AT_MARRIAGE);
// const uniqueArray = names.filter(function(item, pos) {
//   return names.indexOf(item) == pos;
// })
// console.log(uniqueArray);

const years = [];
data1534.map(el => {
  years.push(el.x);
});

export default class Plot extends React.Component {
  render() {
    return (
      <XYPlot width={800} height={800}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries className="mark-series-example" data={data1534} />
        <XAxis top={0} hideTicks tickValues={years} title="X" />
        <XAxis title="Year" tickFormat={v => v} />
        <YAxis title="Number of Marriages" />
      </XYPlot>
    );
  }
}
