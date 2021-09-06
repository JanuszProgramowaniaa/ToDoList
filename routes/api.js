const express = require("express")
const router = express.Router();

const TodoActions=require('../actions/api/todoactions')


router.get('/Todo',TodoActions.getTodo)
router.post('/Todo',TodoActions.saveTodo)
router.put('/Todo/:id',TodoActions.updateTodo)
router.delete('/Todo/:id',TodoActions.deleteTodo)




module.exports=router;