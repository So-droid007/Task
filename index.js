// Import required modules
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const homeRouter = require('./routes/homeRouter')


// Import and configure MySQL connection
const db = require('./config/database');

// Middleware to parse JSON data
app.use(express.json());

app.use(homeRouter)


app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine (if needed)
app.set('view engine', 'ejs');

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Include any additional routes (if needed)
// app.use(homeRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
