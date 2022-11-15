// ----------------------
// Dependencies 
// ----------------------
const express = require('express');
const budget = require('../models/budget');





// ----------------------
// Router
// ----------------------

const router = express.Router();



// ----------------------
// Routes
// ----------------------

// GET
router.get('/', (req, res) =>{
  res.send('You hit the budget router')
});

router.get('/budgets', (req, res) =>{
  res.send('this is budgets route')
});

router.get('/budgets/:index', (req, res) => {
  res.send(`this is the ${req.params.index} route`)
});

router.get('/budgets/new', (req, res) => {
  res.send('this is the new route')
});

// POST
router.post('/budget', (req, res) => {

})



// ----------------------
// export
// ----------------------
module.exports = router