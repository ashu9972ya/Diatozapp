import { useState} from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
//import Login from './Login';

const eye = <FontAwesomeIcon  icon={faEye} />;
const SignUp=()=> {
  const navigate = useNavigate();
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[confirmpassword,setConfirmPassword]=useState("")
  const[passwordShown, setpPasswordShown]=useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("user-info") || false)
  );
  const users = [{ name: name, email: email, password: password,confirmpassword: confirmpassword }];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('userdata', users, "edata",e)
    if(name===""){
      alert("name is required")
    }else if(email===""){
      alert("email is required")
    }else if(!email.includes("@")){
      alert("please enter valid emaild")
    }else if(password===""){
      alert("password is required")
    }else if(password.length<5){
      alert("paasword length is greater than five")
    }else if(password!==confirmpassword){
      alert("password and confirm password does not match")
    }
    else{
      console.log("data added succesfully")
    }
    const account = users.find((user) => user.name === name);
    if (account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      if(account && account.email === email){
        setauthenticated(true)
        if (account && account.password===account.confirmpassword){
          setauthenticated(true)
          localStorage.setItem("user-info",JSON.stringify(users), true);
         navigate("/VerifyEmail",{state:{"emaildata":email}});
      }
      }
    }
  };


  const togglePasswordVisiblity = () => {
    setpPasswordShown(passwordShown ? false : true);
  };


    return (
      <div>
      <form onSubmit={handleSubmit}>
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
          type={passwordShown ? "text" : "password"}
          
            className="form-control"
            placeholder="Enter password" value={password}  onChange={(e)=>setPassword(e.target.value)}
          />
           <i className='fa-eyes' onClick={togglePasswordVisiblity}>{eye}</i>
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
          <button  type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an DIATOZ account?<a href="/Log-in">Login</a>
        </p>
      </form>
      </div>
    )
  }
export default SignUp;
