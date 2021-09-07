import {useState,useEffect} from "react"
import ToDoForm from "./Components/ToDoForm/ToDoForm"
import ToDoList from "./Components/ToDoList/ToDoList"
import {v4 } from "uuid";
import {Itodos} from "./Interface/ToDo"
import mongoose from "mongoose";
import {AxiosResponse} from "axios"
import axios from "./axios"

function App() {
  
   const [todos,setTodos]=useState<Array<Itodos>>([])



///Funkcje związane z Axiosem

useEffect(()=>{
  axios.get("/Todo")
  .then(res=>{
    setTodos(res.data)

  })
  .catch(err=>{
    console.log(err)
  })

},[])

 const addTodo = (text :string)=>{
  const newTodo ={
    _id: new mongoose.Types.ObjectId(),
    title: text,
    isCompleted: false,
  }
  axios.post("/Todo",newTodo)
  .then((res: AxiosResponse) => {
    setTodos([...todos,res.data])
});
}

 const checkToDo=(_id:mongoose.Types.ObjectId)=>{
  setTodos(
   todos.map((todo)=>{
     if(todo._id===_id)todo.isCompleted=!todo.isCompleted; 
     if(todo.isCompleted===true) {   
     }
    axios.put("/Todo/"+todo._id,todo)
     return todo;
   })
  );
};

 const deleteToDo =(_id:mongoose.Types.ObjectId)=>{
  axios.delete("/Todo/"+_id)
  setTodos(todos.filter(todo=>todo._id!==_id))

}

///Koniec Funkcji związanych z Axiosem

///Pomniejsze funkcje

const sortToDo=()=>{
  todos.sort((a:any,b:any)=>{
    return b.isCompleted - a.isCompleted;
  })
  setTodos([...todos]);
}

const generate= ()=>{

  addTodo(v4());

  
}
//Koniec pomniejszych funkcji


  return (
    <div >
    <ToDoForm addToDo={addTodo} sortToDo={sortToDo} generate={generate} />
    <ToDoList todos={todos} checkToDo={checkToDo} deleteToDo={deleteToDo}  />
    </div>
  );
}

export default App;
