const express = require('express')
const app = express()

const {home,insert,retrieveTodos,deleteTodo,updateTodo} = require('../controllers/HomeController')



app.get('/home',home);
app.post('/insert',insert)
app.get('/retrieveTodos',retrieveTodos);
app.put('/update/:id', updateTodo);
app.delete('/delete/:id', deleteTodo);


module.exports =app;