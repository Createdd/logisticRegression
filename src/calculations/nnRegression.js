import brain from "brain.js/dist";
import { prepareData } from "./dataPrep";

let test = prepareData('70+');
let newA = [];
let newB = [];

test.map((el) => {return (newA.push(el.x), newB.push(el.y))});
console.log(newA, newB);

const calcNN = () => {
  //create a simple feed forward neural network with backpropagation
  var net = new brain.NeuralNetwork();

  // net.train([
  //   { input: [0, 0], output: [0] },
  //   { input: [0, 1], output: [1] },
  //   { input: [1, 0], output: [1] },
  //   { input: [1, 1], output: [0] }
  // ]);
  net.train([
    { input: [1], output: [2] },
    { input: [2], output: [3] },
    { input: [3], output: [4] }
  ]);
  
  var output = net.run([4]); 
  
  console.warn(output);
};

export { calcNN as default };
