import ToDo from "./ToDo"
import mongoose from "mongoose";
import {v4 } from "uuid";
interface Itodos{
    id:mongoose.Types.ObjectId;
    title: string;
    isCompleted:boolean;
    date: Date;
    }
    

interface IToDoListProps{
todos: Array<Itodos>;


checkToDo:(action: mongoose.Types.ObjectId)=>void;
deleteToDo:(action: mongoose.Types.ObjectId)=>void;
}


const ToDoList = (props: IToDoListProps) => {
    const todos=props.todos;
    const checkToDo=props.checkToDo;
    const deleteToDo=props.deleteToDo
    
    return (
       <div>
         {todos.map((todo)=>(
             <ToDo key={v4()} title={todo.title} checkToDo={checkToDo} deleteToDo={deleteToDo}  id={todo.id} isCompleted={todo.isCompleted} date={todo.date} />
         ))}

         
       </div>
    )
}

export default ToDoList
