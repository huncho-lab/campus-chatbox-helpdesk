import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ProfileProvider, useProfile } from './contexts/ProfileContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './components/dashboard.jsx';
import Chat from './components/chat.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from './pages/HomePage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DropdownMenu from './components/DropdownMenu.jsx';
import './App.css';

// ── Search data ────────────────────────────────────────────────
const SEARCH_INDEX = [
  { label: 'NEPTUN system access', route: '/faq?q=neptun' },
  { label: 'English-taught programs', route: '/faq?q=english' },
  { label: 'Dormitory accommodation', route: '/faq?q=dormitory' },
  { label: 'Tuition fees', route: '/faq?q=tuition' },
  { label: 'Stipendium Hungaricum scholarship', route: '/faq?q=stipendium' },
  { label: 'Exam registration on NEPTUN', route: '/faq?q=exam' },
  { label: 'Library hours', route: '/faq?q=library' },
  { label: 'Getting from Budapest airport', route: '/faq?q=airport' },
  { label: 'Student card', route: '/faq?q=student+card' },
  { label: 'Hungarian grading system', route: '/faq?q=grade' },
  { label: 'MOODLE platform', route: '/faq?q=moodle' },
  { label: 'Residence permit', route: '/faq?q=residence' },
  { label: 'University history', route: '/history' },
  { label: 'Academic calendar & semester dates', route: '/history' },
  { label: 'Programs offered', route: '/history' },
  { label: 'Campus facilities', route: '/history' },
  { label: 'International community & Erasmus', route: '/history' },
  { label: 'Contact & key offices', route: '/history' },
  { label: 'My profile', route: '/profile' },
  { label: 'Analytics dashboard', route: '/dashboard' },
  { label: 'Ask the AI assistant', route: '/chat' },
];

// ── Icons ──────────────────────────────────────────────────────
function GraduationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-5 8.18v2.64L12 17l5-3.18v-2.64L12 14l-5-2.82z" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function SearchIconSm() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ── Global search overlay ──────────────────────────────────────
function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  const go = useCallback((route) => {
    navigate(route);
    onClose();
    setQuery('');
  }, [navigate, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-modal-input-wrap">
          <SearchIconSm />
          <input
            className="search-modal-input"
            autoFocus
            placeholder="Search anything…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') { onClose(); setQuery(''); }
              if (e.key === 'Enter' && results.length > 0) go(results[0].route);
            }}
            aria-label="Global search"
          />
          <button className="search-modal-close" onClick={() => { onClose(); setQuery(''); }} aria-label="Close search">
            Esc
          </button>
        </div>
        {results.length > 0 && (
          <ul className="search-results" role="listbox">
            {results.map(r => (
              <li key={r.label} role="option">
                <button className="search-result-item" onClick={() => go(r.route)}>
                  <SearchIconSm />
                  <span>{r.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query.trim().length > 0 && results.length === 0 && (
          <p className="search-no-results">No results for "{query}"</p>
        )}
        {query.trim().length === 0 && (
          <p className="search-hint">Start typing to search across FAQs, history, and pages…</p>
        )}
      </div>
    </div>
  );
}

// ── App shell ──────────────────────────────────────────────────
const HOME_ROUTES = new Set(['/']);

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();
  const { profile } = useProfile();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = HOME_ROUTES.has(location.pathname);

  return (
    <>
      <div className="app-bg" aria-hidden="true" />
      <div className="app">
        <header className="top-bar">
          <div className="logo-section">
            {!isHome && (
              <button
                className="back-btn"
                onClick={() => navigate(-1)}
                aria-label="Go back"
              >
                <BackIcon />
              </button>
            )}
            <div className="uni-logo-wrap">
              <img
                src="/logo.png.avif"
                alt="DUE logo"
                className="uni-logo"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="uni-logo-fallback">
                <GraduationIcon />
              </div>
            </div>
            <div className="logo-text">
              <span className="app-title">{t.appTitle}</span>
              <span className="app-subtitle">{t.appSubtitle}</span>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <SearchIconSm />
            </button>

            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
              <span className="lang-sep" aria-hidden="true">|</span>
              <span className={lang === 'hu' ? 'lang-active' : ''}>HU</span>
            </button>

            {profile && (
              <Link to="/profile" className="header-avatar" aria-label="View profile">
                {profile.name.charAt(0).toUpperCase()}
              </Link>
            )}

            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label={t.menu}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </header>

        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <DropdownMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <ToastProvider>
          <BrowserRouter>
            <AppShell />
          </BrowserRouter>
        </ToastProvider>
      </ProfileProvider>
    </LanguageProvider>
  );
}
