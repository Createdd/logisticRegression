import regression from "regression";
import { formattedData } from "./components/Plot";

let regressionData = [];
regressionData = formattedData.map(el => {
  return [parseFloat(el.x), el.y];
});

const result = regression.linear(regressionData);
// const gradient = result.equation[0];
// const yIntercept = result.equation[1];

regressionData = result.points.map(el =>{
  return {
    x: el[0],
    y: el[1],
  }
});

console.log(regressionData);
export { regressionData as default, result };
