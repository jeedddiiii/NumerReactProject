import React, { useState } from "react";
const math = require("mathjs");

const Secant = () => {
  const [equations, setEquations] = useState("");
  const [inX0, setX0] = useState("");
  const [inX1, setX1] = useState("");
  const [result, setResult] = useState("");

  const inputEquations = (e) => {
    const value = e.target.value;
    setEquations(value);
  };

  const inputX0 = (e) => {
    const value = e.target.value;
    setX0(value);
  };

  const inputX1 = (e) => {
    const value = e.target.value;
    setX1(value);
  };

  const calculate = () => {
    let x0 = Number(inX0),
      x1 = Number(inX1),
      error = 1,
      fx0,
      fx1,
      x2,
      xAbs;
    do {
      fx0 = math.evaluate(equations, { x: x0 });
      fx1 = math.evaluate(equations, { x: x1 });
      x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
      xAbs = Math.abs(x2 - x1);
      x0 = x1;
      x1 = x2;
      error = Math.abs(xAbs / x2);
    } while (error >= 0.0001);
    setResult(x2.toFixed(6));
  };
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label>equations :</label>
          <input
            type="text"
            placeholder="enter a equations"
            value={equations}
            onChange={inputEquations}
          />
          <label>initial guess :</label>
          <input
            type="text"
            placeholder="enter a initial guess"
            value={inX0}
            onChange={inputX0}
          />
          <label>initial guess :</label>
          <input
            type="text"
            placeholder="enter a initial guess"
            value={inX1}
            onChange={inputX1}
          />
        </div>
        <button type="button" onClick={calculate}>
          calculate
        </button>
      </form>
      <h1>result : {result}</h1>
    </div>
  );
};

export default Secant;
