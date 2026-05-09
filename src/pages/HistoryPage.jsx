import { useLanguage } from '../contexts/LanguageContext';
import './HistoryPage.css';

const FACT_KEYS = [
  'histFact1','histFact2','histFact3','histFact4',
  'histFact5','histFact6','histFact7','histFact8',
];

const TIMELINE_KEYS = [
  { yearKey: 'hist1Year', titleKey: 'hist1Title', textKey: 'hist1Text' },
  { yearKey: 'hist2Year', titleKey: 'hist2Title', textKey: 'hist2Text' },
  { yearKey: 'hist3Year', titleKey: 'hist3Title', textKey: 'hist3Text' },
  { yearKey: 'hist4Year', titleKey: 'hist4Title', textKey: 'hist4Text' },
  { yearKey: 'hist5Year', titleKey: 'hist5Title', textKey: 'hist5Text' },
  { yearKey: 'hist6Year', titleKey: 'hist6Title', textKey: 'hist6Text' },
  { yearKey: 'hist7Year', titleKey: 'hist7Title', textKey: 'hist7Text' },
  { yearKey: 'hist8Year', titleKey: 'hist8Title', textKey: 'hist8Text' },
  { yearKey: 'hist9Year', titleKey: 'hist9Title', textKey: 'hist9Text' },
  { yearKey: 'hist10Year', titleKey: 'hist10Title', textKey: 'hist10Text' },
];

const BSC_KEYS = ['prog1','prog2','prog3','prog4','prog5','prog6','prog7'];
const MSC_KEYS = ['mProg1','mProg2','mProg3'];
const ENG_KEYS = ['engProg1','engProg2','engProg3'];

const CAMPUS_KEYS = [
  { titleKey:'camp1Title', textKey:'camp1Text', icon:'📚' },
  { titleKey:'camp2Title', textKey:'camp2Text', icon:'💻' },
  { titleKey:'camp3Title', textKey:'camp3Text', icon:'🔬' },
  { titleKey:'camp4Title', textKey:'camp4Text', icon:'🏠' },
  { titleKey:'camp5Title', textKey:'camp5Text', icon:'⚽' },
  { titleKey:'camp6Title', textKey:'camp6Text', icon:'🍽️' },
];

const RES_KEYS = ['res1','res2','res3','res4','res5'];
const LIFE_KEYS = ['life1','life2','life3','life4','life5','life6'];

function SectionHeader({ title }) {
  return <h2 className="hist-section-title">{title}</h2>;
}

function GlassCard({ children, className = '' }) {
  return <div className={`hist-glass-card ${className}`}>{children}</div>;
}

