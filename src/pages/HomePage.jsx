import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './HomePage.css';

function ChatFeatureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function ProfileFeatureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    { Icon: ChatFeatureIcon, title: t.feat1Title, desc: t.feat1Desc, to: '/chat', color: '#3b82f6' },
    { Icon: TrendIcon, title: t.feat2Title, desc: t.feat2Desc, to: '/dashboard', color: '#8b5cf6' },
    { Icon: InfoIcon, title: t.feat3Title, desc: t.feat3Desc, to: '/faq', color: '#0ea5e9' },
    { Icon: ProfileFeatureIcon, title: t.feat4Title, desc: t.feat4Desc, to: '/profile', color: '#10b981' },
  ];

  const stats = [
    { value: '1955', label: t.statFounded },
    { value: '4 000+', label: t.statStudents },
    { value: '15+', label: t.statPrograms },
    { value: '42+', label: t.statCountries },
  ];

  return (
    <div className="home-page">
      {/* About strip */}
      <div className="about-strip">{t.aboutStripText}</div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-logo-wrap">
          <img
            src="/logo.png.avif"
            alt="University of Dunaújváros logo"
            className="hero-logo"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          <div className="hero-logo-fallback">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-5 8.18v2.64L12 17l5-3.18v-2.64L12 14l-5-2.82z" />
            </svg>
          </div>
        </div>

        <p className="hero-welcome">{t.heroWelcome}</p>
        <h1 className="hero-university">{t.heroUniversity}</h1>
        <p className="hero-tagline">{t.heroTagline}</p>
        <p className="hero-desc">{t.heroDesc}</p>

        <div className="hero-actions">
          <Link to="/chat" className="btn-hero-primary">{t.heroChatBtn}</Link>
          <Link to="/dashboard" className="btn-hero-secondary">{t.heroDashBtn}</Link>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2 className="section-title">{t.featuresTitle}</h2>
        <div className="feature-cards">
          {features.map(({ Icon, title, desc, to, color }) => (
            <Link key={to} to={to} className="feature-card" style={{ '--accent': color }}>
              <div className="feature-icon">
                <Icon />
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <h2 className="section-title stats-title">{t.statsTitle}</h2>
        <div className="stats-grid">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links strip */}
      <section className="quick-links">
        <Link to="/history" className="quick-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          {t.history}
        </Link>
        <Link to="/faq" className="quick-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
          </svg>
          {t.faq}
        </Link>
        <Link to="/profile" className="quick-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          {t.profile}
        </Link>
      </section>
    </div>
  );
}
