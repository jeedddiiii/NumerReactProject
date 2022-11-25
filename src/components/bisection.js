import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Bisection = () => {
  const math = require("mathjs");
  const data = [];
  const datax = [];
  const [arrIt, setArrIt] = useState([]);
  const [arrXl, setArrXl] = useState([]);
  const [arrXr, setArrXr] = useState([]);
  const [arrXm, setArrXm] = useState([]);
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
    while (arrXr.length > 0) {
      arrXr.pop();
    }
    while (arrXl.length > 0) {
      arrXl.pop();
    }
    while (arrXm.length > 0) {
      arrXm.pop();
    }
    while (arrIt.length > 0) {
      arrIt.pop();
    }

    let error = 1;
    let it = 0;
    let xm;
    let x;
    let fxr;
    let fxm;
    let newXr = Number(xr);
    let newXl = Number(xl);
    do {
      arrIt.push(it);
      arrXl.push(newXl);
      arrXr.push(newXr);
      xm = (newXl + newXr) / 2;
      // x = xm;
      fxm = math.evaluate(equations, { x: xm });
      // x = newXr;
      fxr = math.evaluate(equations, { x: newXr });
      console.log(equations);
      console.log(newXl);
      console.log(newXr);
      console.log(fxr);
      console.log(fxm);
      console.log(fxm * fxr);
      if (fxm * fxr < 0) {
        error = (xm - newXl) / xm;
        newXl = xm;
      } else {
        error = (newXr - xm) / xm;
        newXr = xm;
      }

      arrXm.push(xm);
      it++;
    } while (Math.abs(error) >= 0.0001);
    for (let i = 0; i < it; i++) {
      datax.push({
        iter: arrIt[i],
        xl: arrXl[i],
        xr: arrXr[i],
        xm: arrXm[i],
      });
    }
    for (let i = 0; i < it; i++) {
      data.push(datax[i]);
      console.log(datax[i]);
    }
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
        <div>
          <table>
            <tr>
              <th>Iteration</th>
              <th>xl</th>
              <th>xr</th>
              <th>xm</th>
            </tr>
            {arrIt.map((item, index) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>{arrXl[index]}</td>
                  <td>{arrXr[index]}</td>
                  <td>{arrXm[index]}</td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* <div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="iter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="xl" stroke="#8884d8" />
            <Line type="monotone" dataKey="xr" stroke="#82ca9d" />
            <Line type="monotone" dataKey="xm" stroke="#000000" />
          </LineChart>
        </div> */}
        
      </form>
    </div>
  );
};

export default Bisection;
