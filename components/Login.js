import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Dashboard from "./Dashboard";




const eye = <FontAwesomeIcon icon={faEye} />;


const Login = () => {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[passwordShown, setpPasswordShown]=useState(false);

  // const navigate = useNavigate();
  //   useEffect(()=>{

  //     navigate("/Dashboard")
    
  // }, []);
 const Submit=(e)=>{
  e.preventDefault();
 }

  const togglePasswordVisiblity = () => {
    setpPasswordShown(passwordShown ? false : true);
  };

return (

      
    <form >
      <span
        style={{ color: "black", fontSize: "45px", fontFamily: "sans-serif" }}
      >
        D
      </span>
      <span
        style={{ color: "black", fontSize: "45px", fontFamily: "sans-serif" }}
      >
        I
      </span>
      <span
        style={{ color: "red", fontSize: "45px", fontFamily: "sans-serif" }}
      >
        A
      </span>
      <span
        style={{ color: "black", fontSize: "45px", fontFamily: "sans-serif" }}
      >
      </span>
      <span
        style={{ color: "black", fontSize: "45px", fontFamily: "sans-serif" }}
      >
        O
      </span>
      <span
        style={{ color: "red", fontSize: "45px", fontFamily: "sans-serif" }}
      >
        Z
      </span>
      <h3>log In</h3>
      <div className="mb-3">
        <label>Name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          
        />
      </div>
    
      <div className="mb-3">
        <label>Email ID</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      
      <div className="mb-3">
        <label>Password</label>
        
        <input
          type={passwordShown ? "text" : "password"}

          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
      </div>

      <div className="d-grid">
        <button
          onClick={Submit} type="submit"
          className="btn btn-primary"
        >
        Login
        </button>
      </div>
      <p className="forgot-password text-right">
        Already have an DIATOZ account?<a href="/sign-up">Create Account</a>
      </p>
    </form>

);
}
export default Login;
