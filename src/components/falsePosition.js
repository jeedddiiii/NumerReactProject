import React, { useState } from "react";
const FalsePosition = () => {
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
    let fxr,
      fxl,
      fx1,
      x,
      x1,
      error = 1,
      newXr = Number(xr),
      newXl = Number(xl);
    do {
      x = newXl;
      fxl = eval(equations);
      x = newXr;
      fxr = eval(equations);
      x1 = (newXl * fxr - newXr * fxl) / (fxr - fxl);
      x = x1;
      fx1 = eval(equations);
      if (fx1* fxr < 0) {
        error = (x1 - newXl) / x1;
        newXl = x1;
      } else {
        error = (x1 - newXr) / x1;
        newXr = x1;
      }
    } while (Math.abs(error)>=0.0001);
    setResult(x1.toFixed(6));
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
            placeholder="enter a xl"
            value={xl}
            onChange={inputXl}
          />
        </div>
        <div>
          <label>xr :</label>
          <input
            type="text"
            placeholder="enter a xr"
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
          <span>your falseposition result is {result}</span>
        </div>
      </form>
    </div>
  );
};
export default FalsePosition;
