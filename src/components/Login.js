import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";
import {useNavigate} from 'react-router-dom';

const eye = <FontAwesomeIcon  icon={faEye} />;

const Login = () => {
  const navigate = useNavigate();
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[passwordShown, setpPasswordShown]=useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("user-info") || false)
  );

  const users = [{ name: "ashu", email:"ashu@gmail.com", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
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
    }else{
      alert("data added succesfully")
    }
    const account = users.find((user) => user.name === name);
    if (account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      if(account && account.email === email){
      setauthenticated(true)
      localStorage.setItem("user-info",JSON.stringify(users), true);
      navigate("/Dashboard");
      }
    }
  };


  const togglePasswordVisiblity = () => {
    setpPasswordShown(passwordShown ? false : true);
  };
  let user=JSON.parse(localStorage.getItem('user-info'))
  
  function logout(){
    localStorage.clear();
  }
return (

      
    <form onSubmit={handleSubmit}>
      <div>
      <span
        style={{ color: "black", fontSize: "45px", fontFamily: "sans-serif", }}
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
      </div>
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
           <i className="fa-eye" onClick={togglePasswordVisiblity}>{eye}</i>
           
      </div>

      <div className="d-grid">
        <button
           type="submit"
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
