import { Card,CardContent,Typography,Container,IconButton } from '@material-ui/core';
import{Check,Delete} from "@material-ui/icons"
import mongoose from "mongoose";
import {Itodos} from "../../Interface/ToDo"
interface IToDoProps extends Itodos{

checkToDo:(action: mongoose.Types.ObjectId)=>void;
deleteToDo:(action: mongoose.Types.ObjectId)=>void;
}


const ToDo = (props: IToDoProps) => {
     const title=props.title;
     const _id=props._id;
     const isCompleted=props.isCompleted;

     const todoStyle= isCompleted? {textDecoration:"line-through",marginTop:35,background:"green"} :{textDecoration:"none",marginTop:35, background:"lightgray"}
     const checkStyle= isCompleted? {color:"yellow"} : {color:"green"} ;
     


     const checkToDo=props.checkToDo;
     const deleteToDo=props.deleteToDo;
     const markComplete = () => checkToDo(_id)
     const deleteItem = () => deleteToDo(_id)
     
    return (
       
       <div>
           <Container>
               <Card variant="outlined" style={todoStyle}>
                  <CardContent>
                   <Typography variant="h5" component="h2" >
                    <IconButton onClick={markComplete}>               
                        <Check style={checkStyle} />
                    </IconButton>
                    {title }
                    <IconButton onClick={deleteItem} style={{float:"right"}}>

<Delete style={{color:"red"}} />
</IconButton>
                   </Typography>
                  </CardContent>
               </Card>
           </Container>
       </div>
    )
}

export default ToDo
