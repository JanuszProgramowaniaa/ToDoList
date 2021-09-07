import ToDo from "../Todo/ToDo"
import mongoose from "mongoose";
import {v4 } from "uuid";
import {Itodos} from "../../Interface/ToDo"

    
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
             <ToDo key={v4()} title={todo.title} checkToDo={checkToDo} deleteToDo={deleteToDo}  _id={todo._id} isCompleted={todo.isCompleted}  />
         ))}

         
       </div>
    )
}

export default ToDoList
