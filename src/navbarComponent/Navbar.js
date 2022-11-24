import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Nature
          <Fa.FaTree />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "RootOfEquation") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            else if (item.title === "LinearAlgebra") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
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
        
        <Button />
      </nav>
    </div>
  );
}
export default Navbar;
