import * as data from "../../data/Marriages.json";

const years = [];
let preparedData = [];
let temp = {};
let obj = null;
let formattedData = [];

const prepareData = () => {
  for (let i = 0; i < data.data.length; i++) {
    let element = data.data[i];
    preparedData.push({
      x: element.REF_YEAR,
      y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
    });
  }
};

const groupData = () => {
  for (var i = 0; i < preparedData.length; i++) {
    obj = preparedData[i];

    if (!temp[obj.x]) {
      temp[obj.x] = obj;
    } else {
      temp[obj.x].y += obj.y;
    }
  }
  for (var prop in temp) formattedData.push(temp[prop]);
};

const calcYears = () => {
  formattedData.map(el => {
    return years.push(el.x);
  });
};


prepareData();
groupData();
calcYears();

export { formattedData, preparedData, years };
