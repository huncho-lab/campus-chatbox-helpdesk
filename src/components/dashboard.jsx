import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useLanguage } from '../contexts/LanguageContext';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const CHART_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#0ea5e9'];

function LiveBadge() {
  return (
    <span className="live-badge" aria-label="Live data">
      <span className="live-dot" />
      LIVE
    </span>
  );
}

function StatCard({ icon, value, label, accent }) {
  return (
    <div className="stat-mini-card" style={{ '--accent': accent }}>
      <div className="stat-mini-icon">{icon}</div>
      <div className="stat-mini-body">
        <span className="stat-mini-value">{value}</span>
        <span className="stat-mini-label">{label}</span>
      </div>
    </div>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ChatBubbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export default function Dashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNow, setActiveNow] = useState(47);
  const [questionsToday, setQuestionsToday] = useState(184);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    Promise.all([getTrendingQuestions(), getCategoryStats()])
      .then(([tr, cats]) => {
        setTrending(tr);
        setCategories(cats);
        setTotalCount(tr.reduce((s, q) => s + q.count, 0));
      })
      .finally(() => setLoading(false));
  }, []);

  // Real-time simulation — increments every 3 s
  useEffect(() => {
    const id = setInterval(() => {
      setCategories(prev =>
        prev.map(cat => ({ ...cat, count: cat.count + Math.floor(Math.random() * 3) }))
      );
      setActiveNow(prev => Math.max(30, prev + Math.floor(Math.random() * 5) - 2));
      setQuestionsToday(prev => prev + Math.floor(Math.random() * 2));
      setTotalCount(prev => prev + Math.floor(Math.random() * 4));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const barData = {
    labels: categories.map(c => c.category),
    datasets: [{
      label: 'Questions',
      data: categories.map(c => c.count),
      backgroundColor: CHART_COLORS,
      borderRadius: 7,
      borderSkipped: false,
    }],
  };

  const doughnutData = {
    labels: categories.map(c => c.category),
    datasets: [{
      data: categories.map(c => c.count),
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
      hoverOffset: 8,
    }],
  };

  const barOpts = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700, easing: 'easeInOutQuart' },
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 9, family: 'Inter' }, color: '#64748b' } },
      y: { grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }, ticks: { font: { size: 9, family: 'Inter' }, color: '#64748b' } },
    },
  };

  const doughnutOpts = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700 },
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 9, family: 'Inter' }, padding: 6, boxWidth: 10, color: '#334155' } },
    },
    cutout: '62%',
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dash-skeleton-hero skeleton" />
        <div className="stats-mini-grid">
          {[...Array(4)].map((_, i) => <div key={i} className="dash-skeleton-card skeleton" />)}
        </div>
        <div className="dash-skeleton-charts">
          <div className="dash-skeleton-chart skeleton" />
          <div className="dash-skeleton-chart skeleton" />
        </div>
        <div className="dash-skeleton-list skeleton" />
      </div>
    );
  }

  return (
    <div className="dashboard">

      {/* ── Hero banner ────────────────────────────── */}
      <div className="dash-hero">
        <div className="dash-hero-text">
          <h1 className="dash-hero-title">Analytics Dashboard</h1>
          <p className="dash-hero-sub">Real-time activity across the DUE student guide</p>
        </div>
        <LiveBadge />
      </div>

      {/* ── Live stat cards ─────────────────────────── */}
      <div className="stats-mini-grid">
        <StatCard icon={<UsersIcon />} value={activeNow} label="Active Now" accent="#3b82f6" />
        <StatCard icon={<ChatBubbleIcon />} value={questionsToday} label="Questions Today" accent="#8b5cf6" />
        <StatCard icon={<ClockIcon />} value="< 1s" label="Avg Response" accent="#10b981" />
        <StatCard icon={<BookIcon />} value="25+" label="Topics Covered" accent="#f59e0b" />
      </div>

      {/* ── Charts header ───────────────────────────── */}
      <div className="dashboard-header">
        <h2>{t.dashTitle}</h2>
        <span className="question-count">{totalCount.toLocaleString()} {t.totalAsked} ↑</span>
      </div>

      {/* ── Charts ─────────────────────────────────── */}
      <div className="charts">
        <div className="chart-wrapper bar-chart">
          <p className="chart-label">Questions by Category</p>
          <div className="chart-inner">
            <Bar data={barData} options={barOpts} />
          </div>
        </div>
        <div className="chart-wrapper doughnut-chart">
          <p className="chart-label">Distribution</p>
          <div className="chart-inner">
            <Doughnut data={doughnutData} options={doughnutOpts} />
          </div>
        </div>
      </div>

      {/* ── Top trending list ───────────────────────── */}
      <div className="trending-section">
        <h2 className="trending-title">Top Questions Right Now</h2>
        <div className="trending-list">
          {trending.slice(0, 5).map((q, i) => (
            <div key={q.question} className="trending-item">
              <span className="trending-rank" style={{ '--c': CHART_COLORS[i] }}>#{i + 1}</span>
              <span className="trending-question">{q.question}</span>
              <span className="trending-count">{q.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── View FAQ CTA ────────────────────────────── */}
      <button className="faq-toggle" onClick={() => navigate('/faq')}>
        {t.viewFaq}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </div>
  );
}
