const mongoose=require('mongoose')


const TodoSchema = new mongoose.Schema({
  id:{
      type:String,
      required:true
  },
  title:{
    type:String,
    required:true
  },

  isCompleted:{
    type:Boolean,
    required:true
  },
  date:{
    type:Date,
    required:true
  },

})


const Todo=mongoose.model('Todo',TodoSchema);


module.exports =Todo;