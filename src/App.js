import "./App.css";
import React from "react";
import NavBar from "./navbarComponent/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bisection from "./components/bisection";
import FalsePosition from "./components/falsePosition";
import OnePoint from "./components/onepoint";
import NewtonRaphson from "./components/newton";
import Secant from "./components/secant";
import Cramer from "./components/cramer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route></Route>
          <Route path="/bisection" element={<Bisection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
