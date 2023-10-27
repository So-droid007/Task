const {createTodo,showTodos,deleteTodoById,updateNoteById} = require('../models/todo');


const home = (req,res)=>{
    res.render('main.ejs')
}

// API endpoint to create a new todo
const insert = async (req, res) => {
    try {
      // Get the todo data from the request body
      const todo = req.body;
  
      // Call the createTodo function to insert the data
      await createTodo(todo, (error) => {
        if (error) {
          res.status(400).json({ error: 'Failed to create a new todo' });
        } else {
          res.status(201).json({ message: `Todo created successfully` });
        }
      });
    } catch (error) {
      res.status(400).json({ error: 'Failed to create a new todo' });
    }
  };

 

// API endpoint to retrieve and show todos
const retrieveTodos = async (req, res) => {
  try {
    const todos = await showTodos();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todos' });
  }
};

// API endpoint to delete todos


const deleteTodo = async (req, res) => {
  try {
    const taskId = req.params.id;
    // Call the delete function in your model
    await deleteTodoById(taskId);
    res.status(204).end(); // 204 No Content
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};

const updateTodo = async (req,res)=>{
  try {
    const noteId = req.params.id;
    const updatedNote = req.body; // Assuming the updated data is sent in the request body

    // Call the update function in your model
    await updateNoteById(noteId, updatedNote);

    res.status(200).json({ message: 'Note updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
}








module.exports = {home,insert, retrieveTodos,deleteTodo,updateTodo};