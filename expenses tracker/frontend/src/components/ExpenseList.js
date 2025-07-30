import React from 'react';
import './ExpenseList.css'; // 👈 Include the styling

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h3 className="list-title">🧾 Expense History</h3>
      <ul className="list-container">
        {expenses.map((expense) => (
          <li className="expense-item" key={expense._id}>
            <div className="expense-title">{expense.title}</div>
            <div className="expense-details">
              ₹{expense.amount.toFixed(2)} <span className="category">({expense.category})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
