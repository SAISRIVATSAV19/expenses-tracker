// frontend/src/components/ExpenseForm.js

import React, { useState } from 'react';
import './ExpenseForm.css'; // 👈 Optional: add styles here

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount);

    // Validate title and amount
    if (!title || isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Title is required and amount must be a positive number!');
      return;
    }

    const newExpense = {
      title,
      amount: parsedAmount,
      category: category || 'General'
    };

    try {
      await onAdd(newExpense);
      setTitle('');
      setAmount('');
      setCategory('');
    } catch (error) {
      console.error('❌ Failed to add expense:', error);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
         min="1"
        step="1"
        placeholder="Amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category (e.g., Food, Travel)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">➕ Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
