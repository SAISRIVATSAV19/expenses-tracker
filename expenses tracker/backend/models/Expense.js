const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required']
  },
  category: {
    type: String,
    default: 'General'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
