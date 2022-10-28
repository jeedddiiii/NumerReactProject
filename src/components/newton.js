import React, { useState } from "react";
const math = require("mathjs");
const NewtonRaphson = () => {
  const [equations, setEquations] = useState("");
  const [xn, setXn] = useState("");
  const [result, setResult] = useState("");

  const inputEquations = (e) => {
    const value = e.target.value;
    setEquations(value);
  };

  const inputXn = (e) => {
    const value = e.target.value;
    setXn(value);
  };

  const calculate = () => {
    let x = Number(xn),
      error = 1,
      fx,
      dfx,
      xAbs;
    do {
      fx = math.evaluate(equations, { x: x });
      dfx = math.derivative(equations, "x").evaluate({ x: x });
      xAbs = (fx * -1) / dfx;
      x = x + xAbs;
      error = Math.abs(xAbs / x);
    } while (error >= 0.0001);
    setResult(x.toFixed(6));
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
            value={xn}
            onChange={inputXn}
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

export default NewtonRaphson;
