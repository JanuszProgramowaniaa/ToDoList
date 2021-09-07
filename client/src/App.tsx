import React, {useState,useEffect} from "react"
import ToDoForm from "./Components/ToDoForm"
import ToDoList from "./Components/ToDoList"
import './App.css';
import mongoose from "mongoose";
import {v4 } from "uuid";
import axios from "axios"
import {AxiosResponse} from "axios"
function App() {

interface Itodos{
_id:mongoose.Types.ObjectId;
title: string;
isCompleted:boolean;
date: Date;
}


const [todos,setTodos]=useState<Array<Itodos>>([])

useEffect(()=>{
  axios.get("http://localhost:3001/api/Todo")
  .then(res=>{
    setTodos(res.data)
    
  })
  .catch(err=>{
    console.log(err)
  })

},[])
console.log(todos)

const addTodo = (text :string)=>{
  const newTodo ={
    _id: new mongoose.Types.ObjectId(),
    title: text,
    isCompleted: false,
    date: new Date()
  }
  axios.post("http://localhost:3001/api/Todo",newTodo)
  .then((res: AxiosResponse) => {
    setTodos([...todos,res.data])
});
}

const checkToDo=(_id:mongoose.Types.ObjectId)=>{
  setTodos(
   todos.map((todo)=>{
     if(todo._id===_id)todo.isCompleted=!todo.isCompleted; 
     if(todo.isCompleted===true) {
       //musi być !!! console.log(todo);
       todo.date=new Date();
       
     }
     

    axios.put("http://localhost:3001/api/Todo/"+todo._id,todo)
     return todo;
   })
  );
};


const sortToDo=()=>{
  
  todos.sort((a:any,b:any)=>{
    return b.date - a.date
    
      


  })
  

  setTodos([...todos]);
}

const deleteToDo =(_id:mongoose.Types.ObjectId)=>{
  axios.delete("http://localhost:3001/api/Todo/"+_id)
  setTodos(todos.filter(todo=>todo._id!==_id))

}

const generate= ()=>{
 
  addTodo(v4());


}



  return (
    <div >
    <ToDoForm addToDo={addTodo} sortToDo={sortToDo} generate={generate} />
    <ToDoList todos={todos} checkToDo={checkToDo} deleteToDo={deleteToDo}  />
    </div>
  );
}

export default App;
