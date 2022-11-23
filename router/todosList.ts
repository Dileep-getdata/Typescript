import {Router} from 'express';

import {Todo} from '../models/todos';

let todos: Todo[]=[];
const router =Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});

})

router.post('/todo',(req,res,next)=>{
    const newtodo:Todo={
        id:new Date().toISOString(),
        text: req.body.text,
    }
    todos.push(newtodo);
    res.status(201).json({message:'Added to todo',todo:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    console.log(tid);
    const todoIndex=todos.findIndex((todoItem)=>todoItem.id===tid);

    if(todoIndex >= 0){
        todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text}
        return res.status(200).json({message:'Succesfully updated',todo:todos});
    }
    res.status(404).json({message:'Could not find the ID'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    todos=todos.filter(todoItem=>todoItem.id!==tid) ;
    res.status(200).json({message:'Delete the item',todo:todos})
})

export default router;