import { useState, useEffect } from 'react';
import React from 'react';
import Login from './Login';


const SignUp=()=> {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[confirmpassword, setConfirmPassword]=useState("");


  const signup=(e)=>{
    e.preventDefault();
   }


    return (
      <div>
      <forms>
    <span style={{color:"black", fontSize:"45px",margin:"0px", fontFamily:"sans-serif"}}>D</span>
    <span style={{color:"black", fontSize:"45px",fontFamily:"sans-serif"}}>I</span>
    <span style={{color:"red", fontSize:"45px",fontFamily:"sans-serif"}}>A</span>
    <span style={{color:"black", fontSize:"45px",fontFamily:"sans-serif"}}>T</span>
    <span style={{color:"black", fontSize:"45px",fontFamily:"sans-serif"}}>O</span>
    <span style={{color:"red", fontSize:"45px",fontFamily:"sans-serif"}}>Z</span>
    
        <h3>Create Account</h3>
        <div className="mb-3">
          <label>Name </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email ID</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" value={password}  onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
    
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" value={confirmpassword}  onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button onClick={signup} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an DIATOZ account?<a href="/Log-in">Login</a>
        </p>
      </forms>
      </div>
    )
  }
export default SignUp;
