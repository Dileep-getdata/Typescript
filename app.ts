const express =require('express');

import  todosRouter from './router/todosList';

const app=express();

app.use(express.json());

app.use(todosRouter);

app.listen(3000);