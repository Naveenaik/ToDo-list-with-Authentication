import React from "react";

import {useNavigate} from "react-router-dom"

import "./Logout.css"

const Logout = ({setLoginUser}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setLoginUser({});
    navigate("/login");
    // setLoginUser({});
  };

  return (
    <div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
