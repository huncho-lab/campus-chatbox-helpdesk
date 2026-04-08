import { useState, useEffect } from 'react';
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
import { getTrendingQuestions, getCategoryStats } from '../services/api';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const COLORS = ['#37a4fc', '#1a8ae0', '#0d5fa3', '#a8d8ff'];

export default function Dashboard() {
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getTrendingQuestions(), getCategoryStats()])
      .then(([t, c]) => {
        setTrending(t);
        setCategories(c);
      })
      .finally(() => setLoading(false));
  }, []);

  const barData = {
    labels: categories.map(c => c.category),
    datasets: [{
      label: 'Questions',
      data: categories.map(c => c.count),
      backgroundColor: COLORS,
      borderRadius: 4,
    }],
  };

  const doughnutData = {
    labels: categories.map(c => c.category),
    datasets: [{
      data: categories.map(c => c.count),
      backgroundColor: COLORS,
    }],
  };

  const totalCount = trending.reduce((sum, t) => sum + t.count, 0);

  if (loading) {
    return <div className="dashboard-loading">Loading…</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Trending questions</h2>
        <span className="question-count">{totalCount} ↑</span>
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
        {trending.map(t => (
          <button key={t.question} className="topic">{t.question}</button>
        ))}
      </div>
    </div>
  );
}
