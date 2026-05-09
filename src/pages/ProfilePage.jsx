import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useProfile } from '../contexts/ProfileContext';
import { useToast } from '../contexts/ToastContext';
import './ProfilePage.css';

const PROGRAMS = [
  'Computer Science Engineering',
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
  const { t } = useLanguage();
  const { profile: saved, saveProfile, deleteProfile } = useProfile();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t.errName;
    if (!form.studentId.trim()) e.studentId = t.errId;
    if (!form.email.trim()) e.email = t.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.errEmailInvalid;
    if (!form.program) e.program = t.errProgram;
    if (!form.year) e.year = t.errYear;
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const isFirstSave = !saved;
    saveProfile(form);
    setEditing(false);
    setErrors({});
    toast(isFirstSave ? 'Profile created!' : 'Profile updated!', 'success');
    if (isFirstSave) navigate('/');
  };

  const handleEdit = () => { setForm(saved); setEditing(true); };
  const handleDelete = () => {
    deleteProfile();
    setForm(emptyForm);
    setEditing(false);
    toast('Profile deleted.', 'info');
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
              <span className="detail-label">{t.labelStudentId}</span>
              <span className="detail-value">{saved.studentId}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">{t.labelEmail}</span>
              <span className="detail-value">{saved.email}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">{t.labelYear}</span>
              <span className="detail-value">{saved.year}</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-primary" onClick={handleEdit}>{t.profileEdit}</button>
            <button className="btn-danger" onClick={handleDelete}>{t.profileDelete}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-form-card">
        <h2>{saved ? t.profileEditTitle : t.profileTitle}</h2>
        <p className="form-subtitle">{t.profileSubtitle}</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>{t.fieldName}</label>
            <input type="text" value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="e.g. János Kovács" />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>{t.fieldId}</label>
            <input type="text" value={form.studentId} onChange={e => handleChange('studentId', e.target.value)} placeholder="e.g. DUE2024001" />
            {errors.studentId && <span className="field-error">{errors.studentId}</span>}
          </div>
          <div className="form-group">
            <label>{t.fieldEmail}</label>
            <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="e.g. janos.kovacs@uniduna.hu" />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>{t.fieldProgram}</label>
            <select value={form.program} onChange={e => handleChange('program', e.target.value)}>
              <option value="">{t.selectProgram}</option>
              {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.program && <span className="field-error">{errors.program}</span>}
          </div>
          <div className="form-group">
            <label>{t.fieldYear}</label>
            <select value={form.year} onChange={e => handleChange('year', e.target.value)}>
              <option value="">{t.selectYear}</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            {errors.year && <span className="field-error">{errors.year}</span>}
          </div>
          <div className="profile-actions">
            <button type="submit" className="btn-primary">{t.profileSave}</button>
            {saved && <button type="button" className="btn-secondary" onClick={() => setEditing(false)}>{t.profileCancel}</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
