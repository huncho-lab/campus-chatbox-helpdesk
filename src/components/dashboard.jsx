import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const barData = {
    labels: ['Library hours', 'Sports', 'Fee payments', 'Exam schedule'],
    datasets: [{
      label: 'Questions',
      data: [1200, 950, 700, 500],
      backgroundColor: ['#4A90E2', '#F5A623', '#50E3C2', '#9013FE'],
      borderRadius: 4,
    }]
  };

  const doughnutData = {
    labels: ['Library', 'Academics', 'Finance'],
    datasets: [{
      data: [35, 28, 17],
      backgroundColor: ['#4A90E2', '#F5A623', '#50E3C2'],
    }]
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Trending questions</h2>
        <span className="question-count">1,482 ↑</span>
      </div>

      <div className="charts">
        <div className="chart-wrapper bar-chart">
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
        </div>
        <div className="chart-wrapper doughnut-chart">
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
        </div>
      </div>

      <div className="frequent-topics">
        {['Library', 'Schedules', 'Facilities', 'Fees'].map(t => (
          <button key={t} className="topic">{t}</button>
        ))}
      </div>
    </div>
  );
}