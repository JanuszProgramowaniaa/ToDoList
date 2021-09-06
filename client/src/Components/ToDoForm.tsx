import React,{useState} from 'react'
import { FormControl,Container,TextField,Button } from '@material-ui/core';


interface IToDoFormProps{

    addToDo:(action: string)=>void;
    sortToDo:()=>void;
    generate:()=>void;
}




const ToDoForm = (props:IToDoFormProps) => {
    const [text,setText]=useState("");
    const sortToDo=props.sortToDo;
    const generate=props.generate;

    const handleSubmit= (e:React.SyntheticEvent<EventTarget>) =>{
    e.preventDefault();
    props.addToDo(text);
     setText("");
    }


    return (
       <Container maxWidth="sm">
           <form onSubmit={handleSubmit}>
               <FormControl fullWidth={true}>
                 <TextField value={text} onChange={(e)=>setText(e.target.value)} label="Zrobię to" required={true} />
                  <Button  variant="contained"color="primary" type="submit" style={{marginTop:"10px"}}>Dodaj zadanie </Button>
                  <Button  variant="contained"color="secondary" onClick={sortToDo} style={{marginTop:"10px"}}>Sortuj </Button>
                  <Button  variant="contained"color="default" onClick={generate} style={{marginTop:"10px"}}>Generuj losowe </Button>
               </FormControl>
           </form>
           </Container>
    )
}

export default ToDoForm
