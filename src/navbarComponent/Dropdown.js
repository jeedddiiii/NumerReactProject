import React, {useState } from "react";
import { Link } from "react-router-dom";
import { rootofequationDropdown } from "./NavItems";
import { linearalgebraDropdown } from "./NavItems";
import { interpolationDropdown } from "./NavItems";
import { regressionDropdown } from "./NavItems";
import "./Dropdown.css";

export const EquationDropDown = () => {
  const [dropdownEquation, setDropdownEquation] = useState(false);

  return (
    <div>
      <ul
        className={
          dropdownEquation
            ? "rootofequation-submenu clicked"
            : "rootofequation-submenu"
        }
        onClick={() => setDropdownEquation(!dropdownEquation)}
      >
        {rootofequationDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdownEquation(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const AlgebraDropDown = () => {
  const [dropdownAlgebra, setDropdownAlgebra] = useState(false);
  return (
    <div>
      <ul
        className={
          dropdownAlgebra
            ? "linearalgebra-submenu clicked"
            : "linearalgebra-submenu"
        }
        onClick={() => setDropdownAlgebra(!dropdownAlgebra)}
      >
        {linearalgebraDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdownAlgebra(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export const InterpolationDropDown = () => {
  const [dropdownInterpolation, setDropdownInterpolation] = useState(false);
  return (
    <div>
      <ul
        className={
          dropdownInterpolation
            ? "interpolation-submenu clicked"
            : "interpolation-submenu"
        }
        onClick={() => setDropdownInterpolation(!dropdownInterpolation)}
      >
        {interpolationDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdownInterpolation(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export const RegressionDropDown = () => {
  const [dropdownRegression, setDropdownRegression] = useState(false);
  return (
    <div>
      <ul
        className={
          dropdownRegression
            ? "regression-submenu clicked"
            : "regression-submenu"
        }
        onClick={() => setDropdownRegression(!dropdownRegression)}
      >
        {regressionDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdownRegression(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
