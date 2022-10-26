import './App.css';
import Bisection from './components/bisection';
import FalsePosition from './components/falsePosition';
import  React  from  'react' ;
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import NavBar from './components/NavBar';

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
        <h1>hello</h1>
        <Bisection/>
      {/* </BrowserRouter> */}


    </div>
  );
}

export default App;
