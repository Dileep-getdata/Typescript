import  express from 'express';

import  todosRouter from './router/todosList';

import bodyparse from 'body-parser';

const app=express();

app.use(bodyparse.json());

app.use(todosRouter);

app.listen(3000);