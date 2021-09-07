const Todo= require("../../db/models/todo")

module.exports ={

async saveTodo(req,res){
   const title=req.body.title;
   const isCompleted=req.body.isCompleted;
   let todo ;
try{
     todo = new Todo({title,isCompleted})
  await todo.save();
} catch(err){
   return res.status(422).json({message: err.message})
}
   res.status(201).json(todo)

 },


 async getTodo(req,res){
    const todo =await Todo.find({})

    res.status(200).json(todo)
 },





 async updateTodo(req,res){
   const isCompleted=req.body.isCompleted;
    const _id=req.params.id


    const todo = await Todo.findOne({_id:_id})
    todo.isCompleted=isCompleted;
   await todo.save();
   res.status(201).json(todo)


 },

 async deleteTodo(req,res){
    const _id=req.params.id;
    await Todo.deleteOne({_id:_id})
    res.sendStatus(204);
 }








}

