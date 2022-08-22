import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
 

const VerifyEmail = () => {
  const {state}=useLocation();
  const {emaildata}=state
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h2>Verify your Email</h2>
      <p> We have sent you Email to <span>{emaildata}</span>
      <p> Please click the link in the mail sent to active your account</p></p>
      <button type='button' className='button' onClick={()=>navigate("/log-in")}>continue</button>
    </div>
  )
}

export default VerifyEmail;
