import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllToDo = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addToDo = async (text,date,userId) => {
  try {
    const response = await axios.post(`${baseUrl}/save/${userId}`,{text,date})
      .then(({data})=>{
      console.log(data);
    })
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const updateToDo = async(toDoId,text,setText,setIsUpdating,date,userId) =>{
  console.log("Item updated");
    try{
      const response = await axios.put(`${baseUrl}/update/${userId}/${toDoId}`,{text,date})
      .then(({data})=>{
        console.log("Item updated");
        console.log(data);
        setText("");
        setIsUpdating(false)
      })
      return response.data;
    }
    catch(err)
    {
      console.log(err);
    }
}

const deleteToDo = async(toDoId,text,userId) =>{
  try{
    const response = await axios.delete(`${baseUrl}/delete/${userId}/${toDoId}`,{text})
    .then(({data})=>{
      console.log(data);
    })
    return response.data;
  }
  catch(err)
  {
    console.log(err);
  }
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}