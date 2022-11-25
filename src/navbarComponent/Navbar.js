import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Ai from "react-icons/ai";
import "./Navbar.css";
import { navItems } from "./NavItems";
import {EquationDropDown } from "./Dropdown";
import {AlgebraDropDown} from "./Dropdown";
import {InterpolationDropDown} from "./Dropdown";
import {RegressionDropDown} from "./Dropdown";

function Navbar() {
  const [dropdownEquation, setDropdownEquation] = useState(false);
  const [dropdownAlgebra, setDropdownAlgebra] = useState(false);
  const [dropdownInterpolation, setDropdownInterpolation] = useState(false);
  const [dropdownRegression, setDropdownRegression] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Numerical
          <Ai.AiOutlineCalculator />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "RootOfEquation") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownEquation(true)}
                  onMouseLeave={() => setDropdownEquation(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdownEquation && <EquationDropDown/>}
                </li>
              );
            }
            if (item.title === "LinearAlgebra") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownAlgebra(true)}
                  onMouseLeave={() => setDropdownAlgebra(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdownAlgebra && <AlgebraDropDown />}
                </li>
              );
            }
            if (item.title === "Interpolation") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownInterpolation(true)}
                  onMouseLeave={() => setDropdownInterpolation(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdownInterpolation && <InterpolationDropDown />}
                </li>
              );
            }
            if (item.title === "Regression") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownRegression(true)}
                  onMouseLeave={() => setDropdownRegression(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdownRegression && <RegressionDropDown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
    </div>
  );
}
export default Navbar;
