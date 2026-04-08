import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Top bar */}
        <header className="top-bar">
          <div className="logo-section">
            <div className="logo-icon">C</div>
            <div>
              <span className="app-title">Campus Helpdesk</span>
              <span className="app-sub">AI Assistant · Powered by Groq</span>
            </div>
          </div>
          <span className="groq-badge">⚡ Groq</span>
        </header>

        {/* Page content */}
        <main className="main-content">
          <Routes>
            <Route path="/"        element={<ChatPage />} />
            <Route path="/chat"    element={<ChatPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        {/* Bottom nav */}
        <nav className="bottom-nav">
          <NavLink to="/chat" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <span className="nav-icon">💬</span>
            Chat
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <span className="nav-icon">📊</span>
            Analytics
          </NavLink>
        </nav>
      </div>
    </BrowserRouter>
  );
}