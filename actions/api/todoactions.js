const Todo= require("../../db/models/todo")

module.exports ={

saveTodo(req,res){
    /*
    const newTodo =new Todo({
    id:"costam",
    title:"Zrobic zakupy",
    isCompleted:false,
    date:new Date
}
)
newTodo.save().then(()=>{


});
    res.send('Zapisano notatkę !');
*/
// const id=req.body.id;
 
 const title="req.body.title";
 const isCompleted="req.body.isCompleted";
 const date="req.body.date";
   console.log(req.body)
   //res.send("Notatka została stworzona id:" +id +" title: "+title+" isCompleted "+isCompleted+" date "+date)

 },


 getTodo(req,res){
    
    res.send('Wczytano notatkę !');
 },





 updateTodo(req,res){
   const id=req.params.id;
    res.send('Zaktualizowano notatkę! ID:'+id);
 },

 deleteTodo(req,res){
    const id=req.params.id;
    res.send('Usunięto notatkę ! ID:'+id);
 }








}

