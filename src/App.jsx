import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/dashboard.jsx';
import Chat from './components/chat.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="top-bar">
          <div className="logo-section">
            <div className="logo">C</div>
            <span className="app-title">DUNAÚJVÁROS UNIVERSITY INFORMATION GUIDE</span>
          </div>
          <span className="badge">1</span>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

        <nav className="bottom-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Dashboard</NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Chat</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Profile</NavLink>
        </nav>
      </div>
    </BrowserRouter>
  );
}
