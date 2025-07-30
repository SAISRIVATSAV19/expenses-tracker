const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// @route   POST /api/expenses
// @desc    Add a new expense
router.post('/', async (req, res) => {
  try {
    console.log('📥 New expense request:', req.body);

    const { title, amount, category } = req.body;

    // Validate fields
    if (!title || !amount) {
      return res.status(400).json({ error: 'Title and amount are required' });
    }

    const newExpense = new Expense({ title, amount, category });
    const savedExpense = await newExpense.save();

    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('❌ Error saving expense:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/expenses
// @desc    Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    console.error('❌ Error fetching expenses:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
