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

      <div className="info-banner">
        <div className="info-banner-icon">DUE</div>
        <div>
          <h1 className="info-title">Dunaújváros University Information Guide</h1>
          <p className="info-desc">
            Your one-stop campus assistant. Use the <strong>Chat</strong> tab to ask questions
            about schedules, facilities, fees, library hours, and more — and get instant answers.
            This dashboard shows what your fellow students are asking most, so you can quickly
            find the information that matters.
          </p>
          <div className="info-features">
            <span className="info-feature">Ask any campus question</span>
            <span className="info-feature">Find schedules &amp; deadlines</span>
            <span className="info-feature">Explore facilities</span>
            <span className="info-feature">Save your student profile</span>
          </div>
        </div>
      </div>

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

      <div className="dashboard-header" style={{ marginTop: '1.5rem' }}>
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {trending.map((t, i) => (
          <div key={t.question} className="faq-item">
            <span className="faq-rank">#{i + 1}</span>
            <span className="faq-question">{t.question}</span>
            <span className="faq-count">{t.count} asks</span>
          </div>
        ))}
      </div>
    </div>
  );
}
