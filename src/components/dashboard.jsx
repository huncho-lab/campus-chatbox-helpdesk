import { useEffect, useState, useCallback } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend, ResponsiveContainer,
} from "recharts";
import {
  getTrendingQuestions,
  getCategoryStats,
  getTotalQuestions,
  getAvgResponseTime,
  getRecentQuestions,
} from "../services/api";
import { MessageSquare, TrendingUp, Clock, Zap } from "lucide-react";
import "./DashboardPage.css";

const CATEGORY_COLORS = {
  library:      "#4F46E5",
  fees:         "#10B981",
  sports:       "#F59E0B",
  schedules:    "#8B5CF6",
  rules:        "#EF4444",
  facilities:   "#06B6D4",
  registration: "#EC4899",
  general:      "#6B7280",
};

const DEFAULT_CATEGORIES = [
  { category: "library", count: 0 },
  { category: "fees", count: 0 },
  { category: "sports", count: 0 },
  { category: "schedules", count: 0 },
  { category: "facilities", count: 0 },
  { category: "registration", count: 0 },
];

const SAMPLE_TRENDING = [
  { question: "What are the library hours?", count: 0, category: "library" },
  { question: "How do I pay my fees?", count: 0, category: "fees" },
  { question: "When are the final exams?", count: 0, category: "schedules" },
];

export default function DashboardPage() {
  const [trending, setTrending] = useState(SAMPLE_TRENDING);
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [total, setTotal] = useState(0);
  const [avgTime, setAvgTime] = useState(0);
  const [recent, setRecent] = useState([]);

  const refresh = useCallback(() => {
    const t = getTrendingQuestions(8);
    const c = getCategoryStats();
    const tot = getTotalQuestions();
    const avg = getAvgResponseTime();
    const rec = getRecentQuestions(5);

    setTrending(t.length > 0 ? t : SAMPLE_TRENDING);
    setCategories(c.length > 0 ? c : DEFAULT_CATEGORIES);
    setTotal(tot);
    setAvgTime(avg);
    setRecent(rec);
  }, []);

  // Auto-refresh every 5 seconds
  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 5000);
    return () => clearInterval(timer);
  }, [refresh]);

  const pieData = categories.map((c) => ({
    name: c.category,
    value: c.count || 1, // show ring even with 0 data
    real: c.count,
  }));

  return (
    <div className="dashboard-page">
      <div className="dash-header">
        <h2 className="dash-title">Analytics Dashboard</h2>
        <span className="live-badge">● LIVE</span>
      </div>

      {/* ── Stat cards ──────────────────────────────────── */}
      <div className="stat-cards">
        <div className="stat-card">
          <MessageSquare size={18} className="stat-icon indigo" />
          <div>
            <p className="stat-label">Total Questions</p>
            <p className="stat-value">{total}</p>
          </div>
        </div>
        <div className="stat-card">
          <TrendingUp size={18} className="stat-icon green" />
          <div>
            <p className="stat-label">Categories Active</p>
            <p className="stat-value">{categories.filter((c) => c.count > 0).length}</p>
          </div>
        </div>
        <div className="stat-card">
          <Clock size={18} className="stat-icon purple" />
          <div>
            <p className="stat-label">Top Category</p>
            <p className="stat-value" style={{ fontSize: "15px" }}>
              {categories[0]?.category || "—"}
            </p>
          </div>
        </div>
        <div className="stat-card">
          <Zap size={18} className="stat-icon amber" />
          <div>
            <p className="stat-label">Avg Response</p>
            <p className="stat-value">{avgTime > 0 ? `${avgTime}ms` : "—"}</p>
          </div>
        </div>
      </div>

      {/* ── Charts ──────────────────────────────────────── */}
      <div className="charts-grid">
        {/* Bar chart — category frequency */}
        <div className="chart-card">
          <h3 className="chart-title">Questions by Category</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={categories} margin={{ top: 5, right: 10, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="category" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip
                contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {categories.map((entry) => (
                  <Cell key={entry.category} fill={CATEGORY_COLORS[entry.category] || "#6B7280"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart — distribution */}
        <div className="chart-card">
          <h3 className="chart-title">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={CATEGORY_COLORS[entry.name] || "#6B7280"} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [props.payload.real, name]}
                contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
              />
              <Legend iconSize={10} wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Trending questions table ─────────────────────── */}
      <div className="chart-card trending-card">
        <h3 className="chart-title">Trending Questions</h3>
        {trending.length === 0 ? (
          <p className="empty-msg">No questions yet — start chatting!</p>
        ) : (
          <table className="trending-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Category</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {trending.map((item, i) => (
                <tr key={i}>
                  <td className="rank">{i + 1}</td>
                  <td className="question-text">{item.question}</td>
                  <td>
                    <span
                      className="cat-pill"
                      style={{
                        background: (CATEGORY_COLORS[item.category] || "#6B7280") + "18",
                        color: CATEGORY_COLORS[item.category] || "#6B7280",
                      }}
                    >
                      {item.category}
                    </span>
                  </td>
                  <td className="count-cell">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Recent activity ──────────────────────────────── */}
      {recent.length > 0 && (
        <div className="chart-card">
          <h3 className="chart-title">Recent Activity</h3>
          <div className="recent-list">
            {recent.map((q, i) => (
              <div key={i} className="recent-item">
                <span
                  className="recent-dot"
                  style={{ background: CATEGORY_COLORS[q.category] || "#6B7280" }}
                />
                <span className="recent-q">{q.question}</span>
                <span className="recent-time">{Math.round((Date.now() - q.timestamp) / 1000)}s ago</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}