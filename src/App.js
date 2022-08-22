import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from "./components/Dashboard";
import VerifyEmail from './components/VerifyEmail';
import Sidebar from './components/Sidebar';

function App(){
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
         <h3 className="Diatoz">
          <span >D</span>
           <span >I</span> 
           <span style={{color:"red"}}>A</span>
            <span >T</span> 
            <span>O</span>
             <span style={{color:"red"}}>Z</span>
        </h3>
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>     
            </Link>
            <div  id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link" to={'/log-in'}>
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>  */}
        <div className="auth-wrapper">
          <div className="auth-inner">
          
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/VerifyEmail" element={<VerifyEmail/>} />
            </Routes>
          
          </div>
        </div>
      </div>
    </Router>
    
   )
   
}
export default App;