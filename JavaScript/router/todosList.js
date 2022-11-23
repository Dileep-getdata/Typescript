"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newtodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newtodo);
    res.status(201).json({ message: 'Added to todo', todo: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tid = params.todoId;
    console.log(tid);
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Succesfully updated', todo: todos });
    }
    res.status(404).json({ message: 'Could not find the ID' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter(todoItem => todoItem.id !== tid);
    res.status(200).json({ message: 'Delete the item', todo: todos });
});
exports.default = router;
