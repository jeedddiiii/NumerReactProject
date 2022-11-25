import "./App.css";
import React from "react";
import NavBar from "./navbarComponent/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
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
          <Route path="/" element={<Home />} />
          <Route path="/bisection" element={<Bisection />} />
          <Route path="/falseposition" element={<FalsePosition />} />
          <Route path="/onepointiteration" element={<OnePoint />} />
          <Route path="/newtonraphson" element={<NewtonRaphson />} />
          <Route path="/secant" element={<Secant />} />
          <Route path="/cramer" element={<Cramer />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
