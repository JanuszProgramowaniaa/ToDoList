const mongoose=require('mongoose')

const Todo=mongoose.model('Todo',{
    id:String,
    title:String,
    isCompleted:Boolean,
    date: Date,
   
});


module.exports =Todo;