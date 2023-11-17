import React, { useState } from "react";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";

import "../Components/SignUp.css";

import { signUp, signIn } from "../Utilis/HandleApi";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="input">
        <img src={person_icon} alt="" />
        <input
          type="text"
          placeholder="Name"
          required
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input">
        <img src={email_icon} alt="" />
        <input
          type="email"
          placeholder="Email id"
          required
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input
          type="password"
          placeholder="Password"
          required
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        className="submit-container"
        onClick={async () => {
          await signUp(userName, userEmail, userPassword);
        }}
      >
        Sign Up
      </div>
      <div className="or">Or</div>
      <div className="submit-container"
        onClick={()=>navigate("/login")}
      >Sign In</div>
    </div>
  );
};

export default SignUp;
