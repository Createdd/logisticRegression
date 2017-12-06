import * as data from "../data/Marriages.json";

const years = [];
let preparedData = [];
let temp = {};
let obj = null;
let formattedData = [];

const prepareData = a => {
  preparedData = [];
  formattedData = [];
  temp = {};
  obj = null;
  for (let i = 0; i < data.data.length; i++) {
    let element = data.data[i];
    if (a === "19") {
      if (data.data[i].AGE_AT_MARRIAGE === "15 to 19 years old") {
        preparedData.push({
          x: element.REF_YEAR,
          y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
        });
      }
    } else if (a === "70+") {
      if (data.data[i].AGE_AT_MARRIAGE === "70 plus years old") {
        preparedData.push({
          x: element.REF_YEAR,
          y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
        });
      }
    } else {
      preparedData.push({
        x: element.REF_YEAR,
        y: element.values[0]["WIVES"] + element.values[0]["HUSBANDS"]
      });
    }
  }
  groupData();
  return formattedData;
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

export { prepareData, years };
