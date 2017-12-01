import regression from "regression";

const calculateRegression = formattedData => {
  let regressionData = [];
  regressionData = formattedData.map(el => {
    return [parseFloat(el.x), el.y];
  });

  const result = regression.linear(regressionData);
  const gradient = result.equation[0];
  const yIntercept = result.equation[1];

  console.log(gradient, yIntercept);

  regressionData = result.points.map(el => {
    return {
      x: el[0],
      y: el[1]
    };
  });
  return {regressionData, gradient, yIntercept};
};

export { calculateRegression as default };
