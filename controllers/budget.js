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
// Index
router.get('/', (req, res) =>{res.redirect('/budgets')});

router.get('/budgets', (req, res) =>{
  res.render('budget_index.ejs', {
    budgetData: Budget,
  })
});

// New
router.get('/budgets/new', (req, res) => {
  res.render('budget_new.ejs')
});

// Show
router.get('/budgets/:index', (req, res) => {
  // res.send(`this is the ${req.params.index} route`)
  res.render('budget_show.ejs', {
    budgetIndex: Budget,
    budgetData: req.params.index,
  })
});


// Create
router.post('/budgets/', (req, res) => {
  Budget.push(req.body);
  res.redirect('/budgets')
})



// ----------------------
// export
// ----------------------
module.exports = router