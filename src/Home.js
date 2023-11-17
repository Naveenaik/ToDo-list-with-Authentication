import React, { useEffect, useState } from "react";
import ToDoIcon from "./Components/ToDoIcon";
import {getAllToDo,addToDo,updateToDo,deleteToDo} from "./Utilis/HandleToDoApi";

import "./Home.css";

//, addToDo, updateToDo, deleteToDo
const Home = ({ user }) => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [date,setDate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const fetchToDos = async () => {
    try {
      const todos = await getAllToDo(user._id);
      setToDo(todos || []);
    } catch (err) {
      console.log("Error fetching ", err);
    }
  };

  useEffect(() => {
    fetchToDos();
  }, [user]);

  const getAddToDo = async () => {
    addToDo(text, user._id);
    setText("");
    fetchToDos();
    fetchToDos();
  };

  const getUpdateToDo = () => {
    updateToDo(toDoId, text, setText, setIsUpdating, user._id);
    setText("");
    fetchToDos();
    fetchToDos();
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const deleteMode = (toDoId, text) => {
    deleteToDo(toDoId, text, user._id);
    fetchToDos();
    fetchToDos();
  };

  return (
    <div className="home">
      <div className="todo-container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos........"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>

          <div
            className="add"
            onClick={isUpdating ? () => getUpdateToDo() : () => getAddToDo()}
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
      </div>
      <div className="list">
        {toDo &&
          toDo.map((item) => (
            <ToDoIcon
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteMode={() => deleteMode(item._id, item.text)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
