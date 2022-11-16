// ----------------------
// Dependencies 
// ----------------------
const express = require('express');
const Budget = require('../models/budget');





// ----------------------
// Router
// ----------------------

const router = express.Router();



// ----------------------
// Routes
// ----------------------

// GET
router.get('/', (req, res) =>{
  // res.send('You hit the budget router')
  res.render('budget_index.ejs', {
    budgetData: Budget,
  })
});

router.get('/budgets', (req, res) =>{
  res.send('this is budgets route')
});

router.get('/budgets/:index', (req, res) => {
  // res.send(`this is the ${req.params.index} route`)
  res.render('budget_show.ejs', {
    budgetIndex: Budget,
    budgetData: req.params.index,
  })
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