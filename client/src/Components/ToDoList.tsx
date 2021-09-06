import ToDo from "./ToDo"


interface Itodos{
    id:string;
    title: string;
    isCompleted:boolean;
    date: Date;
    }
    

interface IToDoListProps{
todos: Array<Itodos>;


checkToDo:(action: string)=>void;
deleteToDo:(action: string)=>void;
}


const ToDoList = (props: IToDoListProps) => {
    const todos=props.todos;
    const checkToDo=props.checkToDo;
    const deleteToDo=props.deleteToDo
    
    return (
       <div>
         {todos.map((todo)=>(
             <ToDo key={todo.id} title={todo.title} checkToDo={checkToDo} deleteToDo={deleteToDo}  id={todo.id} isCompleted={todo.isCompleted} date={todo.date} />
         ))}

         
       </div>
    )
}

export default ToDoList
