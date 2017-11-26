import React from "react";
import {
  XYPlot,
  FlexibleXYPlot,
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

// console.warn(data1534);
// for (let j = 0; j < data1534.length+1; j++) {
//   for (let k = j + 1; k < data1534.length; k++) {
//     if (data1534[j].x === data1534[k].x) {
//       data1534[j] = { x: data1534[j].x, y: data1534[j].y + data1534[k].y };
//       data1534.splice(k, 1);
//     }
//   }
// }

var temp = {};
var obj = null;
for (var i = 0; i < data1534.length; i++) {
  obj = data1534[i];

  if (!temp[obj.x]) {
    temp[obj.x] = obj;
  } else {
    temp[obj.x].y += obj.y;
  }
}
let result1534 = [];
for (var prop in temp) result1534.push(temp[prop]);

console.log(result1534.map(el => el.x));

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
result1534.map(el => {
  years.push(el.x);
});

export default class Plot extends React.Component {
  render() {
    return (
      <FlexibleXYPlot  width={1000} height={400}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries className="mark-series-example" data={result1534} />
        <XAxis top={0} hideTicks tickValues={years} title="X" />
        <XAxis title="Year" tickFormat={v => v} />
        <YAxis title="Number of Marriages" />
      </FlexibleXYPlot>
    );
  }
}
