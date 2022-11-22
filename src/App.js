import './App.css';
import  React  from  'react' ;
import Sidebar from './sidebar/sidebar';

import {BrowserRouter as Switch,Route,Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Bisection from './components/bisection';
import FalsePosition from './components/falsePosition';
import OnePoint from './components/onepoint';
import NewtonRaphson from './components/newton';
import Secant from './components/secant';
import Cramer from './components/cramer';
function App() {
  return (
    <div className="App">
      <Bisection/>
    </div>
    // <Router>
      /* <BrowserRouter>
      <NavBar>
      <Routes>
        <route>
          
        </route>
      </Routes>
      </NavBar> */
        /* <h1>ไอเหี้ย</h1> */
        
      /* </BrowserRouter> */


    // </Router>
  );
}

export default App;
