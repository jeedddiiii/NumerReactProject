import './App.css';
import  React  from  'react' ;
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Bisection from './components/bisection';
import FalsePosition from './components/falsePosition';
import OnePoint from './components/onepoint';
import NewtonRaphson from './components/newton';
import Secant from './components/secant';
import Cramer from './components/cramer';
import CramersRule from './components/cramers_rule';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <NavBar>
      <Routes>
        <route>
          
        </route>
      </Routes>
      </NavBar> */}
        <h1>ไอเหี้ย</h1>
        <Cramer/>
      {/* </BrowserRouter> */}


    </div>
  );
}

export default App;
