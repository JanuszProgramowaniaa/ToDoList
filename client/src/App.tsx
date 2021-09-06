import React, {useState} from "react"
import ToDoForm from "./Components/ToDoForm"
import ToDoList from "./Components/ToDoList"
import './App.css';
import mongoose from "mongoose";
import {v4 } from "uuid";
function App() {

interface Itodos{
id:mongoose.Types.ObjectId;
title: string;
isCompleted:boolean;
date: Date;
}


const [todos,setTodos]=useState<Array<Itodos>>([
{
  id: new mongoose.Types.ObjectId(),
title: "Zrób zakupy",
isCompleted: false,
date: new Date()
},
{
  id: new mongoose.Types.ObjectId(),
title: "Pomóż babci",
isCompleted: false,
date: new Date()

},
{
  id: new mongoose.Types.ObjectId(),
title: "Zapłać kurierowi",
isCompleted: false,
date: new Date()

},
])

const addTodo = (text :string)=>{
  const newTodo ={
    id: new mongoose.Types.ObjectId(),
    title: text,
    isCompleted: false,
    date: new Date("December 17, 1995 03:24:00")
  }
  setTodos([...todos,newTodo])
}

const checkToDo=(id:mongoose.Types.ObjectId)=>{
  setTodos(
   todos.map((todo)=>{
     if(todo.id===id)todo.isCompleted=!todo.isCompleted;
     if(todo.isCompleted===true) {
       console.log(todo)
       todo.date=new Date;
       
     }
    
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

const deleteToDo =(id:mongoose.Types.ObjectId)=>{
setTodos(todos.filter(todo=>todo.id!==id))

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
