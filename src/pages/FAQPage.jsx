import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrendingQuestions } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import './FAQPage.css';

function FAQSkeleton() {
  return (
    <div className="faq-list-full">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="faq-skeleton-item">
          <div className="skeleton skeleton-rank" />
          <div className="faq-skeleton-body">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-badge" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function FAQPage() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState(null);
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    getTrendingQuestions()
      .then(setQuestions)
      .finally(() => setLoading(false));
  }, []);

  // Sync ?q= param with input
  useEffect(() => {
    const q = query.trim();
    if (q) setSearchParams({ q }, { replace: true });
    else setSearchParams({}, { replace: true });
    setOpenIdx(null);
  }, [query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return questions;
    return questions.filter(item =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q)
    );
  }, [query, questions]);

  return (
    <div className="faq-page">
      <div className="faq-header-card">
        <div className="faq-header-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h1 className="faq-page-title">{t.faqTitle}</h1>
          <p className="faq-page-subtitle">{t.faqSubtitle}</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="faq-search-wrap">
        <span className="faq-search-icon"><SearchIcon /></span>
        <input
          className="faq-search-input"
          type="search"
          placeholder="Search questions and answers…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search FAQs"
        />
        {query && (
          <button className="faq-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {loading ? <FAQSkeleton /> : (
        <>
          {query && (
            <p className="faq-result-count">
              {filtered.length === 0
                ? 'No results found'
                : `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${query}"`}
            </p>
          )}
          <div className="faq-list-full">
            {filtered.length === 0 ? (
              <div className="faq-empty">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <p>No questions match your search.</p>
                <button onClick={() => setQuery('')}>Clear search</button>
              </div>
            ) : filtered.map((q, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={q.question} className={`faq-full-item${isOpen ? ' faq-full-item--open' : ''}`}>
                  <button
                    className="faq-full-trigger"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-full-rank">#{i + 1}</div>
                    <div className="faq-full-body">
                      <p className="faq-full-question">{q.question}</p>
                      <span className="faq-full-count">{q.count} {t.faqAsks}</span>
                    </div>
                    <svg
                      className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text">{q.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