export default function HistoryPage() {
  const { t } = useLanguage();

  return (
    <div className="history-page">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="history-hero">
        <div className="history-hero-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h1 className="history-title">{t.historyTitle}</h1>
        <p className="history-subtitle">{t.historySubtitle}</p>
      </div>

      {/* ── Key facts grid ─────────────────────────────────────────── */}
      <div className="history-facts-grid">
        {FACT_KEYS.map(key => (
          <div key={key} className="history-fact-chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {t[key]}
          </div>
        ))}
      </div>

      {/* ── About ─────────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.aboutTitle} />
        <GlassCard>
          <p className="hist-body-text">{t.aboutText1}</p>
          <p className="hist-body-text" style={{ marginTop: '0.75rem', marginBottom: 0 }}>{t.aboutText2}</p>
        </GlassCard>
      </div>

      {/* ── Academic Calendar ─────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title="Academic Calendar 2024–25" />
        <div className="calendar-grid">
          <GlassCard className="calendar-semester">
            <h3 className="calendar-semester-label autumn">Autumn Semester 2024</h3>
            <div className="calendar-rows">
              <div className="calendar-row"><span className="cal-label">Orientation Week</span><span className="cal-date">26–30 Aug 2024</span></div>
              <div className="calendar-row"><span className="cal-label">Teaching Period</span><span className="cal-date">2 Sep – 13 Dec 2024</span></div>
              <div className="calendar-row"><span className="cal-label">Exam Registration</span><span className="cal-date">2–13 Dec 2024</span></div>
              <div className="calendar-row"><span className="cal-label">Exam Period</span><span className="cal-date">6 Jan – 1 Feb 2025</span></div>
              <div className="calendar-row"><span className="cal-label">Supplementary Exams</span><span className="cal-date">3–8 Feb 2025</span></div>
            </div>
          </GlassCard>
          <GlassCard className="calendar-semester">
            <h3 className="calendar-semester-label spring">Spring Semester 2025</h3>
            <div className="calendar-rows">
              <div className="calendar-row"><span className="cal-label">Teaching Period</span><span className="cal-date">10 Feb – 23 May 2025</span></div>
              <div className="calendar-row"><span className="cal-label">Exam Registration</span><span className="cal-date">12–23 May 2025</span></div>
              <div className="calendar-row"><span className="cal-label">Exam Period</span><span className="cal-date">2–28 Jun 2025</span></div>
              <div className="calendar-row"><span className="cal-label">Supplementary Exams</span><span className="cal-date">30 Jun – 4 Jul 2025</span></div>
              <div className="calendar-row"><span className="cal-label">Career Fair</span><span className="cal-date">Spring 2025</span></div>
            </div>
          </GlassCard>
        </div>
        <p className="hist-note">Exact dates are confirmed annually on uniduna.hu. Always check NEPTUN for your personal exam registration windows.</p>
      </div>

      {/* ── Programs ──────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.programsTitle} />
        <div className="programs-grid">
          <GlassCard className="programs-col">
            <h3 className="programs-col-title">{t.programsBscLabel}</h3>
            <ul className="programs-list">
              {BSC_KEYS.map(k => <li key={k}>{t[k]}</li>)}
            </ul>
          </GlassCard>
          <GlassCard className="programs-col">
            <h3 className="programs-col-title">{t.programsMscLabel}</h3>
            <ul className="programs-list">
              {MSC_KEYS.map(k => <li key={k}>{t[k]}</li>)}
            </ul>
            <h3 className="programs-col-title" style={{ marginTop: '1rem' }}>{t.programsEngLabel}</h3>
            <ul className="programs-list programs-list--english">
              {ENG_KEYS.map(k => <li key={k}>{t[k]}</li>)}
            </ul>
          </GlassCard>
        </div>
        <p className="hist-note">{t.programsNote}</p>
      </div>

      {/* ── Campus & Facilities ────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.campusTitle} />
        <p className="hist-intro-text">{t.campusIntro}</p>
        <div className="campus-grid">
          {CAMPUS_KEYS.map(({ titleKey, textKey, icon }) => (
            <GlassCard key={titleKey} className="campus-card">
              <div className="campus-card-icon">{icon}</div>
              <h3 className="campus-card-title">{t[titleKey]}</h3>
              <p className="campus-card-text">{t[textKey]}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ── Timeline ──────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.timelineTitle} />
        <div className="timeline">
          {TIMELINE_KEYS.map(({ yearKey, titleKey, textKey }) => (
            <div key={yearKey} className="timeline-item">
              <div className="timeline-year-badge">{t[yearKey]}</div>
              <div className="timeline-dot" />
              <GlassCard className="timeline-card">
                <h3 className="timeline-card-title">{t[titleKey]}</h3>
                <p className="timeline-card-text">{t[textKey]}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* ── International Community ────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.intlTitle} />
        <GlassCard>
          <p className="hist-body-text">{t.intlText}</p>
        </GlassCard>
        <div className="intl-cards">
          <GlassCard className="intl-card">
            <h3 className="intl-card-title">{t.intlErasmusTitle}</h3>
            <p className="hist-body-text" style={{ marginBottom: 0 }}>{t.intlErasmusText}</p>
          </GlassCard>
          <GlassCard className="intl-card">
            <h3 className="intl-card-title">{t.intlStipTitle}</h3>
            <p className="hist-body-text" style={{ marginBottom: 0 }}>{t.intlStipText}</p>
          </GlassCard>
        </div>
      </div>

      {/* ── Research ──────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.researchTitle} />
        <GlassCard>
          <p className="hist-body-text">{t.researchText}</p>
          <ul className="hist-bullet-list">
            {RES_KEYS.map(k => <li key={k}>{t[k]}</li>)}
          </ul>
          <p className="hist-body-text" style={{ marginTop: '0.75rem', marginBottom: 0 }}>{t.researchTDK}</p>
        </GlassCard>
      </div>

      {/* ── Student Life ───────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.studentLifeTitle} />
        <GlassCard>
          <p className="hist-body-text">{t.studentLifeText}</p>
          <ul className="hist-bullet-list">
            {LIFE_KEYS.map(k => <li key={k}>{t[k]}</li>)}
          </ul>
          <p className="hist-note" style={{ marginBottom: 0, marginTop: '0.75rem' }}>{t.studentLifeNote}</p>
        </GlassCard>
      </div>

      {/* ── The City ──────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.cityTitle} />
        <GlassCard>
          <p className="hist-body-text">{t.cityText1}</p>
          <p className="hist-body-text" style={{ marginTop: '0.75rem' }}>{t.cityText2}</p>
          <p className="hist-body-text" style={{ marginTop: '0.75rem', marginBottom: 0 }}>{t.cityText3}</p>
        </GlassCard>
      </div>

      {/* ── Contact ───────────────────────────────────────────────── */}
      <div className="hist-section">
        <SectionHeader title={t.contactTitle} />
        <GlassCard className="contact-card">
          <div className="contact-row">
            <span className="contact-label">📍</span>
            <span>{t.contactAddress}</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">🌐</span>
            <span>{t.contactWeb}</span>
          </div>
          <div className="contact-divider" />
          <div className="contact-row">
            <span className="contact-label">{t.contactIntlLabel}</span>
            <span className="contact-value">{t.contactIntlEmail}</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">{t.contactStudyLabel}</span>
            <span className="contact-value">neptun.uniduna.hu</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">{t.contactHokLabel}</span>
            <span className="contact-value">{t.contactHokEmail}</span>
          </div>
          <div className="contact-divider" />
          <div className="contact-row contact-emergency">
            <span className="contact-label">🚨</span>
            <span>{t.contactEmergency}</span>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}
