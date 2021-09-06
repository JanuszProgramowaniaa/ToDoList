import React, {useState} from "react"
import ToDoForm from "./Components/ToDoForm"
import ToDoList from "./Components/ToDoList"
import './App.css';
import {v4 } from "uuid";

function App() {

interface Itodos{
id:string;
title: string;
isCompleted:boolean;
date: Date;
}


const [todos,setTodos]=useState<Array<Itodos>>([
{
  id: v4(),
title: "Zrób zakupy",
isCompleted: false,
date: new Date()
},
{
  id: v4(),
title: "Pomóż babci",
isCompleted: false,
date: new Date()

},
{
  id: v4(),
title: "Zapłać kurierowi",
isCompleted: false,
date: new Date()

},
])

const addTodo = (text :string)=>{
  const newTodo ={
    id: v4(),
    title: text,
    isCompleted: false,
    date: new Date("December 17, 1995 03:24:00")
  }
  setTodos([...todos,newTodo])
}

const checkToDo=(id:string)=>{
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

const deleteToDo =(id:string)=>{
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
