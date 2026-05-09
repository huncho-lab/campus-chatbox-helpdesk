import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './DropdownMenu.css';

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}
function DashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}
function ChatMenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function FAQIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function HistoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function ProfileMenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const MENU_ITEMS = [
  { to: '/', labelKey: 'home', Icon: HomeIcon, end: true },
  { to: '/dashboard', labelKey: 'dashboard', Icon: DashIcon },
  { to: '/chat', labelKey: 'chat', Icon: ChatMenuIcon },
  { to: '/faq', labelKey: 'faq', Icon: FAQIcon },
  { to: '/history', labelKey: 'history', Icon: HistoryIcon },
  { to: '/profile', labelKey: 'profile', Icon: ProfileMenuIcon },
];

export default function DropdownMenu({ open, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`menu-overlay ${open ? 'visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`side-menu ${open ? 'open' : ''}`} aria-label={t.menu}>
        <div className="side-menu-header">
          <div className="side-menu-logo-wrap">
            <img
              src="/logo.png.avif"
              alt="DUE logo"
              className="side-menu-logo"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="side-menu-identity">
            <span className="side-menu-title">{t.appTitle}</span>
            <span className="side-menu-subtitle">{t.appSubtitle}</span>
          </div>
          <button className="side-menu-close" onClick={onClose} aria-label={t.close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="side-menu-items">
          {MENU_ITEMS.map(({ to, labelKey, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `side-menu-item${isActive ? ' active' : ''}`}
              onClick={onClose}
            >
              <span className="side-menu-item-icon"><Icon /></span>
              <span className="side-menu-item-label">{t[labelKey]}</span>
              <svg className="side-menu-item-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </NavLink>
          ))}
        </div>

        <div className="side-menu-footer">
          <span>Dunaújvárosi Egyetem © 2024</span>
        </div>
      </nav>
    </>
  );
}
