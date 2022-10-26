import React, { useState } from "react";

const Bisection = () => {
  const [equations, setEquations] = useState("");
  const [xl, setXl] = useState("");
  const [xr, setXr] = useState("");
  const [result, setResult] = useState("");
  const inputEquations = (e) => {
    const value = e.target.value;
    setEquations(value);
  };

  const inputXl = (e) => {
    const value = e.target.value;
    setXl(value);
  };

  const inputXr = (e) => {
    const value = e.target.value;
    setXr(value);
  };

  const calculate = () => {
    let error = 1;
    let xm;
    let x;
    let fxr;
    let fxm;
    let newXr = Number(xr);
    let newXl = Number(xl);
    do {
      xm = (newXl + newXr) / 2;
      x = xm;
      fxm = eval(equations);
      x = newXr;
      fxr = eval(equations);
      if (fxm * fxr < 0) {
        error = (xm - newXl) / xm;
        newXl = xm;
      } else {
        error = (newXr - xm) / xm;
        newXr = xm;
      }
    } while (Math.abs(error) >= 0.0001);
    setResult(xm.toFixed(6));
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
        </div>
        <div>
          <label>xl :</label>
          <input
            type="text"
            placeholder="enter a xr"
            value={xl}
            onChange={inputXl}
          />
        </div>
        <div>
          <label>xr :</label>
          <input
            type="text"
            placeholder="enter a xl"
            value={xr}
            onChange={inputXr}
          />
        </div>
        <div>
          <button type="button" onClick={calculate}>
            Submit
          </button>
        </div>
        <div>
          <span>your result is {result}</span>
        </div>
      </form>
    </div>
  );
};

export default Bisection;
