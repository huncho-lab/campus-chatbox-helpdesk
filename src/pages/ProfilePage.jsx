import { useState, useEffect } from 'react';
import './ProfilePage.css';

const STORAGE_KEY = 'due_profile';

const PROGRAMS = [
  'Computer Science',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Business Administration',
  'Applied Informatics',
  'Environmental Engineering',
  'Other',
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];

const emptyForm = { name: '', studentId: '', email: '', program: '', year: '' };

export default function ProfilePage() {
  const [saved, setSaved] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.studentId.trim()) e.studentId = 'Student ID is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.program) e.program = 'Please select a program.';
    if (!form.year) e.year = 'Please select a year.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    setSaved(form);
    setEditing(false);
    setErrors({});
  };

  const handleEdit = () => {
    setForm(saved);
    setEditing(true);
  };

  const handleDelete = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(null);
    setForm(emptyForm);
    setEditing(false);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (saved && !editing) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-avatar">{saved.name.charAt(0).toUpperCase()}</div>
          <h2 className="profile-name">{saved.name}</h2>
          <span className="profile-badge">{saved.program}</span>

          <div className="profile-details">
            <div className="profile-detail">
              <span className="detail-label">Student ID</span>
              <span className="detail-value">{saved.studentId}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Email</span>
              <span className="detail-value">{saved.email}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Year</span>
              <span className="detail-value">{saved.year}</span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn-primary" onClick={handleEdit}>Edit Profile</button>
            <button className="btn-danger" onClick={handleDelete}>Delete Profile</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-form-card">
        <h2>{saved ? 'Edit Profile' : 'Create Your Profile'}</h2>
        <p className="form-subtitle">Your information is saved locally on this device.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={e => handleChange('name', e.target.value)}
              placeholder="e.g. János Kovács"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              value={form.studentId}
              onChange={e => handleChange('studentId', e.target.value)}
              placeholder="e.g. DUE2024001"
            />
            {errors.studentId && <span className="field-error">{errors.studentId}</span>}
          </div>

          <div className="form-group">
            <label>University Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => handleChange('email', e.target.value)}
              placeholder="e.g. janos.kovacs@uniduna.hu"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Program</label>
            <select value={form.program} onChange={e => handleChange('program', e.target.value)}>
              <option value="">Select a program…</option>
              {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.program && <span className="field-error">{errors.program}</span>}
          </div>

          <div className="form-group">
            <label>Year of Study</label>
            <select value={form.year} onChange={e => handleChange('year', e.target.value)}>
              <option value="">Select a year…</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            {errors.year && <span className="field-error">{errors.year}</span>}
          </div>

          <div className="profile-actions">
            <button type="submit" className="btn-primary">Save Profile</button>
            {saved && (
              <button type="button" className="btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
