import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './ExpenseChart.css'; // 👈 Add external CSS for styling

Chart.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">📊 Expense Breakdown by Category</h3>
      <div className="chart-wrapper">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default ExpenseChart;
