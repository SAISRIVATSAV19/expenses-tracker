import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import './App.css'; // NEW: external styling

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/api/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const res = await axios.post('http://localhost:5000/api/expenses', expense);
    setExpenses([res.data, ...expenses]);
  };

  return (
    <div className="app-wrapper">
      <div className="header">
        <h1>💸 Expense Tracker</h1>
        <p className="tagline">Track. Analyze. Control.</p>
      </div>

      <div className="form-section">
        <ExpenseForm onAdd={addExpense} />
      </div>

      <div className="chart-section">
        <ExpenseChart expenses={expenses} />
      </div>

      <div className="list-section">
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
