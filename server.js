//-------------------------------------
// Setup - Import dependencies and create app object
//-------------------------------------
require('dotenv').config();
const express = require('express');
const budgetRouter = require('./controllers/budget')

const app = express();

const port = process.env.PORT;

//-------------------------------------
// Declare Middleware
//-------------------------------------

app.use('/', budgetRouter);

//-------------------------------------
// Routes
//-------------------------------------



//-------------------------------------
// Server Listener
//-------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})