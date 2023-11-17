import React,{  useState} from "react";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

import "../Components/SignUp.css";
import { signIn } from "../Utilis/HandleApi";

import {useNavigate} from 'react-router-dom';

const SignIn = ({setLoginUser}) => {

  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  return (
    <div className="container">
      <h2>Sign In</h2>
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email id" required 
          value={userEmail}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password" required 
        value={userPassword}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="submit-container" 
        onClick={async()=>{
          await signIn(userEmail,userPassword,setLoginUser,navigate);
        }}
      >Sign In</div>
      <div className="or">Or</div>
      <div className="submit-container"
        onClick={()=>navigate("/register")}
      >Sign Up</div>
    </div>
  );
};

export default SignIn;
