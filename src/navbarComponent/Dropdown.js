import React, { useState } from "react";
import { Link } from "react-router-dom";
import { rootofequationDropdown } from "./NavItems";
import { linearalgebraDropdown } from "./NavItems";
import { interpolationDropdown } from "./NavItems";
import "./Dropdown.css";
function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <ul
        className={
          dropdown ? "rootofequation-submenu clicked" : "rootofequation-submenu"
        }
        onClick={() => setDropdown(!dropdown)}
      >
        {rootofequationDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={
          dropdown ? "linearalgebra-submenu clicked" : "linearalgebra-submenu"
        }
        onClick={() => setDropdown(!dropdown)}
      >
        {linearalgebraDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Dropdown;
