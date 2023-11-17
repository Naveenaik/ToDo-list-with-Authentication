import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

import "../Home.css";

const ToDoIcon = ({ text, updateMode, deleteMode }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon1" onClick={updateMode} />
        <AiFillDelete className="icon2" onClick={deleteMode} />
      </div>
    </div>
  );
};

export default ToDoIcon