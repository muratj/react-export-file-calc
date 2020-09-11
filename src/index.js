import React from "react";
import ReactDOM from "react-dom";
import * as calc from "./calculator";
// import {add, multiply, substract, divide} from "./calculator";

ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(1, 2)}</li>
    <li>{calc.substract(1, 2)}</li>
    <li>{calc.divide(1, 2)}</li>
  </ul>,
  document.getElementById("root")
);
