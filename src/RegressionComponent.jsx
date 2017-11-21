import React from "react";
import LogisticRegression from "ml-logistic-regression";

const RegressionComponent = () => {
  const { Matrix } = require("ml-matrix");

  // our training set (X,Y)
  var X = new Matrix([
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [2, 0],
    [2, 1],
    [2, -1],
    [3, 2],
    [0, 4],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 4],
    [1, 10],
    [1, 12],
    [2, 10],
    [2, 11],
    [2, 14],
    [3, 11]
  ]);
  var Y = Matrix.columnVector([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2
  ]);

  // the test set (Xtest, Ytest)
  var Xtest = new Matrix([
    [0, -2],
    [1, 0.5],
    [1.5, -1],
    [1, 2.5],
    [2, 3.5],
    [1.5, 4],
    [1, 10.5],
    [2.5, 10.5],
    [2, 11.5]
  ]);
  var Ytest = Matrix.columnVector([0, 0, 0, 1, 1, 1, 2, 2, 2]);

  // we will train our model
  var logreg = new LogisticRegression({ numSteps: 1000, learningRate: 5e-3 });
  logreg.train(X, Y);
  console.log(logreg.train(X, Y));

  // we try to predict the test set
  var finalResults = logreg.predict(Xtest);
  // Now, you can compare finalResults with the Ytest, which is what you wanted to have.

  console.log(finalResults);
  console.log(Ytest);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Regression Result</h2>
            </th>
            <th>
              <h2>Y-Test</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{finalResults}</p>
            </td>
            <td>
              <p>{Ytest}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegressionComponent;
