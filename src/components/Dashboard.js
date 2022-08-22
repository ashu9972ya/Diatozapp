import React from 'react';
import Table from './Table';



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

let user=JSON.parse(localStorage.getItem('user-info'))

const Dashboard = () => {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/log-in");
    
  }
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <navigate replace to="/login" />;
  } else {
  
  return (
    <>
    
      
  

<button onClick={logout}>Logout</button>
<h1>Dashboard</h1>

<Table sx={{mt:100,maxWidth:300, display:"flex"}}/>
      
  
    </>
  )
}
}

export default Dashboard;
