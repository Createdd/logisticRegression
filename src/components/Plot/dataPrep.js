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
  return years.push(el.x);
});

export { formattedData, preparedData, years };
