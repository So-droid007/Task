const db = require('../config/database');


// Function to create a new todo
const createTodo = async (todo, callback) => {
    // Use a prepared statement to insert data into the 'notes' table
    await db.query(
      'INSERT INTO `notes` (`title`, `description`) VALUES (?, ?)',
      [todo.task, todo.description],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results.insertId);
      }
    );
  };


  // Function to retrieve todos from the database
const showTodos = async () => {
  return new Promise((resolve, reject) => {
    // Use a prepared statement to select data from the 'notes' table
    db.query('SELECT * FROM `notes`', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteTodoById = async (taskId) => {
  try {
    // Construct the SQL query to delete a todo by ID
    const query = 'DELETE FROM `notes` WHERE `id` = ?';

    // Execute the SQL query
    await db.query(query, [taskId]);
  } catch (error) {
    throw error;
  }
};



const updateNoteById = async (noteId, updatedNote) => {
  try {
    // Construct the SQL query to update a note by ID
    const query = 'UPDATE `notes` SET ? WHERE `id` = ?'; // Use placeholders for the updated data

    // Execute the SQL query, passing the updated data and the note ID
    await db.query(query, [updatedNote, noteId]);
  } catch (error) {
    throw error;
  }
};







  module.exports = {createTodo,showTodos,deleteTodoById,updateNoteById};